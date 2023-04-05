import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { ModalService } from './../../services/modal.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit {
  ratingForm!: FormGroup;
  updateid = '';
  podcastDetail: any = {};
  currentUrl: any
  showSpin = false;
  showReadMoreButton = false;
  descriptionReadMoreButton = false;
  isShare: boolean = false;
  currentRate = 0;
  averageRating = 0;
  tabType: string = environment.tabType.podcast;
  sortOrders: any[] = [];
  similarPodcasts: any = [];
  errorMessage: string = '';
  ratings: any = [];
  modifiedCategory: any = [];
  isFavourite: boolean = false;
  public IMAGE_URL = environment.IMAGE_URL;
  isReadMore = true;
  audioFile: string = '';
  selectedSortOrder: string = "Izvēlies nodaļu";
  lastEpisodes: any = [];
  isChapterReadMore = true;
  podcastChapters: any = [];
  isSubscribed: boolean = false;
  podcastChapterArr: any = [];
  popularPodcastList: any = [];
  totalSubscribers = 0;
  showShimmer = true;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private cusModalService: ModalService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      rating: [''],
      bookType: ['']
    })

    this.currentUrl = this.router.url;
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    this.route.queryParams.subscribe(params => {
      this.updateid = params['id'] != undefined ? params['id'] : null;
      this.tabType = params['type'] != undefined ? params['type'] : null;
      if (this.updateid != undefined) {
        this.getPodcastDetails(this.updateid, this.tabType);
      }
    });
  }

  setMetaInfo(podcastDetails: any) {
    let allCategoryName = []
    for (let data of podcastDetails.category) {
      allCategoryName.push(data.item_text_EN)
    }
    
    let metaTitle = `${podcastDetails.name}. Podkast. ${podcastDetails.author}. ${allCategoryName}. Audiolasītava. Latvija. Klausies, Lasi, Baudi.`;
    let metaDescription = `Audiolasītava piedāvā ${podcastDetails.name}. Podkāstu veidojis  ${podcastDetails.author}.  Labākie stāsti sākas Audiolasitava.lv , lielākajā audiogrāmatu, e-grāmatu un podkāstu platformā Latvijā. Klausies, lasi un baudi`;
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }

  //  get podcast details  //
  getPodcastDetails(id: any, type: any) {
    this.sortOrders = []
    this.showSpin = true;
    this.tabType = type;
    this.apiService.getData(`webPodcast/${id}`).subscribe(
      (result: any) => {
        this.showShimmer = false
        this.podcastDetail = result.data;
        this.setMetaInfo(result.data)

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('type', this.tabType)
        }

        this.similarPodcasts = this.podcastDetail.similarPodcasts;

        this.errorMessage = (this.similarPodcasts == undefined || this.similarPodcasts.length < 1) ? 'No record found !!!' : '';
        this.averageRating = this.podcastDetail?.rating;

        this.modifiedCategory = [];
        for (let i = 0; i < this.podcastDetail?.category?.length; i++) {
          this.modifiedCategory.push({ "className": this.getClass(i), "_id": this.podcastDetail?.category[i]._id, "name": this.podcastDetail?.category[i].item_text_LV })
        }

        this.getLastEpisodes(this.podcastDetail.podcastByChapters)
        for (let item of this.podcastChapters) {
          this.sortOrders.push([item.episodeName, this.chapterTimeFormat(item.episodeLength)])
        }

        if (isPlatformBrowser(this.platformId)) {
          if (localStorage.getItem('authorization') !== null) {
            this.apiService.getData(`web/isFavourite/${id}`).subscribe(
              (response: any) => {
                this.isFavourite = response.data.isFavourite
              }
            )

            this.apiService.getData(`web/getSubscription/${id}`).subscribe(
              (response: any) => {
                this.isSubscribed = response.data.isSubscribed
              }
            )

            this.apiService.getData(`web/getRating/${id}`).subscribe(
              (response: any) => {
                this.currentRate = response.data.rating
              }
            )
          }
        }

        if (this.podcastDetail.description.length >= 380) {
          this.descriptionReadMoreButton = true;
        }
        else {
          this.descriptionReadMoreButton = false;
        }

        this.showSpin = false;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )

    this.apiService.getData(`webPodcast/popular/${id}`).subscribe(
      (result: any) => {
        this.popularPodcastList = result.data;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )

    this.apiService.getData(`web/totalSubscriber/${id}`).subscribe(
      (result: any) => {
        this.totalSubscribers = result.data.totalSubscriber;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )
  }

  //  get last episodes  //
  getLastEpisodes(podcastData: any) {
    this.podcastChapters = []
    for (let data of podcastData) {
      for (let chapters of data.episodes) {
        if (chapters.episodeDescription.length >= 50) {
          chapters.showReadMoreButton = true;
        }
        else {
          chapters.showReadMoreButton = false
        }
        this.podcastChapters.push(chapters)
      }
    }
    this.lastEpisodes = [...this.podcastChapters]

    this.lastEpisodes.sort(function compare(a: any, b: any) {
      var dateA: any = new Date(a.uploadDate);
      var dateB: any = new Date(b.uploadDate);
      return dateB - dateA;
    });
  }

  //  chapter time format  //
  chapterTimeFormat(d: any) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }
  showChapterText() {
    this.isChapterReadMore = !this.isChapterReadMore
  }

  //  similar Book Detail  //
  similarBookDetail(id: any) {
    this.router.navigate(
      ['podcast-detail/'],
      { queryParams: { 'id': id, 'type': this.tabType } }
    );
  }

  //  get rating html //
  getRating(data: any) {
    let beforePointValue = data.toString().split(".")[0]
    let afterPointValue = data.toString().split(".")[1]
    var temp: any = [0, 1, 2, 3, 4];
    let html = '';
    for (let i = 0; i < temp.length; i++) {
      if (beforePointValue <= i) {
        if (afterPointValue && afterPointValue != 0) {
          html += `<li ><img src="/assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`;
          afterPointValue = undefined;
        } else {
          html += `<li ><img src="/assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`
        }
      } else {
        html += `<li ><img src="/assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`;
      }
    }
    return html;
  }

  //  podcast favourite / unfavourite  //
  favouriteBook(id: any, isFavourite: any) {
    if (isPlatformBrowser(this.platformId)) {

      if (localStorage.getItem('authorization') !== null) {
        let favourite: any = (isFavourite == true) ? false : true;
        this.isFavourite = favourite;
        let type = this.tabType;

        this.apiService.putData(`web/favourite/${id}?isFavourite=${favourite}&type=${type}`, '')
          .subscribe(
            (result: any) => {
              this.apiService.passValue(result.data.favouriteCount);
              this.toastr.success(result.responseMessage, 'Success!');
            },
            (error: any) => {
              this.toastr.error(error.error.responseMessage, 'Error!');
            },
          )
      } else {
        this.router.navigate(
          ['/login']
        );
      }
    }
  }

  //  subscribe Podcast  //
  subscribePodcast(id: any, podcastSubscribed: any) {
    if (isPlatformBrowser(this.platformId)) {

      if (localStorage.getItem('authorization') !== null) {
        let subscribe: any = (podcastSubscribed == true) ? false : true;
        this.isSubscribed = subscribe;
        let type = this.tabType;

        this.apiService.putData(`webPodcast/addSubscription/${id}?isSubscribed=${this.isSubscribed}&bookType=${type}`, '')
          .subscribe(
            (result: any) => {
              this.totalSubscribers = result.data.followers
              this.toastr.success(result.responseMessage, 'Success!');
            },
            (error: any) => {
              this.toastr.error(error.error.responseMessage, 'Error!');
            },
          )
      } else {
        this.router.navigate(
          ['/login']
        );
      }
    }
  }

  //  not Subscribed Error  //
  notSubscribedError() {
    this.toastr.error('Subscribe to listen to the podcast.', 'Error!');
  }

  //  all podcast Episodes  // 
  allEpisodes(id: any) {
    this.router.navigate(
      ['podcast-episodes/'],
      { queryParams: { 'id': id, 'type': this.tabType } }
    );
  }

  //  open rating modal  //
  openSm(content: any) {
    if (isPlatformBrowser(this.platformId)) {

      if (localStorage.getItem('authorization') !== null) {
        this.modalService.open(content, { size: 'sm' });
      } else {
        this.router.navigate(
          ['/login']
        );
      }
    }
  }

  //  add podcast rating  //
  addBookRating(bookRating: any, podcastDetail: any, modal: any) {
    if (this.updateid) {
      this.apiService.putData(`webPodcast/addRating/${this.updateid}?bookType=${this.tabType}&rating=${bookRating}`, '').subscribe(
        (result: any) => {
          this.averageRating = result?.data?.rating
          this.toastr.success('Rating added.', 'Success!');
        },
        (error) => {
          this.toastr.error(error.error.responseMessage, 'Error!');
        },
      );
    }
    modal.close('Save click')
  }

  //  open player model  // podcastByChapters
  openModal(content: any, url: any, type: any, urlType: any, chapterName: any, episodeDetails: any) {
    this.podcastDetail.modalStatus = 'open';
    this.podcastDetail.bookType = this.tabType;
    this.podcastDetail.podcastByChapters = this.podcastChapters;
    this.podcastDetail.isFavourite = this.isFavourite;

    if (isPlatformBrowser(this.platformId)) {

      if ((((localStorage.getItem('authorization') == null) || (localStorage.getItem('authorization') != null)) && ((urlType == 'audioPresentation') || (episodeDetails.season == 1 && episodeDetails.episode == 1)))) {
        this.cusModalService.open(this.podcastDetail, chapterName, urlType);
      }
      else if ((localStorage.getItem('authorization') != null) && ((episodeDetails.season != 1) || (episodeDetails.episode != 1)) && !this.isSubscribed) {
        this.toastr.error('Subscribe podcast to listen the latest episodes.', 'Error!');
      }
      else if ((localStorage.getItem('authorization') != null) && ((episodeDetails.season != 1) || (episodeDetails.episode != 1)) && this.isSubscribed) {
        this.cusModalService.open(this.podcastDetail, chapterName, urlType);
      }
      else {
        this.router.navigate(
          ['/login']);
      }
    }
  }

  //  select podcast chapter  //
  ChangeSortOrder(newSortOrder: string, content: any, url: any, type: any, urlType: any) {
    this.selectedSortOrder = newSortOrder;
    let autoPlayArr = [];

    for (let i = 0; i < url.length; i++) {
      autoPlayArr.push(url[i].episodeUrl)
      this.autoPlayNextSong(autoPlayArr)
      if (url[i].episodeName == newSortOrder) {
        let value = url[i].episodeUrl
        this.openModal(content, value, type, urlType, newSortOrder, url[i])
      }
    }
  }

  //  play Latest Episode  //
  playLatestEpisode(newSortOrder: string, content: any, url: any, type: any, urlType: any) {
    this.selectedSortOrder = newSortOrder;

    for (let i = 0; i < url.length; i++) {
      if (url[i].episodeName == newSortOrder) {
        let value = url[i].episodeUrl
        this.openModal(content, value, type, urlType, newSortOrder, url[i])
      }
    }
  }

  //  view podcast by category ID  //
  viewPodcastByCategoryId(type: any, categoryId: any) {
    this.router.navigate(
      ['/all-podcasts/'],
      { queryParams: { 'type': type, 'id': categoryId } }
    );
  }

  getClass(index: any) {
    if (index == 0) {
      return 'alteleButton'
    }
    if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'alteleButton') {
      return 'LiteraturaButton';
    }
    else if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'LiteraturaButton') {
      return 'ThrillerButton';
    }
    else if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'ThrillerButton') {
      return 'alteleButton';
    }
    return '';
  }



  //  autoplayer for chapters  //
  autoPlayNextSong(songs: any) {
    var song: any = document.getElementById('myAudio');
    var currentSong = 0;
    var len = songs.length;
    function playSong(baseUrl: any, index: any) {
      song.src = baseUrl + songs[index];
      song.play();
    }
    if (song != null) {
      song.addEventListener("ended", () => {
        currentSong++;
        if (currentSong == len) {
          currentSong = 0;
          playSong(this.IMAGE_URL, currentSong);
        }
        else {
          playSong(this.IMAGE_URL, currentSong);
        }
      })
    }
  }
}

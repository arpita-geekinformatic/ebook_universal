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


@Component({
  selector: 'app-podcast-episodes',
  templateUrl: './podcast-episodes.component.html',
  styleUrls: ['./podcast-episodes.component.scss']
})

export class PodcastEpisodesComponent implements OnInit {
  updateid = '';
  tabType: string = environment.tabType.podcast;
  skip: number = 0;
  limit: number = 10;
  isSpinner = false;
  errorMessage: string = '';
  episodeList: any = [];
  totalRecords = 0;
  public IMAGE_URL = environment.IMAGE_URL;
  showReadMoreButton = false;
  isChapterReadMore = true;
  showShimmer = true;
  isSubscribed: boolean = false;
  podcastDetail: any = {};
  isFavourite: boolean = false;


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
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    this.route.queryParams.subscribe(params => {
      this.updateid = params['id'] != undefined ? params['id'] : null;
      this.tabType = params['type'] != undefined ? params['type'] : null;
      if (this.updateid != undefined) {
        this.getPodcastEpisodes(this.updateid, this.skip, this.limit);
      }
    });
  }

  //  get Podcast Episodes  //
  getPodcastEpisodes(id: any, skip: any, limit: any) {
    this.isSpinner = false

    this.apiService.getData(`webPodcast/episodes/${id}?skip=${skip}&limit=${limit}`).subscribe(
      (result: any) => {
        this.showShimmer = false
        this.isSpinner = true
        this.podcastDetail = result.data

        for (let chapters of this.podcastDetail.podcastByChapters) {
          if (chapters.episodeDescription.length >= 280) {
            chapters.showReadMoreButton = true;
          }
          else {
            chapters.showReadMoreButton = false
          }
          this.episodeList.push(chapters)
        }

        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.episodes < 1 ? 'No record found !!!' : ''
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )
  }

  //  chapter time format  //
  chapterTimeFormat(d: any) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
  }


  showChapterText() {
    this.isChapterReadMore = !this.isChapterReadMore
  }

  //  on scroll down load more data  //
  onScroll() {
    if (this.skip == 0 && this.episodeList.length < 1) {
      this.skip = 0;
    }
    if (this.episodeList.length != this.totalRecords) {
      this.skip = this.skip + 10;
      setTimeout(() => {
        this.getPodcastEpisodes(this.updateid, this.skip, this.limit)
      }, 1000)
    }
  }

  //  open subscribtion modal  // 
  openMd(content: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('authorization') !== null) {
        this.modalService.open(content, { size: 'md' });
      } else {
        this.router.navigate(
          ['/login']
        );
      }
    }
  }

  //  check Subscription  //
  checkSubscription(episodeData: any, modalContent: any) {
    if (episodeData.season == 1 && episodeData.episode == 1) {
      console.log('**************episodeData ', episodeData);
      this.playEpisode(episodeData.episodeName, '', [episodeData], this.tabType, 'podcastByChapters')
    }
    else {
      if (isPlatformBrowser(this.platformId)) {
        if (localStorage.getItem('authorization') !== null) {
          this.apiService.getData(`web/isFavourite/${this.updateid}`).subscribe(
            (response: any) => {
              this.isFavourite = response.data.isFavourite
            }
          )

          this.apiService.getData(`web/getSubscription/${this.updateid}`).subscribe(
            (response: any) => {
              this.isSubscribed = response.data.isSubscribed

              if (this.isSubscribed) {
                console.log('111111111111 ', this.isSubscribed);
                this.playEpisode(episodeData.episodeName, '', this.episodeList, this.tabType, 'podcastByChapters')
              }
              else {
                console.log('22222222222', this.isSubscribed);
                this.openMd(modalContent)
              }
            },
            (error: any) => {
              if (error.error.responseCode == 403) {
                if (isPlatformBrowser(this.platformId)) {
                  localStorage.removeItem('authorization')
                  localStorage.removeItem('name');
                  this.router.navigate(
                    ['/login']);
                }
              }
              else {
                this.toastr.error(error.error.responseMessage, 'Kļūda!');
              }
            }
          )
        }
        else {
          this.router.navigate(
            ['/login']
          );
        }
      }
    }
  }

  //  play Episode  //
  playEpisode(newSortOrder: string, content: any, url: any, type: any, urlType: any) {
    for (let i = 0; i < url.length; i++) {
      if (url[i].episodeName == newSortOrder) {
        let value = url[i].episodeUrl != '' ? url[i].episodeUrl : url[i].externalUrl
        this.openModal(content, value, type, urlType, newSortOrder, url[i])
      }
    }
  }

  //  open player model  //
  openModal(content: any, url: any, type: any, urlType: any, chapterName: any, episodeDetails: any) {
    this.podcastDetail.modalStatus = 'open';
    this.podcastDetail.bookType = this.tabType;
    // this.podcastDetail.podcastByChapters = this.podcastChapters;
    this.podcastDetail.isFavourite = this.isFavourite;
    this.podcastDetail.isSubscribed = this.isSubscribed;

    if (isPlatformBrowser(this.platformId)) {
      if ((localStorage.getItem('authorization') != null) || (urlType == 'bookFragment') || (urlType == 'audioPresentation') || (episodeDetails.season == 1 && episodeDetails.episode == 1)) {
        this.cusModalService.open(this.podcastDetail, chapterName, urlType);
      } else {
        this.router.navigate(
          ['/login']);
      }
    }
  }


  addSubscription(modal: any) {
    console.log('######### this.updateid ', this.updateid);

    if (this.updateid) {
      // this.apiService.putData(`webPodcast/addRating/${this.updateid}?bookType=${this.tabType}&rating=${bookRating}`, '').subscribe(
      //   (result: any) => {
      //     this.toastr.success('Rating added.', 'Success!');
      //   },
      //   (error) => {
      //     this.toastr.error(error.error.responseMessage, 'Error!');
      //   },
      // );
    }
    modal.close('Save click')

  }
}

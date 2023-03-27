import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  TemplateRef,
  ViewChild,
  ElementRef,
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'
import { AuthService } from '../../services/auth.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { Subscription } from 'rxjs'
import { ModalService } from 'src/app/services/modal.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { environment } from 'src/environments/environment'
import { first, take } from 'rxjs/operators'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('content', { static: false }) content: TemplateRef<any> | undefined
  @Output() newItemEvent = new EventEmitter<string>()
  @Output() newSearchEvent = new EventEmitter<string>()
  @ViewChild('ref') ref: ElementRef | undefined

  hide: boolean = false
  updateid = ''
  tabType = ''
  name: any = ''
  totalRecords = 0
  token: any = ''
  searchForm!: FormGroup
  newSubscription!: Subscription
  isFavourite: boolean = false

  modalData: any
  public IMAGE_URL = environment.IMAGE_URL
  playerType: string = ''
  selectedChapter: string = ''
  isPlayerShow = false
  isMini = false

  mainAudio: any
  mainAudioLength: any
  timeLeftString: any
  timeCountString: any
  timeLeft: number = 0
  timeCount: number = 0
  interval: any
  currentChapter: any;
  sortOrders: any[] = [];
  showAudioList: boolean = false;
  isPlay = false;
  bookDuration!: any;
  currentChapterName: string = '';
  playbackUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private cusModalService: ModalService,
  ) { }

  ngOnInit(): void {
    // console.log('78 @@@@@@@@@@@@@@@ ');

    setTimeout(() => {
      this.newSubscription = this.cusModalService.currentMessage.pipe().subscribe(async (res: any) => {
        // console.log('80 +++++++++++++ ');

        if (res.modalStatus == 'open') {
          this.modalData = res;
          this.isPlayerShow = true;
          this.isFavourite = res.isFavourite ? res.isFavourite : false;

          this.subscribedData(this.modalData)
        }
      })
    }, 200)

    this.tabType = localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.podcast ? environment.tabType.podcast : localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.ebook ? environment.tabType.ebook : environment.tabType.audiobook;

    localStorage.setItem('type', this.tabType)

    this.searchForm = this.formBuilder.group({ search: [''] })
    this.favouriteCount()
    this.route.queryParams.subscribe((params) => {
      if (params['searchFilter'] != undefined) {
        this.searchForm.patchValue({
          search: params['searchFilter'],
        })
        this.apiService.getData(`web/bookSearch?searchFilter=${params['searchFilter']}&skip=0&limit=10`).subscribe(
          (res: any) => {
            this.newSearchEvent.emit(res.data)
          },
          (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!')
          },
        )
      }
      if (params['id'] != undefined) {
        this.updateid = '/all'
      } else {
        this.updateid = this.router.url.split('?')[0]
      }
    })
    this.name = localStorage.getItem('name')
    this.token = localStorage.getItem('authorization')
    if (localStorage.getItem('authorization') != null || localStorage.getItem('authorization') != undefined) {
      this.getFavouriteList()
    }
  }

  ngOnDestroy() {
    this.newSubscription.unsubscribe()
  }

  //  open player according to subscribe data  //
  subscribedData(modalData: any) {
    console.log('176 ################ ',);

    if (localStorage.getItem('isMini') == 'true') {
      this.isMini = true;
    } else {
      localStorage.setItem('isMini', 'false')
    }

    if (modalData.bookType.toLocaleLowerCase() == environment.tabType.ebook) {
      for (let item of modalData.bookByChapters) {
        this.sortOrders.push([item.chapterName, item.chapterLength])
      }
      this.bookDuration = modalData.length + ' pages'
    }
    if (modalData.bookType.toLocaleLowerCase() == environment.tabType.podcast) {

      if (this.sortOrders.length == 0 && localStorage.getItem('authorization') !== null && modalData.isSubscribed) {
        for (let item of modalData.podcastByChapters) {
          this.sortOrders.push([item.episodeName, item.episodeLength])
        }
      }
      this.currentChapterName = modalData.currentChapterName;
      this.playerType = modalData.currentUrlType;
      this.mSet();
      this.startTimer();

      if ((this.playerType.toLocaleLowerCase() == 'podcastbychapters') && (!this.playbackUpdate)) {
        this.addPlayback(modalData._id)
      }
      // console.log('222222222 playbackUpdate ',this.playbackUpdate);
    }
    else {
      console.log('else');
      for (let item of modalData.bookByChapters) {
        this.sortOrders.push([item.chapterName, this.chapterTimeFormat(item.chapterLength)])
      }
      this.timeFormat(modalData.length);
      this.currentChapterName = modalData.currentChapterName;
      this.playerType = modalData.currentUrlType;
      this.mSet();
      this.startTimer();
    }
  }

  toggle() {
    this.hide = !this.hide
  }

  //  on book type tab change  //
  tabClick(type: any) {
    localStorage.setItem('type', type)

    this.newItemEvent.emit(type);
    if (type.toLocaleLowerCase() == environment.tabType.podcast) {
      this.router.navigate(['/podcast']);
    } else {
      this.router.navigateByUrl('home')
    }
    this.tabType = type;
  }

  //  login  //
  logIn() {
    this.router.navigate(['/login'])
  }

  //  logout  //
  logout() {
    localStorage.removeItem('authorization')
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('isMini');
    this.token = null

    this.cusModalService.open('', '', '');
    this.router.navigate(['/login'])
  }

  //  change password  //
  changePassword() {
    this.router.navigate(['/change-password'])
  }

  //  update profile  //
  updateProfile() {
    this.router.navigate(['/updateProfile'])
  }

  //  get favourite book count  //
  getFavouriteList() {
    this.apiService.getData('web/favouriteCount').subscribe(
      (res: any) => {
        console.log('223 ============ res ',res);
        this.totalRecords = res.data.totalRecord
      },
      (error) => {
        // this.toastr.error(error.error.responseMessage, 'Error!');
      },
    )
  }

  //  get all favourite list  //
  favouriteClick(url: any) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([url])
    } else {
      this.router.navigate(['/login'])
    }
  }

  //  update favourite count on new book  //
  favouriteCount() {
    this.newSubscription = this.apiService.stringSubject.subscribe((data) => {
      this.totalRecords = data
    })
  }

  //  on book search filter  //
  onSearchChange(event: any) {
    this.router.navigate(['/search/'], {
      queryParams: { searchFilter: event.target.value },
    })
    this.apiService
      .getData(
        `web/bookSearch?searchFilter=${event.target.value}&skip=0&limit=10`,
      )
      .subscribe(
        (res: any) => {
          if (res.responseCode === 200) {
            this.newSearchEvent.emit(res.data)
          }
        },
        (error) => {
          this.toastr.error(error.error.responseMessage, 'Error!')
        },
      )
  }

  // search() {
  //   this.router.navigate(
  //     ['/search/']
  //   );
  // }

  //  add Playback  //
  addPlayback(id: any) {
    console.log('311 &&&&&&&&&&&&&& addPlayback');

    // if (localStorage.getItem('authorization') !== null) {
    //   this.playbackUpdate = true
    //   // this.apiService.putData(`webPodcast/addPlaybacks/${id}`, '')
    //   //   .subscribe(
    //   //     (result: any) => {
    //   //       // this.toastr.success(result.responseMessage, 'Success!');
    //   //     },
    //   //     (error: any) => {
    //   //       // this.toastr.error(error.error.responseMessage, 'Error!');
    //   //     },
    //   //   )
    // } else {
    //   this.router.navigate(
    //     ['/login']
    //   );
    // }
  }

  miniPlayer() {
    this.isMini = true;
    localStorage.setItem('isMini', 'true');
  }

  maximizePlayer() {
    this.isMini = false;
    localStorage.setItem('isMini', 'false');
  }

  //  book favourite / unfavourite  //
  favouriteBook(id: any, isFavourite: any) {
    if (localStorage.getItem('authorization') !== null) {
      let favourite: any = isFavourite == true ? false : true
      this.isFavourite = favourite
      let type = this.tabType

      var api: any = this.apiService.putData(`web/favourite/${id}?isFavourite=${favourite}&type=${type}`, '')
      api.subscribe(
        (result: any) => {
          this.apiService.passValue(result.data.favouriteCount)
          this.toastr.success(result.responseMessage, 'Error!')
        },
        (error: any) => {
          this.toastr.error(error.error.responseMessage, 'Error!')
        }
      )
    } else {
      this.router.navigate(['/login'])
    }
  }

  //  AUDIO PLAYER  //
  mSet() {
    let dur: any = document.getElementById('dur')
    console.log('>>>>> dur', !localStorage.getItem('isMini'), dur);

    if ((dur != null) && (!localStorage.getItem('isMini'))) {
      console.log('334 4444444444444');
      
      this.selectedChapter = this.currentChapterName;

      for (let chapters of this.modalData.bookByChapters) {
        if (chapters.chapterName == this.selectedChapter) {

          let oAudio: any = document.getElementById('main-audio');
          this.mainAudio = oAudio.src;
          oAudio.currentTime = dur.value;

          this.mainAudioLength = parseInt(chapters.chapterLength)
          this.timeCount = dur.value
          this.timeLeft = this.mainAudioLength - this.timeCount

          var date = new Date(0)
          date.setSeconds(this.timeLeft) // specify value for SECONDS here
          this.timeLeftString = date.toISOString().substring(11, 19)
          var date = new Date(0)
          date.setSeconds(0) // specify value for SECONDS here
          this.timeCountString = date.toISOString().substring(11, 19)
        }
      }
    }
    else {
      console.log('357 777777777777');
      return this.loadMusic(this.currentChapterName, this.playerType);
    }
  }

  //  restart Audio  //
  restartAudio() {
    this.mainAudio = ''
    this.mainAudioLength = ''
    this.timeLeft = 0
    this.timeCount = 0

    setTimeout(() => {
      this.loadMusic(this.currentChapter, this.playerType)
    }, 100)
  }

  //  change to previous audio chapter  //
  previousAudioChapter() {
    let indexNumber = this.sortOrders.findIndex((element: any) => {
      return element.includes(this.currentChapter)
    })
    let nextChapter = this.sortOrders[indexNumber - 1]
    this.loadMusic(nextChapter[0], this.playerType)
  }

  //  prev audio by 30 sec  //
  prevAudio10sec() {
    this.timeLeft = this.timeLeft + 30.0
    this.timeCount = this.timeCount - 30.0 < 0 ? 0 : this.timeCount - 30.0

    var date = new Date(0)
    date.setSeconds(this.timeLeft) // specify value for SECONDS here
    this.timeLeftString = date.toISOString().substring(11, 19)

    var date = new Date(0)
    date.setSeconds(this.timeCount) // specify value for SECONDS here
    this.timeCountString = date.toISOString().substring(11, 19)

    let oAudio: any = document.getElementById('main-audio')
    oAudio.currentTime -= 30.0
  }

  //  fwd audio by 30 sec  //
  fwdAudio10sec() {
    this.timeLeft = this.timeLeft - 30.0
    this.timeCount =
      this.timeCount + 30.0 > this.mainAudioLength
        ? this.mainAudioLength
        : this.timeCount + 30.0

    var date = new Date(0)
    date.setSeconds(this.timeLeft) // specify value for SECONDS here
    this.timeLeftString = date.toISOString().substring(11, 19)

    var date = new Date(0)
    date.setSeconds(this.timeCount) // specify value for SECONDS here
    this.timeCountString = date.toISOString().substring(11, 19)

    let oAudio: any = document.getElementById('main-audio')
    oAudio.currentTime += 30.0
  }
 
  //  timer count on play  //
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--
        this.timeCount++

        var date = new Date(0)
        date.setSeconds(this.timeLeft) // specify value for SECONDS here
        this.timeLeftString = date.toISOString().substring(11, 19)

        var date = new Date(0)
        date.setSeconds(this.timeCount) // specify value for SECONDS here
        this.timeCountString = date.toISOString().substring(11, 19)
      }
      else {
        this.timeLeft = this.mainAudioLength
        this.timeCount = 0
        this.nextAudioChapter()
      }
    }, 1000)
  }

  //  pause timer  //
  pauseTimer() {
    clearInterval(this.interval)
  }

  //  change to next audio chapter  //
  nextAudioChapter() {
    let indexNumber = this.sortOrders.findIndex((element: any) => {
      return element.includes(this.currentChapter)
    })
    let nextChapter = this.sortOrders[indexNumber + 1]
    this.loadMusic(nextChapter[0], this.playerType)
  }

  //  all audio chapter list  //
  allAudioChapterList() {
    this.showAudioList = !this.showAudioList
  }

  // load audio  //
  loadMusic(chapter: any, audioType: any) {
    if (chapter) {
      this.currentChapter = chapter
      this.selectedChapter = chapter

      if (this.modalData.bookType.toLocaleLowerCase() == 'podcast') {
        for (let allChapter of this.modalData.podcastByChapters) {
          if (allChapter.episodeName == chapter) {
            this.mainAudio = allChapter.externalUrl ? allChapter.externalUrl : this.IMAGE_URL + allChapter.episodeUrl
            this.mainAudioLength = parseInt(allChapter.episodeLength)
            this.timeLeft = this.mainAudioLength
            this.timeCount = 0

            var date = new Date(0)
            date.setSeconds(this.timeLeft) // specify value for SECONDS here
            this.timeLeftString = date.toISOString().substring(11, 19)
            var date = new Date(0)
            date.setSeconds(0) // specify value for SECONDS here
            this.timeCountString = date.toISOString().substring(11, 19)
          }
        }
      }
      else {
        for (let allChapter of this.modalData.bookByChapters) {
          if (allChapter.chapterName == chapter) {
            this.mainAudio = this.IMAGE_URL + allChapter.chapterUrl
            this.mainAudioLength = parseInt(allChapter.chapterLength)
            this.timeLeft = this.mainAudioLength
            this.timeCount = 0

            var date = new Date(0)
            date.setSeconds(this.timeLeft) // specify value for SECONDS here
            this.timeLeftString = date.toISOString().substring(11, 19)
            var date = new Date(0)
            date.setSeconds(0) // specify value for SECONDS here
            this.timeCountString = date.toISOString().substring(11, 19)
          }
        }
      }
      if (this.isPlay) {
        this.startTimer()
        this.isPlay = !this.isPlay
      }
    }
    else {
      let audioUrl = (audioType == 'bookFragment') ? this.modalData.bookFragment : (audioType == 'audioPresentation') ? this.modalData.audioPresentation : this.modalData.entireBook;
      let audioLength = (audioType == 'bookFragment') ? this.modalData.fragmentLength : (audioType == 'audioPresentation') ? this.modalData.audioPresentationLength : this.modalData.length;

      this.mainAudio = this.IMAGE_URL + audioUrl
      this.mainAudioLength = parseInt(audioLength);
      this.timeLeft = this.mainAudioLength
      this.timeCount = 0

      var date = new Date(0)
      date.setSeconds(this.timeLeft) // specify value for SECONDS here
      this.timeLeftString = date.toISOString().substring(11, 19)
      var date = new Date(0)
      date.setSeconds(0) // specify value for SECONDS here
      this.timeCountString = date.toISOString().substring(11, 19)
    }
  }

  //  skip audio on click progress bar  //
  progressSet() {
    let dur: any = document.getElementById('dur')
    this.timeCount = dur.value
    this.timeLeft = this.mainAudioLength - this.timeCount

    var date = new Date(0)
    date.setSeconds(this.timeLeft) // specify value for SECONDS here
    this.timeLeftString = date.toISOString().substring(11, 19)

    var date = new Date(0)
    date.setSeconds(this.timeCount) // specify value for SECONDS here
    this.timeCountString = date.toISOString().substring(11, 19)

    let oAudio: any = document.getElementById('main-audio')
    oAudio.currentTime = dur.value
  }

  //  calculate chapter time format  //
  chapterTimeFormat(d: any) {
    var h = Math.floor(d / 3600)
    var m = Math.floor((d % 3600) / 60)
    var s = Math.floor((d % 3600) % 60)
    return (
      ('0' + h).slice(-2) +
      ':' +
      ('0' + m).slice(-2) +
      ':' +
      ('0' + s).slice(-2)
    )
  }

  //  get entire book time format  //
  timeFormat(d: any) {
    d = Number(d)
    var h = Math.floor(d / 3600)
    var m = Math.floor((d % 3600) / 60)
    var s = Math.floor((d % 3600) % 60)
    this.bookDuration =
      ('0' + h).slice(-2) +
      ':' +
      ('0' + m).slice(-2) +
      ':' +
      ('0' + s).slice(-2)
  }

  //  close player  //
  closePlayer() {
    this.mainAudio = ''
    this.mainAudioLength = ''
    this.timeLeft = 0
    this.timeCount = 0
    this.isPlay = false
    this.pauseTimer()

    localStorage.setItem('isMini', 'false');
    this.cusModalService.open({ modalStatus: 'close' }, '', '');
  }
}

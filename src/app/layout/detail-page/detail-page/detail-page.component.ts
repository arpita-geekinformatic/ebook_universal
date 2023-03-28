import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'
import { ActivatedRoute } from '@angular/router'
import { environment } from 'src/environments/environment'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { DOCUMENT } from '@angular/common'
import { timer } from 'rxjs'
import { ModalService } from './../../../services/modal.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  isPlay = false
  ratingForm!: FormGroup
  updateid = ''
  audioBookDetail: any = []
  similarBooks: any = []
  ratings: any = []
  similarBookRatings: any = []
  modifiedCategory: any = []
  public IMAGE_URL = environment.IMAGE_URL
  audioFile: string = ''
  isReadMore = true
  isFavourite: boolean = false
  updatetype = ''
  tabType: string = ''
  pdfFile: string = ''
  errorMessage: string = ''
  bookDuration!: any
  sortOrders: any[] = []
  selectedSortOrder: string = 'Izvēlies nodaļu'
  bannerLists: any = []
  totalDuration: any = 0
  status: number | undefined
  response: any
  currentUrl: any
  showSpin = false
  showReadMoreButton = false
  isShare: boolean = false
  currentRate = 0
  averageRating = 0
  playerType: string = ''
  selectedChapter: string = ''
  mainAudio: any
  mainAudioLength: any
  timeLeftString: any
  timeCountString: any
  timeLeft: number = 0
  timeCount: number = 0
  interval: any
  currentChapter: any
  showAudioList: boolean = false
  bookDetailData: any = {}

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
  ) {
    config.backdrop = 'static'
    config.keyboard = false
  }

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      rating: [''],
      bookType: [''],
    })

    this.currentUrl = this.router.url
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
    this.route.queryParams.subscribe((params) => {
      this.updateid = params['id'] != undefined ? params['id'] : null
      this.updatetype = params['type'] != undefined ? params['type'] : null
      if (this.updateid != undefined) {
        this.updateAudioBook(this.updateid, this.updatetype)
      }
    })
  }

  getClass(index: any) {
    if (index == 0) {
      return 'alteleButton'
    }
    if (
      this.modifiedCategory[this.modifiedCategory.length - 1].className ==
      'alteleButton'
    ) {
      return 'LiteraturaButton'
    } else if (
      this.modifiedCategory[this.modifiedCategory.length - 1].className ==
      'LiteraturaButton'
    ) {
      return 'ThrillerButton'
    } else if (
      this.modifiedCategory[this.modifiedCategory.length - 1].className ==
      'ThrillerButton'
    ) {
      return 'alteleButton'
    }
    return ''
  }

  //  get audioBook data  //chapter
  updateAudioBook(id: any, type: any) {
    this.showSpin = true
    this.tabType = type
    var api: any =
      (type == environment.tabType.audiobook &&
        this.apiService.getData(`web/audioBook/${id}`)) ||
      (type == environment.tabType.ebook && this.apiService.getData(`web/eBook/${id}`))

    api.subscribe(
      (result: any) => {
        this.sortOrders = []
        this.audioBookDetail.splice(0, 1, result.data)

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('type', result.data.bookType)
        }

        if (result.data.bookType.toLocaleLowerCase() == environment.tabType.ebook) {
          for (let item of result.data.bookByChapters) {
            this.sortOrders.push([item.chapterName, item.chapterLength])
          }
          this.bookDuration = result.data.length + ' pages'
        } else {
          for (let item of result.data.bookByChapters) {
            this.sortOrders.push([item.chapterName, this.chapterTimeFormat(item.chapterLength)])
          }
          this.timeFormat(result.data.length)
        }
        this.similarBooks = result.data.similarBooks
        this.errorMessage =
          result.data.similarBooks == undefined ||
            result.data.similarBooks.length < 1
            ? 'No record found !!!'
            : ''
        for (let i = 0; i < 5; i++) {
          if (result.data.rating <= i) {
            this.ratings.push(false)
          } else {
            this.ratings.push(true)
          }
        }
        this.averageRating = result?.data?.rating
        this.modifiedCategory = []
        for (let i = 0; i < result?.data?.category?.length; i++) {
          this.modifiedCategory.push({
            className: this.getClass(i),
            _id: result?.data?.category[i]._id,
            name_EN: result?.data?.category[i].item_text_EN,
            name_LV: result?.data?.category[i].item_text_LV,
          })
        }

        if (isPlatformBrowser(this.platformId)) {
          if (localStorage.getItem('authorization') !== null) {
            this.apiService
              .getData(`web/isFavourite/${id}`)
              .subscribe((response: any) => {
                if (response.responseCode === 200) {
                  this.isFavourite = response.data.isFavourite
                }
              })

            this.apiService
              .getData(`web/getRating/${id}`)
              .subscribe((response: any) => {
                if (response.responseCode === 200) {
                  this.currentRate = response.data.rating
                }
              })
          }
        }
        if (this.audioBookDetail[0].description.length >= 380) {
          this.showReadMoreButton = true
        }
        this.showSpin = false;
        this.bookDetailData = this.audioBookDetail[0]
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!')
      },
    )
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }

  //  book favourite / unfavourite  //
  favouriteBook(id: any, isFavourite: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('authorization') !== null) {
        let favourite: any = isFavourite == true ? false : true
        this.isFavourite = favourite
        let type = this.tabType

        var api: any = this.apiService.putData(
          `web/favourite/${id}?isFavourite=${favourite}&type=${type}`,
          '',
        )
        api.subscribe(
          (result: any) => {
            this.apiService.passValue(result.data.favouriteCount)
            this.toastr.success(result.responseMessage, 'Error!')
          },
          (error: any) => {
            this.toastr.error(error.error.responseMessage, 'Error!')
          },
        )
      } else {
        this.router.navigate(['/login'])
      }
    }
  }

  openModal(content: any, url: any, type: any, urlType: any, chapterName: any) {
    this.bookDetailData.modalStatus = 'open';
    this.cusModalService.open(this.bookDetailData, chapterName, urlType);

    if (isPlatformBrowser(this.platformId)) {

      if (localStorage.getItem('authorization') != null || urlType == 'bookFragment') {
        if (type == 'audiobooks') {
          this.playerType = urlType
          this.selectedChapter = chapterName
          this.audioFile = this.IMAGE_URL + url
          // this.modalService.open(content)
          this.loadMusic(chapterName, this.playerType)
        }
        if (type == 'ebooks') {
          let fileExt = url.split('.')[1]
          this.openReader(urlType, fileExt, chapterName)
        }
      } else {
        this.router.navigate(['/login'])
      }
    }
  }

  openReader(urlType: any, fileExt: any, chapterName: any) {
    if (fileExt == 'pdf') {
      this.router.navigate(['pdf-view/'], {
        queryParams: {
          id: this.updateid,
          urlType: urlType,
          chapterName: chapterName,
        },
      })
    }
    if (fileExt == 'epub') {
      this.router.navigate(['epub-view/'], {
        queryParams: {
          id: this.updateid,
          urlType: urlType,
          chapterName: chapterName,
        },
      })
    }
  }

  getDuration(src: any, cb: any) {
    var audio = new Audio()
    audio.onloadedmetadata = function () {
      cb(audio.duration)
    }
    audio.src = src
  }

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

  ChangeSortOrder(newSortOrder: string, content: any, url: any, type: any, urlType: any) {
    this.selectedSortOrder = newSortOrder
    let autoPlayArr = [];

    for (let i = 0; i < url.length; i++) {
      autoPlayArr.push(url[i].chapterUrl)
      this.autoPlayNextSong(autoPlayArr)
      if (url[i].chapterName == newSortOrder) {
        let value = url[i].chapterUrl
        this.openModal(content, value, type, urlType, newSortOrder)
      }
    }
  }

  detailBook(id: any) {
    this.router.navigate(['detail/'], {
      queryParams: { id: id, type: this.tabType },
    })
    this.cusModalService.open(this.bookDetailData, this.selectedChapter, this.playerType);
  }

  getRating(data: any) {
    let beforePointValue = data.toString().split('.')[0]
    let afterPointValue = data.toString().split('.')[1]
    var temp: any = [0, 1, 2, 3, 4]
    let html = ''
    for (let i = 0; i < temp.length; i++) {
      if (beforePointValue <= i) {
        if (afterPointValue) {
          html += `<li ><img src="assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`
          afterPointValue = undefined
        } else {
          html += `<li ><img src="assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`
        }
      } else {
        html += `<li ><img src="assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`
      }
    }
    return html
  }

  viewBookByGenre(id: any) {
    this.router.navigate(['/view-more/'], {
      queryParams: { id: id, type: 'genre' },
    })
  }

  viewBookByCategory(id: any, categoryName: any, bookType: any) {
    let type = bookType == "Audiobook" ? "audiobooks" : "ebooks";
    this.router.navigate(['/view-more/'], {
      queryParams: { id: id, category: categoryName },
    })
  }

  //  open rating modal  //
  openSm(content: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('authorization') !== null) {
        this.modalService.open(content, { size: 'sm' })
      } else {
        this.router.navigate(['/login'])
      }
    }
  }

  //  add book rating  //
  addBookRating(bookRating: any, bookDetails: any, modal: any) {
    if (this.updateid) {
      this.apiService
        .putData(
          `web/addRating/${this.updateid}?bookType=${bookDetails.bookType}&rating=${bookRating}`,
          '',
        )
        .subscribe(
          (result: any) => {
            this.averageRating = result?.data?.rating
            this.toastr.success('Rating added.', 'Success!')
          },
          (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!')
          },
        )
    }
    modal.close('Save click')
  }

  //  autoplayer for chapters  //
  autoPlayNextSong(songs: any) {
    var song: any = document.getElementById('myAudio')
    var currentSong = 0
    var len = songs.length
    function playSong(baseUrl: any, index: any) {
      song.src = baseUrl + songs[index]
      song.play()
    }
    if (song != null) {
      song.addEventListener('ended', () => {
        currentSong++
        if (currentSong == len) {
          currentSong = 0
          playSong(this.IMAGE_URL, currentSong)
        } else {
          playSong(this.IMAGE_URL, currentSong)
        }
      })
    }
  }

  loadMusic(chapter: any, audioType: any) {
    if (chapter) {
      this.currentChapter = chapter
      this.selectedChapter = chapter

      for (let allChapter of this.audioBookDetail[0].bookByChapters) {
        if (allChapter.chapterName == chapter) {
          this.mainAudio = this.IMAGE_URL + allChapter.chapterUrl;
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
      if (this.isPlay) {
        this.startTimer()
        this.isPlay = !this.isPlay
      }
    }

    else {
      let audioUrl = (audioType == 'bookFragment') ? this.audioBookDetail[0].bookFragment : this.audioBookDetail[0].entireBook;
      let audioLength = (audioType == 'bookFragment') ? this.audioBookDetail[0].fragmentLength : this.audioBookDetail[0].length;

      this.mainAudio = this.IMAGE_URL + audioUrl
      this.mainAudioLength = parseInt(audioLength)
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
      } else {
        this.timeLeft = this.mainAudioLength
        this.timeCount = 0
        this.nextAudioChapter()
      }
    }, 1000)
  }

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

  //  change to previous audio chapter  //
  previousAudioChapter() {
    let indexNumber = this.sortOrders.findIndex((element: any) => {
      return element.includes(this.currentChapter)
    })
    let nextChapter = this.sortOrders[indexNumber - 1]
    this.loadMusic(nextChapter[0], this.playerType)
  }

  //  all audio chapter list  //
  allAudioChapterList() {
    this.showAudioList = !this.showAudioList
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

  fwdAudio10sec() {
    this.timeLeft = this.timeLeft - 30.0;
    this.timeCount = (this.timeCount + 30.0) > this.mainAudioLength ? this.mainAudioLength : this.timeCount + 30.0;

    var date = new Date(0)
    date.setSeconds(this.timeLeft) // specify value for SECONDS here
    this.timeLeftString = date.toISOString().substring(11, 19)

    var date = new Date(0)
    date.setSeconds(this.timeCount) // specify value for SECONDS here
    this.timeCountString = date.toISOString().substring(11, 19)

    let oAudio: any = document.getElementById('main-audio')
    oAudio.currentTime += 30.0
  }

  mSet() {
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

  miniPlayer() {
    let elem: any = document.getElementsByClassName('backCustom')[0]
    elem.className += " mini-player";
  }
}

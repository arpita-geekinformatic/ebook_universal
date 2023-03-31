import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
// import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  tabType: string = environment.tabType.audiobook;
  finalData: any = [];
  categoryArr: any = [];
  isSpinner = false;
  public IMAGE_URL = environment.IMAGE_URL;
  bannerLists: any = [];
  showGetStarted: any = true;
  hide: string = 'show';
  recommend: any = {};


  constructor(
    private apiService: ApiService,
    private router: Router,
    public authService: AuthService,
    private toastr: ToastrService,
    public cookieService: CookieService,
    // @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.toggleBookType();

    // if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authorization');
    if (token !== null) {
      this.showGetStarted = false;
    }
    // }
    if (this.cookieService.get('name') !== '') {
      this.hide = 'hide';
    }
  }

  toggleBookType() {
    // if (isPlatformBrowser(this.platformId)) {
    this.tabType = localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.podcast ? environment.tabType.podcast : localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.ebook ? environment.tabType.ebook : environment.tabType.audiobook;
    localStorage.setItem('type', this.tabType)
    // }

    if (this.tabType === environment.tabType.audiobook) {
      this.BannerList('Audiobook');
      this.getAudioBook();
      this.categoryList('books');
    }
    if (this.tabType === environment.tabType.ebook) {
      this.BannerList('Ebook');
      this.getEbook();
      this.categoryList('books');
    }
    if (this.tabType === environment.tabType.podcast) {
      this.router.navigate(
        ['/podcast']
      );
    }
  }

  getAudioBook() {
    this.apiService.getData("web/audioBook").subscribe(
      (res: any) => {
        this.finalData = [];
        if (res.responseCode === 200) {
          this.finalData = res.data;
          for (let item of res.data) {
            if (item['categoryName_EN'] == "Recomendations") {
              this.recommend = item.data[0];
            }
          }
          // if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('type')
          // }
        }
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  detailBook(id: any) {
    this.router.navigate(
      ['detail/'],
      { queryParams: { 'id': id, 'type': this.tabType } }
    );
  }

  getType(event: any) {
    this.tabType = event;

    if (event === environment.tabType.audiobook) {
      this.getAudioBook();
      this.BannerList('Audiobook');
      this.categoryList('books');
    }
    if (event === environment.tabType.ebook) {
      this.getEbook();
      this.BannerList('Ebook');
      this.categoryList('books');
    }
    if (event === environment.tabType.podcast) {
      // this.BannerList('podcast');
      // this.categoryList('podcast');
    }
  }

  getEbook() {
    this.apiService.getData("web/eBook").subscribe(
      (res: any) => {
        this.finalData = [];
        this.finalData = res.data;
        for (let item of res.data) {
          if (item['categoryName_EN'] == "Recomendations") {
            this.recommend = item.data[0];
          }
        }
        // if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('type')
        // }
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  getRating(data: any) {
    let beforePointValue = data.toString().split(".")[0]
    let afterPointValue = data.toString().split(".")[1]
    var temp: any = [0, 1, 2, 3, 4];
    let html = '';
    for (let i = 0; i < temp.length; i++) {
      if (beforePointValue <= i) {
        if (afterPointValue) {
          html += `<li ><img src="assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`;
          afterPointValue = undefined;
        } else {
          html += `<li ><img src="assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`
        }
      } else {
        html += `<li ><img src="assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`;
      }
    }
    return html;
  }

  viewMore(type: any, categoryName: any) {
    this.router.navigate(
      ['/view-more/'],
      { queryParams: { 'type': type, 'category': categoryName } }
    );
  }

  //  get category //
  categoryList(type: any) {
    this.apiService.getData(`category?type=${type}`).subscribe(
      (res: any) => {
        if (res.responseCode === 200) {
          this.categoryArr = res.data;
        }
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  BannerList(type: any) {
    this.isSpinner = false
    this.apiService.getData(`banner?type=${type}`).subscribe(
      (res: any) => {
        this.isSpinner = true
        this.bannerLists = res.data ? res.data : []
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  getStarted() {
    if (this.authService.isAuthenticated()) {
      this.showGetStarted = false;
    } else {
      this.router.navigate(
        ['/login']
      );
    }
  }


  viewBookByCategory(id: any, categoryName: any) {
    this.router.navigate(
      ['/view-more/'],
      { queryParams: { 'id': id, 'category': categoryName } }
    );

    // this.router.navigate(
    //   ['/view-more/'],
    //   { queryParams: { 'id': id, 'pageType': 'category' } }
    // );
  }

  acceptCookies() {
    this.cookieService.set('name', 'Audio Lasitava', { expires: 2, sameSite: 'Lax' });
    this.hide = 'hide';
  }

  declineCookies() {
    this.hide = 'hide';
  }
}

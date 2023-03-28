import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  bannerLists: any = [];
  showGetStarted: any = true;
  public IMAGE_URL = environment.IMAGE_URL;
  isSpinner = false;
  tabType: string = 'podcast';
  finalData: any = [];
  recommend: any = {};
  categoryArr: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    public authService: AuthService,
    private toastr: ToastrService,
    public cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.toggleBookType();
  }

  //  change book type tab  //
  toggleBookType() {  
    if (isPlatformBrowser(this.platformId)) {

    this.tabType = localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.podcast ? environment.tabType.podcast : localStorage.getItem('type')?.toLocaleLowerCase() == environment.tabType.ebook ? environment.tabType.ebook : environment.tabType.audiobook;
    localStorage.setItem('type',  this.tabType )
    }

    if (this.tabType.toLocaleLowerCase() === environment.tabType.audiobook) {
      this.router.navigateByUrl('/home');
    }
    if (this.tabType.toLocaleLowerCase() === environment.tabType.ebook) {
      this.router.navigateByUrl('/home');
    }
    else{
      this.BannerList(this.tabType);
      this.categoryList();
      this.getPodcast()
    }
  }

  //  get podasts  //
  getPodcast() {
    this.apiService.getData("webPodcast").subscribe(
      (res: any) => {
        this.finalData = [];
          this.finalData = res.data;
          for (let item of res.data) {
            if (item['categoryName_EN'] == "Recomendations") {
              this.recommend = item.data[0];
            }
          }
          if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('type')
          }
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  //  get banner  //
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

  //  get category  //
  categoryList() {    
    this.apiService.getData("category?type=podcast").subscribe(
      (res: any) => {
          this.categoryArr = res.data;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  //  podcast details  //
  podcastDetails(id: any) {
    this.router.navigate(
      ['podcast-detail/'],
      { queryParams: { 'id': id, 'type': this.tabType } }
    );
  }

  
  getStarted() {
    // if (this.authService.isAuthenticated()) {
    //   this.showGetStarted = false;
    // } else {
    //   this.router.navigate(
    //     ['/login']
    //   );
    // }
  }

  //  view podcast by category ID  //
  viewBookByCategoryId(type: any, categoryId: any) {
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('type',  type )
    }
    this.router.navigate(
      ['/all-podcasts/'],
      { queryParams: { 'type': type, 'id': categoryId } }
    );
  }

  //  view more by category name //
  viewMore(type: any, categoryName: any) {
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('type',  type )
    }
    this.router.navigate(
      ['/all-podcasts/'],
      { queryParams: { 'type': type, 'category': categoryName } }
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

}

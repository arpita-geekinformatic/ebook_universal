import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-all-podcasts',
  templateUrl: './all-podcasts.component.html',
  styleUrls: ['./all-podcasts.component.scss']
})

export class AllPodcastsComponent implements OnInit {
  tabType: string = '';
  dataList: any = [];
  ratings: any = [];
  modifiedGenre: any = [];
  categoryName: string = '';
  bookType: string = '';
  categoryId: string = '';
  public IMAGE_URL = environment.IMAGE_URL;
  skip: number = 0;
  totalRecords = 0;
  isSpinner = false
  errorMessage: string = '';
  pageType: string = '';
  selectedCategory: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) { }


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    this.route.queryParams.subscribe(params => {

      this.categoryName = params['category'] != undefined ? params['category'] : '';
      this.bookType = params['type'] != undefined ? params['type'] : '';
      this.categoryId = params['id'] != undefined ? params['id'] : '';
      // this.pageType = params['pageType'] != undefined ? params['pageType'] : null;

      this.tabType = this.bookType;
      if (this.categoryId) {
        this.getCategoryName(this.categoryId);
      }
      else {
        this.selectedCategory = this.categoryName.toLocaleLowerCase() == 'recomendations' ? 'Ieteikumi' : 'novel';
      }

      if (this.categoryName && this.bookType) {
        this.getPodcastByCategoryName(this.bookType, this.categoryName, this.skip, 8);
      }
      if (this.bookType && this.categoryId) {
        this.getPodcastByCategoryId(this.categoryId, this.skip, 8);
      }
    });
  }

  //  get Podcast By Category Name  //
  getPodcastByCategoryName(type: any, category: any, skip: any, limit: any) {
    this.isSpinner = false
    this.tabType = type;

    this.apiService.getData(`webPodcast/list/categoryName?category=${category}&skip=${skip}&limit=${limit}`).subscribe(
      (result: any) => {
        this.isSpinner = true
        this.dataList.push(...result.data);
        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : ''
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )
  }

  //  get Podcast By Category Id  //
  getPodcastByCategoryId(id: any, skip: any, limit: any) {
    this.isSpinner = false
    this.apiService.getData(`webPodcast/podcastByCategory/${id}?skip=${skip}&limit=${limit}`).subscribe(
      (result: any) => {
        this.isSpinner = true
        this.dataList.push(...result.data);
        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    )
  }

  //  get category name  //
  getCategoryName(id: any) {
    let categoryArr: any = []
    this.apiService.getData(`category?type=${environment.tabType.podcast}`).subscribe(
      (res: any) => {
        categoryArr = res.data.filter((category: any) => id == category._id)
        this.selectedCategory = categoryArr[0].lvName
      },
      (error) => {
        this.toastr.error(error.error.responseMessage, 'Error!')
      },
    )
  }

  //  get book details  //
  detailBook(id: any) {
    this.router.navigate(
      ['podcast-detail/'],
      { queryParams: { 'id': id, 'type': this.tabType } }
    );
  }

  //  toggle tabs  //
  getType(event: any) {
    this.tabType = event;
    if (event === environment.tabType.audiobook) {
      this.dataList = [];
      this.skip = 0;
      this.router.navigate(
        ['/view-more/'],
        { queryParams: { 'type': event, 'category': this.categoryName } }
      );
    }
    if (event === environment.tabType.ebook) {
      this.dataList = [];
      this.skip = 0;
      this.router.navigate(
        ['/view-more/'],
        { queryParams: { 'type': event, 'category': this.categoryName } }
      );
    }
  }

  //  on scroll down load more data  //
  onScroll() {
    if (this.skip == 0 && this.dataList.length < 1) {
      this.skip = 0;
    }
    if (this.dataList.length != this.totalRecords) {
      this.skip = this.skip + 10;
      setTimeout(() => {
        if (this.categoryName) {
          this.getPodcastByCategoryName(this.bookType, this.categoryName, this.skip, 10)
        }
        if (this.categoryId) {
          this.getPodcastByCategoryId(this.categoryId, this.skip, 10)
        }
      }, 1000)
    }
  }

  //  get book rating //
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

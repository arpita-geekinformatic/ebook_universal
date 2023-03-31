import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent implements OnInit {
  tabType: string = '';
  dataList: any = [];
  ratings: any = [];
  modifiedGenre: any = [];
  category: string = '';
  updatetype: string = '';
  id: string = '';
  public IMAGE_URL = environment.IMAGE_URL;
  skip = 0;
  totalRecords = 0;
  showSpin = true;
  errorMessage: string = '';
  pageType: string = '';

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

      this.category = params['category'] != undefined ? params['category'] : null;
      this.updatetype = params['type'] != undefined ? params['type'] : null;
      this.id = params['id'] != undefined ? params['id'] : null;
      this.pageType = params['pageType'] != undefined ? params['pageType'] : null;

      setTimeout(() => {
        if ((this.category != undefined) && (this.updatetype != undefined)) {
          this.updateAudioBook(this.updatetype, this.category, this.skip, 8);
        }
        if ((this.id != undefined) && (this.category != undefined)) {
          this.getCategoryByBook(this.id, this.skip, 8);
        }
        if ((this.id != undefined) && (this.updatetype == 'genre')) {
          this.getBookByGenre(this.id, this.skip, 8);
        }
      }, 4000)
    });
  }

  //  get audioBook data  //
  updateAudioBook(type: any, category: any, skip: any, limit: any) {    
    this.showSpin = true;
    this.tabType = type;
    var api: any = this.apiService.getData(`web/dataList/?type=${type}&category=${category}&skip=${skip}&limit=${limit}`)
    api.subscribe(
      (result: any) => {
        this.dataList.push(...result.data);
        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : ''
        this.showSpin = false;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
        this.showSpin = false;
      })
  }

  //  get book details  //
  detailBook(id: any, type: any) {
    if (this.id != undefined) {
      this.router.navigate(
        ['detail/'],
        { queryParams: { 'id': id, 'type': type == 'Audiobook' ? 'audiobooks' : 'ebooks' } }
      );
    } else {
      this.router.navigate(
        ['detail/'],
        { queryParams: { 'id': id, 'type': this.tabType } }
      );
    }
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

  getType(event: any) {
    this.tabType = event;
    if (event === 'audiobooks') {
      this.dataList = [];
      this.skip = 0;
      this.router.navigate(
        ['/view-more/'],
        { queryParams: { 'type': event, 'category': this.category } }
      );
    }
    if (event === 'ebooks') {
      this.dataList = [];
      this.skip = 0;
      this.router.navigate(
        ['/view-more/'],
        { queryParams: { 'type': event, 'category': this.category } }
      );
    }
  }
  onScroll() {    
    this.showSpin = true;
    if (this.skip == 0 && this.dataList.length < 1) {      
      this.skip = 0;
    }
    if (this.dataList.length != this.totalRecords) {
      this.skip = this.skip + 10;
      setTimeout(() => {
        if (this.category != undefined) {
          this.updateAudioBook(this.updatetype, this.category, this.skip, 10)
        }
        if (this.id != undefined) {
          this.getCategoryByBook(this.id, this.skip, 10)
        }
        if (this.id != undefined && this.updatetype == 'genre') {
          this.getBookByGenre(this.id, this.skip, 10);
        }
      }, 1000)
    }
    if((this.totalRecords != 0) && (this.dataList.length == this.totalRecords)){
      this.showSpin = false;
    }
  }

  getCategoryByBook(id: any, skip: any, limit: any) {
    this.showSpin = true;
    var api: any = this.apiService.getData(`web/bookByCategory/${id}?skip=${skip}&limit=${limit}`)
    api.subscribe(
      (result: any) => {
        this.dataList.push(...result.data);
        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : ''
        this.showSpin = false;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
        this.showSpin = false;
      })
  }

  getBookByGenre(id: any, skip: any, limit: any) {
    this.showSpin = true;
    var api: any = this.apiService.getData(`web/bookByGenre/${id}?skip=${skip}&limit=${limit}`)
    api.subscribe(
      (result: any) => {
        this.dataList.push(...result.data);
        this.totalRecords = result.totalRecord;
        this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : ''
        this.showSpin = false;
      },
      (error: any) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
        this.showSpin = false;
      })
  }
}

import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteList: any = [];
  public IMAGE_URL = environment.IMAGE_URL;
  totalRecords = 0;
  skip = 0;
  errorMessage: string = '';
  showSpin = false;
  token: any = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('authorization')

      if (this.token != null || this.token != undefined) {
        this.getFavouriteList(this.skip);
      }
    }
    // this.getFavouriteList(this.skip);
  }

  getType(event: any) {
    console.log("Favourite Page")
  }

  //  get favourite book list  //
  getFavouriteList(skip: any) {
    this.showSpin = true;
    this.apiService.getData(`web/favourite?skip=${skip}&limit=10`).subscribe(
      (res: any) => {
        this.favouriteList.push(...res.data);
        this.totalRecords = res.totalRecord;
        this.errorMessage = res.data == undefined || res.data.length < 1 ? 'No record found !!!' : ''
        this.showSpin = false;
      },
      (error) => {
        this.showSpin = false;
        this.toastr.error(error.error.responseMessage, 'Error!');
        this.errorMessage = error.error.responseMessage;
      }
    );
  }

  //  get book details  //
  detailBook(id: any, type: any) {
    if (type.toLowerCase() == environment.tabType.podcast) {
      this.router.navigate(
        ['podcast-detail/'],
        { queryParams: { 'id': id, 'type': type } }
      );
    }
    else {
      this.router.navigate(
        ['detail/'],
        { queryParams: { 'id': id, 'type': type } }
      );
    }
  }

  //  get book ratoing html  //
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

  //  on scroll pagination  //
  onScroll() {
    if (this.skip == 0 && this.favouriteList.length < 1) {
      this.skip = 0;
    }
    if (this.favouriteList.length != this.totalRecords) {
      this.skip = this.skip + 10;
      // setTimeout(() => {
      this.getFavouriteList(this.skip)
      // }, 1000)
    }
  }
}

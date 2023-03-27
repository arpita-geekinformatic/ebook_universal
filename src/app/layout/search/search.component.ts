import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  totalSearchList:any = [];
  public IMAGE_URL = environment.IMAGE_URL;
  // skip=0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  getSearchData(event:any){
    this.totalSearchList = event;
  }
  onScroll() {
    // if (this.skip == 0 && this.totalSearchList.length < 1) {
    //   this.skip = 0;
    // }
    // if (this.totalSearchList.length != this.totalRecords) {
    //   this.skip = this.skip + 10;
    //   setTimeout(() => {
    //     this.updateAudioBook(this.updatetype, this.category, this.skip, 10)
    //   }, 1000)
    // }
  }
  detailBook(id: any, type:any) {
    this.router.navigate(
      ['detail/'],
      { queryParams: { 'id': id, 'type': type == 'Audiobook' ? 'audiobooks' : 'ebooks' } }
    );
  }
  getRating(data: any) {
    var temp: any = [0, 1, 2, 3, 4];
    let html = '';

    for (let i = 0; i < temp.length; i++) {
      if (data <= i) {
        html += '<li ><img src="assets/images/starBlankIcon.svg" alt="Star FIll" /></li>'
      } else {
        html += '<li ><img src="assets/images/starFillIcon.svg" alt="Star FIll" /></li>';
      }
    }
    return html;
  }
}

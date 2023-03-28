import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { ApiService } from 'src/app/services/api.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public IMAGE_URL = environment.IMAGE_URL;
  audiobookSearch = environment.bookSearchType.Audiobook;
  ebookSearch = environment.bookSearchType.Ebook;
  podcastSearch = environment.bookSearchType.Podcast;
  skip = 0;
  limit: number = 10;
  totalRecords = 0;
  searchFilter: string = ''
  searchListData: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchFilter = params['searchFilter'] != undefined ? params['searchFilter'] : '';
      
      if (this.searchFilter && this.searchFilter != undefined) {
        this.searchListData = []
        this.skip = 0;
        this.getSearchData(this.searchFilter, this.skip, this.limit)
      }
    });
  }

  //  get searched book list  //
  getSearchData(searchFilter: any, skip: any, limit: any) {
    this.apiService.getData(`web/bookSearch?searchFilter=${searchFilter}&skip=${skip}&limit=${limit}`).subscribe(
      (res: any) => {
        this.searchListData.push(...res.data);
        this.totalRecords = res.totalRecord || 0;
      },
      (error) => {
        this.toastr.error(error.error.responseMessage, 'Error!')
      },
    )
  }

  //  load book on page scroll  //
  onScroll() {
    if (this.skip == 0 && this.searchListData.length < 1) {
      this.skip = 0;
    }
    if (this.searchListData.length != this.totalRecords) {
      this.skip = this.skip + 10;
      this.getSearchData(this.searchFilter, this.skip, 10)
    }
  }

  //  get book details  //
  detailBook(id: any, type: any) {    
    if (type.toLowerCase() == environment.tabType.podcast) {
      this.router.navigate(
        ['podcast-detail/'],
        { queryParams: { 'id': id, 'type': type.toLowerCase() } }
      );
    }
    else {
      this.router.navigate(
        ['detail/'],
        { queryParams: { 'id': id, 'type': type.toLowerCase() } }
      );
    }
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
}

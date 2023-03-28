import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ebook-reader',
  templateUrl: './ebook-reader.component.html',
  styleUrls: ['./ebook-reader.component.scss']
})
export class EbookReaderComponent implements OnInit {
  updateid: any;
  activeSlide = 0;
  totalPages = 0;
  loadIndex = 0;
  images: any = [];
  interval = false;
  activeSlideIndex = 0;
  showSpin = false;
  detailId: any;
  urlType: any;
  chapterName: any;

  constructor(
    private route: ActivatedRoute, private _sanitizer: DomSanitizer, private apiService: ApiService,) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.updateid = params['id'] != undefined ? params['id'] : null;
        if (params['id'] != undefined) {
          this.detailId = params['id'];
          this.urlType = params['urlType'];
          this.chapterName = params['chapterName'];
          this.getPdfData(this.detailId, this.urlType, this.chapterName);
        }
      }
      );
  }

  async getPdfData(id: any, urlType: any, chapterName: any) {
    this.showSpin = true;
    let result: any
    if (urlType == 'bookFragment') {
      result = await this.apiService.getData(`web/eBook/bookFragment-pdf-data/${id}?index=${this.loadIndex}&urlType=${urlType}&chapterName=${chapterName}`).toPromise();
    }
    else {
      result = await this.apiService.getData(`web/eBook/pdf-data/${id}?index=${this.loadIndex}&urlType=${urlType}&chapterName=${chapterName}`).toPromise();
    }
    if (result) {
      for (let iterator of result.pdfData) {
        this.images.push(this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + iterator));
      }
      this.totalPages = result.totalPages;
      this.loadIndex = result.index;
      this.showSpin = false;
    }

  }
  prevSlide() {
    if (this.activeSlideIndex != 0) {
      this.activeSlideIndex = this.activeSlideIndex - 1;
    }
  }

  nextSlide() {
    if (this.activeSlideIndex != this.images.length - 1) {
      this.activeSlideIndex = this.activeSlideIndex + 1;
      if (this.activeSlideIndex == 3) {
        this.loadIndex += 1;
        // this.getPdfData(this.detailId)
      }
    }
  }
}

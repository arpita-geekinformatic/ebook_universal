import { Component, OnInit, Inject, HostListener, PLATFORM_ID } from '@angular/core';
// import { DOCUMENT } from "@angular/platform-browser";
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  windowScrolled: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {

      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    }
  }

  ngOnInit() {
  }
}

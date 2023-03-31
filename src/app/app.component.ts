import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ebook_universal';

  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) {
  }

  customEvent(event:any) {
    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);
    // console.log('28 ========== this is a custom event', event);
  }

  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach(item => {      
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }

  

  // private appendGaTrackingCode() {
  //   try {
  //     const script = document.createElement('script');
  //     script.innerHTML = `
  //     (function (w, d, s, l, i){
  //       w[l] = w[l] || []; w[l].push({
  //         'gtm.start':
  //           new Date().getTime(), event: 'gtm.js'
  //       }); var f = d.getElementsByTagName(s)[0],
  //         j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true;
  //       j.src = 'https://www.googletagmanager.com/gtm.js?id=' + "GTM-PKT9GFC";
  //       f.parentNode.insertBefore(j, f);
  //   }
  //     `;
  //     document.head.appendChild(script);
  //   } catch (ex) {
  //   }
  // }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import QRCodeStyling from 'qr-code-styling';
// import * as QRCodeStyling from "qr-code-styling";

@Component({
  selector: 'app-our-apps',
  templateUrl: './our-apps.component.html',
  styleUrls: ['./our-apps.component.scss']
})

export class OurAppsComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvas!: ElementRef;
  @ViewChild("canvas1", { static: true }) canvas1!: ElementRef;
  title = 'QR code styling for Angular';
  data = 'http://qr-code-styling.com';
  extension = 'svg';
  qrCode: any;
  qrCode1: any;

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.setMetaInfo();

    // this.qrCode = new QRCodeStyling({
    //   width: 100,
    //   height: 100,
    //   type: 'svg',
    //   data: this.data,
    //   image: '',
    //   margin: 10,
    //   qrOptions: {
    //     typeNumber: 0,
    //     mode: 'Byte',
    //     errorCorrectionLevel: 'Q'
    //   },
    //   imageOptions: {
    //     hideBackgroundDots: true,
    //     imageSize: 0.4,
    //     margin: 20,
    //     crossOrigin: 'anonymous',
    //   },
    //   dotsOptions: {
    //     color: '#000',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 0,
    //     //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
    //     // },
    //     type: 'rounded'
    //   },
    //   backgroundOptions: {
    //     color: '#fff',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 0,
    //     //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
    //     // },
    //   },
    //   cornersSquareOptions: {
    //     color: '#000',
    //     type: 'square',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 180,
    //     //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
    //     // },
    //   },
    //   cornersDotOptions: {
    //     color: '#000',
    //     type: 'dot',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 180,
    //     //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
    //     // },
    //   }
    // });

    // this.qrCode1 = new QRCodeStyling({
    //   width: 100,
    //   height: 100,
    //   type: 'svg',
    //   data: this.data,
    //   image: '',
    //   margin: 10,
    //   qrOptions: {
    //     typeNumber: 0,
    //     mode: 'Byte',
    //     errorCorrectionLevel: 'Q'
    //   },
    //   imageOptions: {
    //     hideBackgroundDots: true,
    //     imageSize: 0.4,
    //     margin: 20,
    //     crossOrigin: 'anonymous',
    //   },
    //   dotsOptions: {
    //     color: '#000',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 0,
    //     //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
    //     // },
    //     type: 'rounded'
    //   },
    //   backgroundOptions: {
    //     color: '#fff',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 0,
    //     //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
    //     // },
    //   },
    //   cornersSquareOptions: {
    //     color: '#000',
    //     type: 'square',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 180,
    //     //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
    //     // },
    //   },
    //   cornersDotOptions: {
    //     color: '#000',
    //     type: 'dot',
    //     // gradient: {
    //     //   type: 'linear', // 'radial'
    //     //   rotation: 180,
    //     //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
    //     // },
    //   }
    // });

    // this.qrCode.append(this.canvas.nativeElement);
    // this.qrCode1.append(this.canvas1.nativeElement);

  }

  setMetaInfo() {
    let metaTitle = 'Lejuplādē Audiolasītavas lietotni Android un iOS vidēm';
    let metaDescription = 'Klausies visas Audiolasītavas audiogrāmatas, podkāstus, e-grāmatas savā mobilajā tālrunī, lejuplādējot lietotni Android un iOS vidēs. Tavas audiogrāmatas vienas lejuplādes attālumā!';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Uzzini, kuras grāmatas ir iecienījuši Audiolasītavas lietotāji.';
    let metaDescription = 'Noskaidrojiet mūsu dižpārdokļu reitingu un izvēlieties savu audiogrāmatu';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

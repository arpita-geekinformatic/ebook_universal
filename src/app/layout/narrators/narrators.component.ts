import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-narrators',
  templateUrl: './narrators.component.html',
  styleUrls: ['./narrators.component.scss']
})
export class NarratorsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Uzzini vairāk par Audiolasītavas audiogrāmatu stāstniekiem';
    let metaDescription = 'Mēs strādājam ar pazīstamākajiem latviešu aktieriem. Noklausieties savu iecienītāko aktieru balsis Audiolasītavas audiogrāmatās.';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

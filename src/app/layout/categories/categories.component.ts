import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Atrodi savu iecienītāko audiogrāmatu, e-grāmatu un/ vai podkāstu';
    let metaDescription = 'Romāni, fantāzija, kriminālromāni, bērnu literatūra, romantiskā literatūra, zinātniskā fantastika, erotika, rokasgrāmatas, sports… . Atrodiet grāmatas savās iecienītākajās kategorijās';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

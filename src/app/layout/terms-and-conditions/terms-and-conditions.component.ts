import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Iepazīsties ar Audiolasītavas lietošanas noteikumiem';
    let metaDescription = 'Lietotāju privātā informācija ir aizsargāta.Audiolasitava ir izstrādājusi visaptverošus lietotāju noteikumus, lai pasargātu lietotājus';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

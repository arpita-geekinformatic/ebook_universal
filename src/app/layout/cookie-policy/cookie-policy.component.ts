import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Uzzini vairāk par Audiolasītavas sīkdatņu izmantošanas politiku';
    let metaDescription = 'Lietotāju privātā informācija ir aizsargāta.Audiolasitava ir izstrādājusi plašas sīkdatņu preferences drošai navigācijai';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

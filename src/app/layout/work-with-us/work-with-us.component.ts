import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }


  setMetaInfo() {
    let metaTitle = 'Nāc strādāt pie mums. Mēs meklējam talantīgus cilvēkus.';
    let metaDescription = 'Uzzini, kādas darbavietas piedāvā Audiolasītava. Ja Tev patīk grāmatas un aizrauj jaunākās tehnoloģijas, sūti mums savu CV. Mūsu draudzīgā komanda meklē zinātkārus un radošus cilvēkus.';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

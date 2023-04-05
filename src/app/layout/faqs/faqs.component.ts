import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }


  setMetaInfo() {
    let metaTitle = 'Atrodi atbildes uz visiem jautājumiem par mūsu pakalpojumu';
    let metaDescription = 'Atbildes uz biežāk uzdotiem jautājumiem atrodami šajā saitē. Klausies, lasi un baudi!';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

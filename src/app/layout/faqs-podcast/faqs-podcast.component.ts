import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs-podcast',
  templateUrl: './faqs-podcast.component.html',
  styleUrls: ['./faqs-podcast.component.scss']
})
export class FaqsPodcastComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Atrast atbildi uz visiem jautājumiem par mūsu podkāstiem';
    let metaDescription = 'Visbiežāk uzdotie jautājumi par podkāstiem ir atbildēti šajā vietnē. Klausieties, lasiet un baudiet.';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

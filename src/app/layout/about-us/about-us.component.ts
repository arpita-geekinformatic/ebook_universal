import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta,) { }

  ngOnInit(): void {
    this.setMetaInfo();
  }

  setMetaInfo() {
    let metaTitle = 'Uzzini vairāk par mums. Mums rūp latviešu kultūra';
    let metaDescription = 'Mūs aizrauj grāmatas un tehnoloģijas, kas uzlabo digitālās straumēšanas pieredzi un ļauj izbaudīt audiogrāmatas un e-grāmatas tiešsaistē.';
    // let metaKeyword = 'Ellementry Terms and condition , Ellementry t & a';
    let metaUrl = window.location.href;

    this.titleService.setTitle(metaTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });
    // this.metaService.updateTag({ name: 'keywords', content: metaKeyword });

    this.metaService.addTag({ property: 'og:title', content: metaTitle });
    this.metaService.addTag({ property: 'og:description', content: metaDescription });
    this.metaService.addTag({ property: 'og:url', content: metaUrl });
  }
}

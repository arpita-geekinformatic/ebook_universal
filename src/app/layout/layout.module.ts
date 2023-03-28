import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreComponent } from './view-more/view-more.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EpubReaderComponent } from './epub-reader/epub-reader.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { AllPodcastsComponent } from './all-podcasts/all-podcasts.component';
import { RouterModule } from '@angular/router';
import { OurAppsComponent } from './our-apps/our-apps.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { UploadYourPodcastComponent } from './upload-your-podcast/upload-your-podcast.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPreferencesComponent } from './cookies-preferences/cookies-preferences.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { NewBooksComponent } from './new-books/new-books.component';
import { PublishersComponent } from './publishers/publishers.component';
import { PodcastEpisodesComponent } from './podcast-episodes/podcast-episodes.component';
@NgModule({
  declarations: [LayoutComponent, ViewMoreComponent, ChangePasswordComponent, UpdateProfileComponent, FavouritesComponent, SearchComponent, CookiePolicyComponent, AboutUsComponent, WorkWithUsComponent, ContactUsComponent, EpubReaderComponent, PodcastComponent, PodcastDetailComponent, AllPodcastsComponent, OurAppsComponent, AuthorsComponent, NewsletterComponent, UploadYourPodcastComponent, PrivacyPolicyComponent, CookiesPreferencesComponent, TermsAndConditionsComponent, BestsellersComponent, NewBooksComponent, PublishersComponent, PodcastEpisodesComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, NgbModule, RouterModule,],
})
export class LayoutModule { }

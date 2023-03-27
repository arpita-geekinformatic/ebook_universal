import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPodcastsModule } from './layout/all-podcasts/all-podcasts.module';
import { AuthorsModule } from './layout/authors/authors.module';
import { OurAppsModule } from './layout/our-apps/our-apps.module';
import { PodcastDetailModule } from './layout/podcast-detail/podcast-detail.module';
import { PodcastEpisodesModule } from './layout/podcast-episodes/podcast-episodes.module';
import { PodcastModule } from './layout/podcast/podcast.module';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/home-page/home-page.module').then(m => m.HomePageModule),
    // canActivate: [AuthService],
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/home-page/home-page.module').then(m => m.HomePageModule),
    // canActivate: [AuthService],
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'podcast',
    loadChildren: () => import('./layout/podcast/podcast.module').then(m => PodcastModule),
    // canActivate: [AuthService],
  },
  {
    path: 'detail',
    loadChildren: () => import('./layout/detail-page/detail-page/detail-page.module').then(m => m.DetailPageModule),
    // canActivate: [AuthService],
  },
  {
    path: 'view-more',
    loadChildren: () => import('./layout/view-more/view-more.module').then(m => m.ViewMoreModule),
    // canActivate: [AuthService],
  },
  {
    path: 'change-password',
    loadChildren: () => import('./layout/change-password/change-password.module').then(m => m.ChangePasswordModule),
    // canActivate: [AuthService],
  },
  {
    path: 'updateProfile',
    loadChildren: () => import('./layout/update-profile/update-profile.module').then(m => m.UpdateProfileModule),
    // canActivate: [AuthService],
  },
  {
    path: 'favourites',
    loadChildren: () => import('./layout/favourites/favourites.module').then(m => m.FavouritesModule),
    // canActivate: [AuthService],
  },
  {
    path: 'search',
    loadChildren: () => import('./layout/search/search.module').then(m => m.SearchModule),
    // canActivate: [AuthService],
  },
  {
    path: 'pdf-view',
    loadChildren: () => import('./layout/ebook-reader/ebook-reader.module').then(m => m.EbookReaderModule),
    // canActivate: [AuthService],
  },
  {
    path: 'epub-view',
    loadChildren: () => import('./layout/epub-reader/epub-reader.module').then(m => m.EpubReaderModule),
    // canActivate: [AuthService],
  },
  
  {
    path: 'cookiePolicy',
    loadChildren: () => import('./layout/cookie-policy/cookie-policy.module').then(m => m.CookiePolicyModule),
    // canActivate: [AuthService],
  },
  {
    path: 'parUznemumu',
    loadChildren: () => import('./layout/about-us/about-us.module').then(m => m.AboutUsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'darbs',
    loadChildren: () => import('./layout/work-with-us/work-with-us.module').then(m => m.WorkWithUsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'contactUs',
    loadChildren: () => import('./layout/contact-us/contact-us.module').then(m => m.ContactUsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'podcast-detail',
    loadChildren: () => import('./layout/podcast-detail/podcast-detail.module').then(m => PodcastDetailModule),
    // canActivate: [AuthService],
  },
  {
    path: 'podcast-episodes',
    loadChildren: () => import('./layout/podcast-episodes/podcast-episodes.module').then(m => PodcastEpisodesModule),
    // canActivate: [AuthService],
  },
  {
    path: 'all-podcasts',
    loadChildren: () => import('./layout/all-podcasts/all-podcasts.module').then(m => AllPodcastsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'plataforma',
    loadChildren: () => import('./layout/our-apps/our-apps.module').then(m => OurAppsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'authors',
    loadChildren: () => import('./layout/authors/authors.module').then(m => AuthorsModule),
    // canActivate: [AuthService],
  },
  {
    path: 'janumi',
    loadChildren: () => import('./layout/newsletter/newsletter.module').then(m => m.NewsletterModule),
  },
  {
    path: 'AudioPodkasti',
    loadChildren: () => import('./layout/upload-your-podcast/upload-your-podcast.module').then(m => m.UploadYourPodcastModule),
  },
  {
    path: 'faqs',
    loadChildren: () => import('./layout/faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    path: 'privataPolitika',
    loadChildren: () => import('./layout/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
  },
  {
    path: 'sikdatnes',
    loadChildren: () => import('./layout/cookies-preferences/cookies-preferences.module').then(m => m.CookiesPreferencesModule),
  },
  {
    path: 'lietosanas',
    loadChildren: () => import('./layout/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule),
  },
  {
    path: 'kategorijas',
    loadChildren: () => import('./layout/categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: 'dizpardokli',
    loadChildren: () => import('./layout/bestsellers/bestsellers.module').then(m => m.BestsellersModule),
  },
  {
    path: 'jaunumi',
    loadChildren: () => import('./layout/new-books/new-books.module').then(m => m.NewBooksModule),
  },
  {
    path: 'stastnieki',
    loadChildren: () => import('./layout/narrators/narrators.module').then(m => m.NarratorsModule),
  },
  {
    path: 'izdeveji',
    loadChildren: () => import('./layout/publishers/publishers.module').then(m => m.PublishersModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

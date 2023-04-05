"use strict";
(self["webpackChunkebook_universal"] = self["webpackChunkebook_universal"] || []).push([["main"],{

/***/ 8876:
/*!*************************************!*\
  !*** ./browserstate.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStateInterceptor": () => (/* binding */ BrowserStateInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class BrowserStateInterceptor {
    constructor(transferState) {
        this.transferState = transferState;
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            console.log('if get', req.method);
            return next.handle(req);
        }
        const storedResponse = this.transferState.get((0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(req.url), null);
        if (storedResponse) {
            const response = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse({ body: storedResponse, status: 200 });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(response);
        }
        return next.handle(req);
    }
}
BrowserStateInterceptor.ɵfac = function BrowserStateInterceptor_Factory(t) { return new (t || BrowserStateInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.TransferState)); };
BrowserStateInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BrowserStateInterceptor, factory: BrowserStateInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_all_podcasts_all_podcasts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/all-podcasts/all-podcasts.module */ 3169);
/* harmony import */ var _layout_authors_authors_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/authors/authors.module */ 4097);
/* harmony import */ var _layout_our_apps_our_apps_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/our-apps/our-apps.module */ 362);
/* harmony import */ var _layout_podcast_detail_podcast_detail_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/podcast-detail/podcast-detail.module */ 7278);
/* harmony import */ var _layout_podcast_episodes_podcast_episodes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/podcast-episodes/podcast-episodes.module */ 8607);
/* harmony import */ var _layout_podcast_podcast_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/podcast/podcast.module */ 4340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_home-page_home-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/home-page/home-page.module */ 151)).then(m => m.HomePageModule),
        // canActivate: [AuthService],
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_home-page_home-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/home-page/home-page.module */ 151)).then(m => m.HomePageModule),
        // canActivate: [AuthService],
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule),
    },
    {
        path: 'podcast',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/podcast/podcast.module */ 4340)).then(m => _layout_podcast_podcast_module__WEBPACK_IMPORTED_MODULE_5__.PodcastModule),
        // canActivate: [AuthService],
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_detail-page_detail-page_detail-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/detail-page/detail-page/detail-page.module */ 2475)).then(m => m.DetailPageModule),
        // canActivate: [AuthService],
    },
    {
        path: 'view-more',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_view-more_view-more_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/view-more/view-more.module */ 6272)).then(m => m.ViewMoreModule),
        // canActivate: [AuthService],
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/change-password/change-password.module */ 2902)).then(m => m.ChangePasswordModule),
        // canActivate: [AuthService],
    },
    {
        path: 'updateProfile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_update-profile_update-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/update-profile/update-profile.module */ 7334)).then(m => m.UpdateProfileModule),
        // canActivate: [AuthService],
    },
    {
        path: 'favourites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_favourites_favourites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/favourites/favourites.module */ 1794)).then(m => m.FavouritesModule),
        // canActivate: [AuthService],
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/search/search.module */ 1629)).then(m => m.SearchModule),
        // canActivate: [AuthService],
    },
    {
        path: 'pdf-view',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap_carousel_fesm2020_ngx-bootstrap-carousel_mjs"), __webpack_require__.e("src_app_layout_ebook-reader_ebook-reader_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/ebook-reader/ebook-reader.module */ 6656)).then(m => m.EbookReaderModule),
        // canActivate: [AuthService],
    },
    {
        path: 'epub-view',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bootstrap_carousel_fesm2020_ngx-bootstrap-carousel_mjs"), __webpack_require__.e("src_app_layout_epub-reader_epub-reader_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/epub-reader/epub-reader.module */ 9860)).then(m => m.EpubReaderModule),
        // canActivate: [AuthService],
    },
    {
        path: 'cookiePolicy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_cookie-policy_cookie-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/cookie-policy/cookie-policy.module */ 2347)).then(m => m.CookiePolicyModule),
        // canActivate: [AuthService],
    },
    {
        path: 'parUznemumu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/about-us/about-us.module */ 5365)).then(m => m.AboutUsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'darbs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_work-with-us_work-with-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/work-with-us/work-with-us.module */ 8367)).then(m => m.WorkWithUsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'contactUs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/contact-us/contact-us.module */ 4218)).then(m => m.ContactUsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'podcast-detail',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/podcast-detail/podcast-detail.module */ 7278)).then(m => _layout_podcast_detail_podcast_detail_module__WEBPACK_IMPORTED_MODULE_3__.PodcastDetailModule),
        // canActivate: [AuthService],
    },
    {
        path: 'podcast-episodes',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/podcast-episodes/podcast-episodes.module */ 8607)).then(m => _layout_podcast_episodes_podcast_episodes_module__WEBPACK_IMPORTED_MODULE_4__.PodcastEpisodesModule),
        // canActivate: [AuthService],
    },
    {
        path: 'all-podcasts',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/all-podcasts/all-podcasts.module */ 3169)).then(m => _layout_all_podcasts_all_podcasts_module__WEBPACK_IMPORTED_MODULE_0__.AllPodcastsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'plataforma',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/our-apps/our-apps.module */ 362)).then(m => _layout_our_apps_our_apps_module__WEBPACK_IMPORTED_MODULE_2__.OurAppsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'authors',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/authors/authors.module */ 4097)).then(m => _layout_authors_authors_module__WEBPACK_IMPORTED_MODULE_1__.AuthorsModule),
        // canActivate: [AuthService],
    },
    {
        path: 'janumi',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_newsletter_newsletter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/newsletter/newsletter.module */ 1235)).then(m => m.NewsletterModule),
    },
    {
        path: 'AudioPodkasti',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_upload-your-podcast_upload-your-podcast_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/upload-your-podcast/upload-your-podcast.module */ 481)).then(m => m.UploadYourPodcastModule),
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/faqs/faqs.module */ 7878)).then(m => m.FaqsModule),
    },
    {
        path: 'privataPolitika',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/privacy-policy/privacy-policy.module */ 5559)).then(m => m.PrivacyPolicyModule),
    },
    {
        path: 'sikdatnes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_cookies-preferences_cookies-preferences_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/cookies-preferences/cookies-preferences.module */ 3863)).then(m => m.CookiesPreferencesModule),
    },
    {
        path: 'lietosanas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_terms-and-conditions_terms-and-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/terms-and-conditions/terms-and-conditions.module */ 7048)).then(m => m.TermsAndConditionsModule),
    },
    {
        path: 'kategorijas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/categories/categories.module */ 8647)).then(m => m.CategoriesModule),
    },
    {
        path: 'dizpardokli',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_bestsellers_bestsellers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/bestsellers/bestsellers.module */ 6318)).then(m => m.BestsellersModule),
    },
    {
        path: 'jaunumi',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_new-books_new-books_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/new-books/new-books.module */ 465)).then(m => m.NewBooksModule),
    },
    {
        path: 'stastnieki',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_narrators_narrators_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/narrators/narrators.module */ 3295)).then(m => m.NarratorsModule),
    },
    {
        path: 'izdeveji',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_publishers_publishers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/publishers/publishers.module */ 3629)).then(m => m.PublishersModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledNonBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-tag-manager */ 3812);




class AppComponent {
    constructor(router, gtmService) {
        this.router = router;
        this.gtmService = gtmService;
        this.title = 'ebook_universal';
    }
    customEvent(event) {
        // push GTM data layer with a custom event
        const gtmTag = {
            event: 'button-click',
            data: 'my-custom-event',
        };
        this.gtmService.pushTag(gtmTag);
        // console.log('28 ========== this is a custom event', event);
    }
    ngOnInit() {
        // push GTM data layer for every visited page
        this.router.events.forEach(item => {
            if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                const gtmTag = {
                    event: 'page',
                    pageName: item.url
                };
                this.gtmService.pushTag(gtmTag);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_2__.GoogleTagManagerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_0_listener($event) { return ctx.customEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var browserstate_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browserstate.interceptor */ 8876);
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-tag-manager */ 3812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
            useClass: browserstate_interceptor__WEBPACK_IMPORTED_MODULE_3__.BrowserStateInterceptor,
            multi: true,
        },
        // {
        //   provide: 'googleTagManagerId',
        //   useValue: 'GTM-WJDK8RS'
        // },
        { provide: 'googleTagManagerCSPNonce', useValue: 'CSP-NONCE' },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot(),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
        angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_12__.GoogleTagManagerModule.forRoot({
            id: 'GTM-WJDK8RS'
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule, angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_12__.GoogleTagManagerModule] }); })();


/***/ }),

/***/ 890:
/*!********************************************************************!*\
  !*** ./src/app/layout/all-podcasts/all-podcasts-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPodcastsRoutingModule": () => (/* binding */ AllPodcastsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _all_podcasts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-podcasts.component */ 5133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _all_podcasts_component__WEBPACK_IMPORTED_MODULE_0__.AllPodcastsComponent
    },
];
class AllPodcastsRoutingModule {
}
AllPodcastsRoutingModule.ɵfac = function AllPodcastsRoutingModule_Factory(t) { return new (t || AllPodcastsRoutingModule)(); };
AllPodcastsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AllPodcastsRoutingModule });
AllPodcastsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllPodcastsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5133:
/*!***************************************************************!*\
  !*** ./src/app/layout/all-podcasts/all-podcasts.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPodcastsComponent": () => (/* binding */ AllPodcastsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);












function AllPodcastsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPodcastsComponent_div_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.detailBook(data_r2["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 16)(8, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["image"] ? ctx_r0.IMAGE_URL + data_r2["image"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngbTooltip", data_r2["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngbTooltip", data_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r0.getRating(data_r2.rating), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function AllPodcastsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 5)(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "div", 11)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 20)(12, "div", 21)(13, "div", 11)(14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 20)(18, "div", 21)(19, "div", 11)(20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 20)(24, "div", 21)(25, "div", 11)(26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AllPodcastsComponent {
    constructor(apiService, route, router, toastr, platformId) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.platformId = platformId;
        this.tabType = '';
        this.dataList = [];
        this.ratings = [];
        this.modifiedGenre = [];
        this.categoryName = '';
        this.bookType = '';
        this.categoryId = '';
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.skip = 0;
        this.totalRecords = 0;
        this.isSpinner = false;
        this.errorMessage = '';
        this.pageType = '';
        this.selectedCategory = '';
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
        this.route.queryParams.subscribe(params => {
            this.categoryName = params['category'] != undefined ? params['category'] : '';
            this.bookType = params['type'] != undefined ? params['type'] : '';
            this.categoryId = params['id'] != undefined ? params['id'] : '';
            // this.pageType = params['pageType'] != undefined ? params['pageType'] : null;
            this.tabType = this.bookType;
            if (this.categoryId) {
                this.getCategoryName(this.categoryId);
            }
            else {
                this.selectedCategory = this.categoryName.toLocaleLowerCase() == 'recomendations' ? 'Ieteikumi' : 'novel';
            }
            if (this.categoryName && this.bookType) {
                this.getPodcastByCategoryName(this.bookType, this.categoryName, this.skip, 8);
            }
            if (this.bookType && this.categoryId) {
                this.getPodcastByCategoryId(this.categoryId, this.skip, 8);
            }
        });
    }
    //  get Podcast By Category Name  //
    getPodcastByCategoryName(type, category, skip, limit) {
        this.isSpinner = false;
        this.tabType = type;
        this.apiService.getData(`webPodcast/list/categoryName?category=${category}&skip=${skip}&limit=${limit}`).subscribe((result) => {
            this.isSpinner = true;
            this.dataList.push(...result.data);
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get Podcast By Category Id  //
    getPodcastByCategoryId(id, skip, limit) {
        this.isSpinner = false;
        this.apiService.getData(`webPodcast/podcastByCategory/${id}?skip=${skip}&limit=${limit}`).subscribe((result) => {
            this.isSpinner = true;
            this.dataList.push(...result.data);
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get category name  //
    getCategoryName(id) {
        let categoryArr = [];
        this.apiService.getData(`category?type=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast}`).subscribe((res) => {
            categoryArr = res.data.filter((category) => id == category._id);
            this.selectedCategory = categoryArr[0].lvName;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get book details  //
    detailBook(id) {
        this.router.navigate(['podcast-detail/'], { queryParams: { 'id': id, 'type': this.tabType } });
    }
    //  toggle tabs  //
    getType(event) {
        this.tabType = event;
        if (event === src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.audiobook) {
            this.dataList = [];
            this.skip = 0;
            this.router.navigate(['/view-more/'], { queryParams: { 'type': event, 'category': this.categoryName } });
        }
        if (event === src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.ebook) {
            this.dataList = [];
            this.skip = 0;
            this.router.navigate(['/view-more/'], { queryParams: { 'type': event, 'category': this.categoryName } });
        }
    }
    //  on scroll down load more data  //
    onScroll() {
        if (this.skip == 0 && this.dataList.length < 1) {
            this.skip = 0;
        }
        if (this.dataList.length != this.totalRecords) {
            this.skip = this.skip + 10;
            setTimeout(() => {
                if (this.categoryName) {
                    this.getPodcastByCategoryName(this.bookType, this.categoryName, this.skip, 10);
                }
                if (this.categoryId) {
                    this.getPodcastByCategoryId(this.categoryId, this.skip, 10);
                }
            }, 1000);
        }
    }
    //  get book rating //
    getRating(data) {
        let beforePointValue = data.toString().split(".")[0];
        let afterPointValue = data.toString().split(".")[1];
        var temp = [0, 1, 2, 3, 4];
        let html = '';
        for (let i = 0; i < temp.length; i++) {
            if (beforePointValue <= i) {
                if (afterPointValue) {
                    html += `<li ><img src="assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`;
                    afterPointValue = undefined;
                }
                else {
                    html += `<li ><img src="assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`;
                }
            }
            else {
                html += `<li ><img src="assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`;
            }
        }
        return html;
    }
}
AllPodcastsComponent.ɵfac = function AllPodcastsComponent_Factory(t) { return new (t || AllPodcastsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
AllPodcastsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AllPodcastsComponent, selectors: [["app-all-podcasts"]], decls: 16, vars: 5, consts: [[3, "newItemEvent"], [1, "contentPart"], [1, "container"], [1, "productTitle"], [1, "d-flex", "justify-content-between", "align-items-center", "productTitleInner", "mb-4"], [1, "productline"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], ["class", "col-md-4 col-sm-12 mb-5 five-image-row", 4, "ngFor", "ngForOf"], ["class", "contentPart", 4, "ngIf"], [1, "col-md-4", "col-sm-12", "mb-5", "five-image-row"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [1, "bookBtn", "yellow"], ["src", "assets/images/mic.svg", "alt", "Book icon"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], ["placement", "top", 3, "ngbTooltip"], [1, "ratingWrap", 3, "innerHtml"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "singleProduct", "shimmer"], [1, ""]], template: function AllPodcastsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newItemEvent", function AllPodcastsComponent_Template_app_header_newItemEvent_0_listener($event) { return ctx.getType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function AllPodcastsComponent_Template_div_scrolled_9_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AllPodcastsComponent_div_10_Template, 13, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div")(12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AllPodcastsComponent_div_14_Template, 29, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.InfiniteScrollDirective], styles: [".contentPart[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  width: 230px;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.bookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #03B0AE;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #03B0AE;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-height: 264px;\n  max-height: 264px;\n  object-position: top;\n  object-fit: cover;\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 10px 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 15px;\n  color: #000000;\n  opacity: 0.75;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]     li {\n  margin-right: 5px;\n}\n.five-image-row[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-top: 10px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #ebebeb calc(50% - 100px), #c5c5c5 50%, #ebebeb calc(50% + 100px));\n  background-size: 0;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(200% + 200px);\n  bottom: 0;\n  background-image: inherit;\n  animation: move 2s linear infinite;\n}\n@keyframes move {\n  to {\n    transform: translateX(calc(50% + 100px));\n  }\n}\n.productTitleInner[_ngcontent-%COMP%]   h2.shimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n.singleProduct.shimmer[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-top: 10px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    min-height: 200px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: inherit;\n    min-height: inherit;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 12px 4px 12px;\n  }\n  img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1wb2RjYXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNRO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FBQVo7QUFHZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRHBCO0FBSW9CO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRnhCO0FBTVk7RUFDSSx1QkFBQTtBQUpoQjtBQUtnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQUtnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQUtnQjtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhwQjtBQUlvQjtFQUNJLGlCQUFBO0FBRnhCO0FBU0E7RUFDSSxpQkFBQTtBQU5KO0FBVUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVBO0VBQ0UsOEdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFTQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQU5GO0FBUUE7RUFDRTtJQUNFLHdDQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFOSjtBQVFBO0VBQ0ksd0JBQUE7QUFMSjtBQVNBO0VBQ0k7SUFDSSxVQUFBO0VBTk47QUFDRjtBQVFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUFOTjtBQUNGO0FBU0E7RUFPd0I7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VBYjFCO0FBQ0Y7QUF1QkE7RUFNd0I7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0VBMUIxQjtBQUNGO0FBbUNBO0VBQ0k7SUFDSSxVQUFBO0VBakNOO0VBbUNFO0lBQ0ksc0JBQUE7RUFqQ047RUFtQ0U7SUFDSSxXQUFBO0VBakNOO0VBNkM4QjtJQUNJLFdBQUE7RUEzQ2xDO0FBQ0Y7QUFzREE7RUFDSTtJQUNJLFdBQUE7RUFwRE47QUFDRiIsImZpbGUiOiJhbGwtcG9kY2FzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFBhcnQge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5ib29rQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNCMEFFO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzQjBBRTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweCAxMnB4O1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bC5yYXRpbmdXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnByb2R1Y3RUeHQgdWwucmF0aW5nV3JhcCA6Om5nLWRlZXAgbGkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIFxufVxuXG4uZml2ZS1pbWFnZS1yb3cge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNoaW1tZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYmViZWIgY2FsYyg1MCUgLSAxMDBweCksICNjNWM1YzUgNTAlLCAjZWJlYmViIGNhbGMoNTAlICsgMTAwcHgpKTtcbiAgYmFja2dyb3VuZC1zaXplOjA7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG4uc2hpbW1lcjo6YmVmb3JlIHtcbiAgY29udGVudDpcIlwiO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHJpZ2h0OjA7XG4gIHdpZHRoOmNhbGMoMjAwJSArIDIwMHB4KTtcbiAgYm90dG9tOjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6aW5oZXJpdDtcbiAgYW5pbWF0aW9uOm1vdmUgMnMgbGluZWFyIGluZmluaXRlOyBcbn1cbkBrZXlmcmFtZXMgbW92ZXtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoNTAlICsgMTAwcHgpKTtcbiAgfVxufVxuXG4ucHJvZHVjdFRpdGxlSW5uZXIgaDIuc2hpbW1lciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpbmdsZVByb2R1Y3Quc2hpbW1lciB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuLy8gU3RhcnQgTWVkaWEgUXVlcnlcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuZml2ZS1pbWFnZS1yb3cge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLmZpdmUtaW1hZ2Utcm93IHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3RJbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3RJbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZpdmUtaW1hZ2Utcm93IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmNvbnRlbnRQYXJ0IC5wcm9kdWN0bGluZSAuc2luZ2xlUHJvZHVjdCAucHJvZHVjdFR4dCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggNHB4IDEycHg7XG4gICAgfVxuICAgIGltZy5zdGFyTGluZSB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0VHh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMntcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5yYXRpbmdXcmFwIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0YXJMaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuZml2ZS1pbWFnZS1yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 3169:
/*!************************************************************!*\
  !*** ./src/app/layout/all-podcasts/all-podcasts.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPodcastsModule": () => (/* binding */ AllPodcastsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _all_podcasts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-podcasts-routing.module */ 890);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _all_podcasts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-podcasts.component */ 5133);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AllPodcastsModule {
}
AllPodcastsModule.ɵfac = function AllPodcastsModule_Factory(t) { return new (t || AllPodcastsModule)(); };
AllPodcastsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AllPodcastsModule });
AllPodcastsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _all_podcasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllPodcastsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AllPodcastsModule, { declarations: [_all_podcasts_component__WEBPACK_IMPORTED_MODULE_2__.AllPodcastsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _all_podcasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllPodcastsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] }); })();


/***/ }),

/***/ 5875:
/*!**********************************************************!*\
  !*** ./src/app/layout/authors/authors-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorsRoutingModule": () => (/* binding */ AuthorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authors.component */ 8834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _authors_component__WEBPACK_IMPORTED_MODULE_0__.AuthorsComponent
    },
];
class AuthorsRoutingModule {
}
AuthorsRoutingModule.ɵfac = function AuthorsRoutingModule_Factory(t) { return new (t || AuthorsRoutingModule)(); };
AuthorsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthorsRoutingModule });
AuthorsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8834:
/*!*****************************************************!*\
  !*** ./src/app/layout/authors/authors.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorsComponent": () => (/* binding */ AuthorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);



class AuthorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorsComponent.ɵfac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(); };
AuthorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthorsComponent, selectors: [["app-authors"]], decls: 62, vars: 0, consts: [[1, "contentPart"], [1, "authors-main", "py-5"], [1, "container"], [1, "authors__wrapper"], ["src", "assets/images/last-9.png", "alt", "", 1, "img-fluid"], [1, "mt-2", "mb-0"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "ul")(6, "li")(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li")(32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li")(37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li")(42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li")(47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li")(52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li")(57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".authors__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.authors__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 22%;\n  margin-bottom: 40px;\n  box-shadow: 0px 0px 7px 6px rgba(48, 48, 48, 0.1);\n  padding: 15px;\n  margin: 0 15px 35px;\n  text-align: center;\n  border-radius: 50%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.authors__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.authors__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUlKIiwiZmlsZSI6ImF1dGhvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yc19fd3JhcHBlciB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmF1dGhvcnNfX3dyYXBwZXIgdWwgbGkge1xuICAgIHdpZHRoOiAyMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCA2cHggcmdiKDQ4IDQ4IDQ4IC8gMTAlKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXV0aG9yc19fd3JhcHBlciB1bCBsaSBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5hdXRob3JzX193cmFwcGVyIHVsIGxpIHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"] });


/***/ }),

/***/ 4097:
/*!**************************************************!*\
  !*** ./src/app/layout/authors/authors.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorsModule": () => (/* binding */ AuthorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _authors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authors-routing.module */ 5875);
/* harmony import */ var _authors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authors.component */ 8834);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class AuthorsModule {
}
AuthorsModule.ɵfac = function AuthorsModule_Factory(t) { return new (t || AuthorsModule)(); };
AuthorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthorsModule });
AuthorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _authors_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthorsModule, { declarations: [_authors_component__WEBPACK_IMPORTED_MODULE_1__.AuthorsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _authors_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] }); })();


/***/ }),

/***/ 2449:
/*!************************************************************!*\
  !*** ./src/app/layout/our-apps/our-apps-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAppsRoutingModule": () => (/* binding */ OurAppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _our_apps_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-apps.component */ 7001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _our_apps_component__WEBPACK_IMPORTED_MODULE_0__.OurAppsComponent
    },
];
class OurAppsRoutingModule {
}
OurAppsRoutingModule.ɵfac = function OurAppsRoutingModule_Factory(t) { return new (t || OurAppsRoutingModule)(); };
OurAppsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OurAppsRoutingModule });
OurAppsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OurAppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7001:
/*!*******************************************************!*\
  !*** ./src/app/layout/our-apps/our-apps.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAppsComponent": () => (/* binding */ OurAppsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);





const _c0 = ["canvas"];
const _c1 = ["canvas1"];
// import QRCodeStyling from 'qr-code-styling';
// import * as QRCodeStyling from "qr-code-styling";
class OurAppsComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'QR code styling for Angular';
        this.data = 'http://qr-code-styling.com';
        this.extension = 'svg';
    }
    ngOnInit() {
        this.setMetaInfo();
        // this.qrCode = new QRCodeStyling({
        //   width: 100,
        //   height: 100,
        //   type: 'svg',
        //   data: this.data,
        //   image: '',
        //   margin: 10,
        //   qrOptions: {
        //     typeNumber: 0,
        //     mode: 'Byte',
        //     errorCorrectionLevel: 'Q'
        //   },
        //   imageOptions: {
        //     hideBackgroundDots: true,
        //     imageSize: 0.4,
        //     margin: 20,
        //     crossOrigin: 'anonymous',
        //   },
        //   dotsOptions: {
        //     color: '#000',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 0,
        //     //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        //     // },
        //     type: 'rounded'
        //   },
        //   backgroundOptions: {
        //     color: '#fff',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 0,
        //     //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        //     // },
        //   },
        //   cornersSquareOptions: {
        //     color: '#000',
        //     type: 'square',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 180,
        //     //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        //     // },
        //   },
        //   cornersDotOptions: {
        //     color: '#000',
        //     type: 'dot',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 180,
        //     //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        //     // },
        //   }
        // });
        // this.qrCode1 = new QRCodeStyling({
        //   width: 100,
        //   height: 100,
        //   type: 'svg',
        //   data: this.data,
        //   image: '',
        //   margin: 10,
        //   qrOptions: {
        //     typeNumber: 0,
        //     mode: 'Byte',
        //     errorCorrectionLevel: 'Q'
        //   },
        //   imageOptions: {
        //     hideBackgroundDots: true,
        //     imageSize: 0.4,
        //     margin: 20,
        //     crossOrigin: 'anonymous',
        //   },
        //   dotsOptions: {
        //     color: '#000',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 0,
        //     //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        //     // },
        //     type: 'rounded'
        //   },
        //   backgroundOptions: {
        //     color: '#fff',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 0,
        //     //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        //     // },
        //   },
        //   cornersSquareOptions: {
        //     color: '#000',
        //     type: 'square',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 180,
        //     //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        //     // },
        //   },
        //   cornersDotOptions: {
        //     color: '#000',
        //     type: 'dot',
        //     // gradient: {
        //     //   type: 'linear', // 'radial'
        //     //   rotation: 180,
        //     //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        //     // },
        //   }
        // });
        // this.qrCode.append(this.canvas.nativeElement);
        // this.qrCode1.append(this.canvas1.nativeElement);
    }
    setMetaInfo() {
        let metaTitle = 'Lejuplādē Audiolasītavas lietotni Android un iOS vidēm';
        let metaDescription = 'Klausies visas Audiolasītavas audiogrāmatas, podkāstus, e-grāmatas savā mobilajā tālrunī, lejuplādējot lietotni Android un iOS vidēs. Tavas audiogrāmatas vienas lejuplādes attālumā!';
        let metaUrl = window.location.href;
        this.titleService.setTitle(metaTitle);
        this.metaService.updateTag({ name: 'description', content: metaDescription });
        this.metaService.addTag({ property: 'og:title', content: metaTitle });
        this.metaService.addTag({ property: 'og:description', content: metaDescription });
        this.metaService.addTag({ property: 'og:url', content: metaUrl });
    }
}
OurAppsComponent.ɵfac = function OurAppsComponent_Factory(t) { return new (t || OurAppsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta)); };
OurAppsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OurAppsComponent, selectors: [["app-our-apps"]], viewQuery: function OurAppsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas1 = _t.first);
    } }, decls: 34, vars: 0, consts: [[1, "contentPart"], [1, "our-apps-main", "py-5"], [1, "container"], [1, "our-apps__wrapper"], [1, "our-apps__content"], [1, "mb-4"], [1, "mb-5"], [1, "mb-3"], ["src", "assets/images/apple.png", "alt", ""], ["canvas", ""], [1, "btn", "cus-btn"], ["src", "assets/images/android.png", "alt", ""], ["canvas1", ""]], template: function OurAppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Audiolas\u012Btavas lietotnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Lejupiel\u0101d\u0113jiet m\u016Bsu bezmaksas lietotni Android vai iPhone ier\u012Bc\u0113 un klausieties audiogr\u0101matas jebkur\u0101 viet\u0101, pat bezsaist\u0113. J\u016Bsu izv\u0113l\u0113tais saturs tiek autom\u0101tiski sinhroniz\u0113ts vis\u0101s j\u016Bsu ier\u012Bc\u0113s. J\u016Bs pat varat klaus\u012Bties audiogr\u0101matas automa\u0161\u012Bn\u0101, kas atbalsta Bluetooth\u00AE. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul")(11, "li")(12, "div", 7)(13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Audiolas\u012Btava");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Apple (IOS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 8)(18, "div", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "App Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li")(23, "div", 7)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Audiolas\u012Btava");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 11)(29, "div", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Google Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\n.our-apps__wrapper[_ngcontent-%COMP%] {\n  background: #F5F5F5;\n  border-radius: 20px;\n  max-width: 60%;\n  padding: 50px 30px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  margin: 0 auto;\n  text-align: center;\n}\n.our-apps__content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  max-width: 75%;\n  margin: 0 auto;\n}\n.our-apps__content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #A4353B;\n  border-radius: 3px;\n  width: 48%;\n  font-size: 18px;\n  padding: 15px;\n}\n.cus-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 142px;\n  background: #A4353B;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsIm91ci1hcHBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZKQUFBO0FBR1I7RUFDSSxZQ3VHUztFRHRHVCxXQ3NCUztBQ3ZCYjtBRklBO0VBQ0ksWUNrR1M7RURqR1QsV0NpQlM7QUNsQmI7QUZJQTtFQUNJLFlDNkZTO0VENUZULFdDWVM7QUNiYjtBRklBO0VBQ0ksWUN3RlM7RUR2RlQsV0NPUztBQ1JiO0FGSUE7RUFDSSxvQkNzQ2M7QUN2Q2xCO0FGSUE7OztFQUdJLGdDQUFBO0FFREo7QUZJQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUVESjtBRk1JO0VBRUksNEJDWGE7RURZYixrQ0FBQTtFQUNBLHNCQytGUztFRDlGVCxhQ2lDTTtFRGhDTix5QkFBQTtFQUNBLGNBQUE7QUVKUjtBRk1RO0VBQ0ksa0JBQUE7QUVKWjtBRk9ZO0VBQ0ksZ0JDY0E7RURiQSxlQzlDUDtFRCtDTyxpQkN2Q0M7RUR3Q0QsdUJBQUE7RUFDQSx5QkNvRkE7RURuRkEsV0NoQ0g7QUMyQmI7QUZRWTtFQUNJLGdCQ01BO0VETEEsZUNyRFA7RURzRE8saUJDM0NDO0VENENELDBCQzZFQztFRDVFRCxXQ3hDSDtBQ2tDYjtBRlNZO0VBQ0ksZ0JDSkE7RURLQSxlQ2hFUDtFRGlFTyxpQkNyREM7RURzREQsdUJBQUE7RUFDQSwwQkNvRUM7RURuRUQsV0NqREg7QUMwQ2I7QUZVWTtFQUNJLGdCQ1hBO0VEWUEsZUM1RVA7RUQ2RU8saUJDakVDO0VEa0VELGtCQ29DSDtFRG5DRyx1QkFBQTtFQUNBLFdDM0RIO0VENERHLHNCQUFBO0VBQ0Esb0JDNkJFO0VENUJGLGdCQzdESDtFRDhERyxrQkFBQTtFQUNBLGtCQUFBO0FFUmhCO0FGU2dCO0VBQ0ksNkJDOURJO0VEK0RKLFdDbEVQO0FDMkRiO0FGV1k7RUFDSSxn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QUE7RUVqS3RCO0VGd0tVO0lBQ0ksWUFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFRXRLZDtFRnlLa0I7SUFDSSwrQkFBQTtFRXZLdEI7RUZ5S3NCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFdksxQjtFRjJLa0I7SUFDSSxXQUFBO0lBQ0EsdUJBQUE7RUV6S3RCO0VGMEtzQjtJQUNJLGlCQUFBO0VFeEsxQjtFRitLTTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFRTdLVjtFRitLVTtJQUNJLGFBQUE7RUU3S2Q7RUZnTFU7SUFDSSxnQkFBQTtFRTlLZDtBQUNGO0FGbUxBO0VBRVE7SUFDSSxlQUFBO0VFbExWO0VGcUxjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFbkxsQjtFRjhMc0I7SUFDSSxzQkFBQTtFRTVMMUI7RUY4TDBCO0lBQ0ksY0FBQTtFRTVMOUI7RUZ1TWtCO0lBQ0ksV0FBQTtFRXJNdEI7RUYyTU07SUFDSSxTQUFBO0VFek1WO0VGNE1jO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFMU1sQjtBQUNGO0FBMWpCQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTRqQko7QUExakJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUE2akJKO0FBM2pCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQThqQko7QUE1akJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBK2pCSiIsImZpbGUiOiJvdXItYXBwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICcuL3ZhcmliYWxlcy5zY3NzJztcblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xufVxuXG5hLFxuLmJ0bixcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC8qIElFIHN1cHBvcnQgKi9cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLmF1ZGlvU2VjdGlvbiB7XG4gICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL29mZmVyaW1hZ2UyLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiYWNrZ3JvdW5kTm9SZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJhY2tncm91bmRTaXplO1xuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ1MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjJDQztcbiAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG5cbiAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwJSAwO1xuXG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDI0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0VXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250NDY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxODtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dENhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZnJhZ21lbnRidG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czEwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZW50aXJlQnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRCbGFja0NvbG9yOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuXG4vLyBCcmVhZGNydW1iIFN0YXJ0IFxudWwuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvd0xlZnQuc3ZnJyk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBCcmVhZGNydW1iIEVuZCBcblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLndvcmtTZWN0aW9uIHtcbiAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAxMjBweCAwO1xuXG4gICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgNzBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBPZmZlciBFbmRcblxuXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4ub2ZmZXJTZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm9mZmVyVGV4dCB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnVsIC5yYXRpbmdXcmFwIHtcbiAgICBsaS5pbWcge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnBhZGRpbmcxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4vKiBBYm91dCB1cyBwYWdlICYgd29yayB3aXRoIHVzIHBhZ2UgQ1NTIFN0YXJ0ICovXG4uYWJvdXQtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5hYm91dC10ZXh0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgc3Bhbi5yZWFkLW1vcmUge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBFbmQgKi9cblxuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gICAgLm9yZGVyLXNtLTEge1xuICAgICAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc20tMiB7XG4gICAgICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XG5cbiAgICAuY29udGFpbmVyLXh4bCxcbiAgICAuY29udGFpbmVyLXhsLFxuICAgIC5jb250YWluZXItbGcsXG4gICAgLmNvbnRhaW5lci1tZCxcbiAgICAuY29udGFpbmVyLXNtLFxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG4gICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAuaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuLmxlZnRBcnJvdyxcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgLmhlYWRpbmdUaXRsZSB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5zV3JhcC5kLWZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvbnRTaXplIFByb3BlcnRpZXNcblxuJGZvbnQxMTogMTFweDtcbiRmb250MTI6IDEycHg7XG4kZm9udDEzOiAxM3B4O1xuJGZvbnQxNDogMTRweDtcbiRmb250MTU6IDE1cHg7XG4kZm9udDE2OiAxNnB4O1xuJGZvbnQxNzogMTdweDtcbiRmb250MTg6IDE4cHg7XG4kZm9udDI0OiAyNHB4O1xuJGZvbnQzMDogMzBweDtcbiRmb250NDY6IDQ2cHg7XG5cbi8vIExpbmUtaGVpZ2h0IFByb3BlcnRpZXNcblxuJGxpbmVIZWlnaHQxMnB4OiAxMnB4O1xuJGxpbmVIZWlnaHQxNHB4OiAxNHB4O1xuJGxpbmVIZWlnaHQxNnB4OiAxNnB4O1xuJGxpbmVIZWlnaHQyMnB4OiAyMnB4O1xuJGxpbmVIZWlnaHQyOHB4OiAyOHB4O1xuJGxpbmVIZWlnaHQzMnB4OiAzMnB4O1xuJGxpbmVIZWlnaHQ0MnB4OiA0MnB4O1xuJGxpbmVIZWlnaHQ1MnB4OiA1MnB4O1xuXG4vLyBDb2xvciBQcm9wZXJ0aWVzXG5cbiRXaGl0ZUNvbG9yOiAjZmZmO1xuJEJsYWNrQ29sb3I6ICMwMDA7XG4kTWFyb29uQ29sb3I6ICNBNDM1M0I7XG4kQ29sb3JCREJDQkQ6ICNCREJDQkQ7XG4kYmFja2dyb3VuZFRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcbiRiYWNrZ3JvdW5kTm9SZXBlYXQ6IG5vLXJlcGVhdDtcblxuLy8gbWFyZ2luIFByb3BlcnRpZXNcbiRtYXJnaW5BdXRvOiBhdXRvO1xuJG1hcmdpblplcm86IDBweDtcbiRtYXJnaW41cHg6IDVweDtcbiRtYXJnaW42cHg6IDZweDtcbiRtYXJnaW4xMHB4OiAxMHB4O1xuJG1hcmdpbjEycHg6IDEycHg7XG4kbWFyZ2luMTVweDogMTVweDtcbiRtYXJnaW4yMHB4OiAyMHB4O1xuJG1hcmdpbjI1cHg6IDI1cHg7XG4kbWFyZ2luMzVweDogMzVweDtcbiRtYXJnaW41MHB4OiA1MHB4O1xuXG4vLyBQYWRkaW5nIFByb3BlcnRpZXNcbiRwYWRkaW5nWmVybzogMHB4O1xuJHBhZGRpbmcxMHB4OiAxMHB4O1xuJHBhZGRpbmcxMnB4OiAxMnB4O1xuJHBhZGRpbmcxNXB4OiAxNXB4O1xuJHBhZGRpbmcyMHB4OiAyMHB4O1xuJHBhZGRpbmcyNHB4OiAyNHB4O1xuJHBhZGRpbmcyNXB4OiAyNXB4O1xuJHBhZGRpbmczMHB4OiAzMHB4O1xuJHBhZGRpbmczNXB4OiAzNXB4O1xuJHBhZGRpbmc0MHB4OiA0MHB4O1xuJHBhZGRpbmc1MHB4OiA1MHB4O1xuJHBhZGRpbmc2MHB4OiA2MHB4O1xuXG4vLyBmb250LWZhbWlseVxuJGZvbnRGYW1pbHlJbnRlcjogJ0ludGVyJztcblxuLy8gRm9udC13aWVoZ3QgUHJvcGVydGllc1xuXG4kZm9udFdlaWdodDMwMDogMzAwO1xuJGZvbnRXZWlnaHQ0MDA6IDQwMDtcbiRmb250V2VpZ2h0NTAwOiA1MDA7XG4kZm9udFdlaWdodDYwMDogNjAwO1xuJGZvbnRXZWlnaHQ3MDA6IDcwMDtcblxuLy8gSGVpZ2h0IFByb3BlcnRpZXNcbiRoZWlnaHRBdXRvOiBhdXRvO1xuJGhlaWdodDIwcHg6IDIwcHg7XG4kaGVpZ2h0MjRweDogMjRweDtcbiRoZWlnaHQzNHB4OiAzNHB4O1xuJGhlaWdodDQwcHg6IDQwcHg7XG4kaGVpZ2h0NDZweDogNDZweDtcbiRoZWlnaHQ1MDBweDogNTAwcHg7XG4kaGVpZ2h0MTAwdmg6IDEwMHZoO1xuJGhlaXVnaHQxMDBwZXI6IDEwMCU7XG5cbi8vIFdpZHRoIFByb3BlcnRpZXNcbiR3aWR0aEF1dG86IGF1dG87XG4kd2lkdGgyMHB4OiAyMHB4O1xuJHdpZHRoMjRweDogMjRweDtcbiR3aWR0aDMwcHg6IDMwcHg7XG4kd2lkdGgxNTBweDogMTUwcHg7XG4kd2lkdGgxMDBQZXI6IDEwMCU7XG5cbi8vIERpc3BsYXkgUHJvcGVydGllc1xuJGQtYmxvY2s6IGJsb2NrO1xuJGQtZmxleDogZmxleDtcbiRkLWlubGluZS1ibG9jazogaW5saW5lLWJsb2NrO1xuJGQtbm9uZTogbm9uZTtcblxuLy8gRmxleCBQcm9wZXJ0aWVzXG4kZmxleERpcmVjdGlvbkNvbHVtbjogY29sdW1uO1xuXG4vLyBBbGlnbiBQcm9wZXJ0aWVzXG4kYWxpZ25JdGVtc0NlbnRlcjogY2VudGVyO1xuJGp1c3RpZnlDb250ZW50Q2VudGVyOiBjZW50ZXI7XG5cbi8vIE9wYWNpdHkgUHJvcGVydGllc1xuJG9wYWNpdHlPbmU6IDE7XG4kb3BhY2l0eVR3bzogMC4yO1xuJG9wYWNpdHlPbmU6IDAuMztcbiRvcGFjaXR5Zml2ZTogMC41O1xuJG9wYWNpdHlTaXg6IDAuNjtcbiRvcGFjaXR5U2V2ZW46IDAuNztcbiRvcGFjaXR5SW5oZXJpdDogaW5oZXJpdDtcblxuXG4vLyBCb3JkZXIgUmFkaXVzIFByb3BlcnRpZXNcbiRib3JkZXJSYWRpdXM0OiA0cHg7XG4kYm9yZGVyUmFkaXVzMTI6IDEycHg7XG4kYm9yZGVyUmFkaXVzMTAwOiAxMDBweDtcblxuLy8gVGV4dC1jZW50ZXIgUHJvcGVydGllc1xuJHRleHRDZW50ZXI6IGNlbnRlcjtcblxuLy8gUG9zaXRpb25zIFByb3BlcnRpZXNcbiRwb3NpdGlvbkFic29sdXRlOiBhYnNvbHV0ZTtcbiRwb3NpdGlvblJlbGF0aXZlOiByZWxhdGl2ZTtcbiRwb3NpdGlvbkluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQ3Vyc29yIFBvaW50ZXIgUHJvcGVydGllc1xuJGN1cnNvclBvaW50ZXI6IHBvaW50ZXI7XG5cbi8vIGN1c3RvbSBQaXhlbHNcbiR6ZXJvcHg6IDBweDtcbiRmaXZlcHg6IDVweDtcbiRUZW5weDogMTBweDtcbiRmaWZ0ZWVucHg6IDE1cHg7XG4kdHdlbnR5cHg6IDIwcHg7XG5cbi8vIEJhY2tncm91bmRTaXplIFByb3BlcnRpZXNcblxuJGJhY2tncm91bmRTaXplOiBjb3ZlcjtcblxuLy8gVGV4dCBDYXNlcyBQcm9wZXJ0aWVzXG4kdGV4dFVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHRDYXBpdGFsaXplOiBjYXBpdGFsaXplOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWJhbGVzLnNjc3MnO1xuLm91ci1hcHBzX193cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYig5OSA5OSA5OSAvIDIwJSkgMHB4IDJweCA4cHggMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdXItYXBwc19fY29udGVudCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLm91ci1hcHBzX19jb250ZW50IHVsIGxpIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBNDM1M0I7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY3VzLWJ0biB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDE0MnB4O1xuICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 362:
/*!****************************************************!*\
  !*** ./src/app/layout/our-apps/our-apps.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAppsModule": () => (/* binding */ OurAppsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _our_apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-apps-routing.module */ 2449);
/* harmony import */ var _our_apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-apps.component */ 7001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class OurAppsModule {
}
OurAppsModule.ɵfac = function OurAppsModule_Factory(t) { return new (t || OurAppsModule)(); };
OurAppsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OurAppsModule });
OurAppsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _our_apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurAppsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OurAppsModule, { declarations: [_our_apps_component__WEBPACK_IMPORTED_MODULE_1__.OurAppsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _our_apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurAppsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] }); })();


/***/ }),

/***/ 1506:
/*!************************************************************************!*\
  !*** ./src/app/layout/podcast-detail/podcast-detail-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastDetailRoutingModule": () => (/* binding */ PodcastDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _podcast_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast-detail.component */ 5387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _podcast_detail_component__WEBPACK_IMPORTED_MODULE_0__.PodcastDetailComponent
    },
];
class PodcastDetailRoutingModule {
}
PodcastDetailRoutingModule.ɵfac = function PodcastDetailRoutingModule_Factory(t) { return new (t || PodcastDetailRoutingModule)(); };
PodcastDetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PodcastDetailRoutingModule });
PodcastDetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PodcastDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5387:
/*!*******************************************************************!*\
  !*** ./src/app/layout/podcast-detail/podcast-detail.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastDetailComponent": () => (/* binding */ PodcastDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/modal.service */ 1609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ 7422);















function PodcastDetailComponent_div_3_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_div_49_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.isReadMore ? "Lasi vair\u0101k (pilns apraksts)" : "Lasi maz\u0101k");
} }
const _c0 = function () { return ["copy", "facebook", "email", "twitter"]; };
function PodcastDetailComponent_div_3_share_buttons_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "share-buttons", 73);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("include", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0))("showIcon", true)("showText", false);
} }
function PodcastDetailComponent_div_3_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_div_59_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.openModal("", ctx_r13.podcastDetail.audioPresentation, ctx_r13.tabType, "audioPresentation", "", "")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Ieskats podk\u0101st\u0101");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function PodcastDetailComponent_div_3_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_ng_container_69_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const item_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.viewPodcastByCategoryId(ctx_r16.tabType, item_r15._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", item_r15.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, item_r15.name));
} }
function PodcastDetailComponent_div_3_li_77_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_li_77_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.showChapterText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r19.isChapterReadMore ? "Lasi vair\u0101k (pilns apraksts)" : "Lasi maz\u0101k");
} }
const _c1 = function (a0) { return { "spisodeDescriptionHeight": a0 }; };
function PodcastDetailComponent_div_3_li_77_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_li_77_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const episodes_r18 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](!ctx_r22.isSubscribed && episodes_r18.episode != 1 && episodes_r18.season != 1 ? ctx_r22.notSubscribedError() : ctx_r22.playLatestEpisode(episodes_r18.episodeName, "", ctx_r22.lastEpisodes, ctx_r22.tabType, "podcastByChapters")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 80)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 52)(12, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PodcastDetailComponent_div_3_li_77_div_14_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const episodes_r18 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r10.podcastDetail["image"] ? ctx_r10.IMAGE_URL + ctx_r10.podcastDetail["image"] : "/assets/images/largeDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 9, episodes_r18.uploadDate, "dd/MM/yyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("S", episodes_r18.season, " E", episodes_r18.episode, " - ", episodes_r18.episodeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, ctx_r10.isChapterReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](episodes_r18.episodeDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", episodes_r18.showReadMoreButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.chapterTimeFormat(episodes_r18.episodeLength));
} }
function PodcastDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 12)(3, "div", 9)(4, "div", 37)(5, "div", 38)(6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 42)(10, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](79); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.openSm(_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Rate this book");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 44)(13, "div", 45)(14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 46)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 50)(25, "div", 9)(26, "div", 51)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Sarakst\u012Bjis: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 51)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Valoda: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 50)(39, "div", 9)(40, "div", 51)(41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Abonenti: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 52)(46, "span", 53)(47, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, PodcastDetailComponent_div_3_div_49_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 55)(51, "button", 56)(52, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_Template_img_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.favouriteBook(ctx_r26.podcastDetail._id, ctx_r26.isFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 58)(54, "button", 59)(55, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_Template_img_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.isShare = !ctx_r27.isShare); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, PodcastDetailComponent_div_3_share_buttons_56_Template, 1, 4, "share-buttons", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 56)(58, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_Template_img_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.subscribePodcast(ctx_r28.podcastDetail._id, ctx_r28.isSubscribed)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, PodcastDetailComponent_div_3_div_59_Template, 5, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div")(61, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_3_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.allEpisodes(ctx_r29.podcastDetail._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Listen all episodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div")(66, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Kategorija");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, PodcastDetailComponent_div_3_ng_container_69_Template, 4, 4, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 68)(71, "div", 12)(72, "div", 69)(73, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](75, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, PodcastDetailComponent_div_3_li_77_Template, 17, 14, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12)(79, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.podcastDetail["image"] ? ctx_r0.IMAGE_URL + ctx_r0.podcastDetail["image"] : "/assets/images/largeDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.podcastDetail ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 19, ctx_r0.podcastDetail.name) : "The Gravity of us");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.podcastChapters ? ctx_r0.podcastChapters.length : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r0.getRating(ctx_r0.averageRating), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", ctx_r0.averageRating, " V\u0113rt\u0113jums)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 21, ctx_r0.podcastDetail.author), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 23, ctx_r0.podcastDetail.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.totalSubscribers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.isReadMore ? "month-recomm" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.podcastDetail.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.descriptionReadMoreButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.isFavourite ? "/assets/images/heartIcon.svg" : "/assets/images/heat.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("ngClass", ctx_r0.isFavourite ? "favourite" : "notFavourite");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.isSubscribed ? "/assets/images/bellIcon_3.png" : "/assets/images/bellIcon_2.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.podcastDetail.audioPresentation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.modifiedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](75, 25, ctx_r0.podcastDetail.name), " - P\u0113d\u0113j\u0101s epizodes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.lastEpisodes);
} }
function PodcastDetailComponent_div_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_4_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PodcastDetailComponent_div_4_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PodcastDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 82)(1, "div", 36)(2, "div", 12)(3, "div", 9)(4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 44)(9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "h2", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ul", 86)(15, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 52)(18, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PodcastDetailComponent_div_4_div_20_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 89)(22, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ul", 86)(24, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 91)(28, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "li", 92)(30, "li", 92)(31, "li", 92)(32, "li", 92)(33, "li", 92)(34, "li", 92)(35, "li", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 93)(37, "div", 12)(38, "div", 69)(39, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, PodcastDetailComponent_div_4_li_40_Template, 2, 0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.isReadMore ? "month-recomm" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.descriptionReadMoreButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.lastEpisodes);
} }
function PodcastDetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_12_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const book_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.similarBookDetail(book_r35["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 97)(3, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 102)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const book_r35 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", book_r35["image"] ? ctx_r2.IMAGE_URL + book_r35["image"] : "/assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 4, book_r35.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 6, book_r35.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r2.getRating(book_r35.rating), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function PodcastDetailComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_div_21_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const book_r38 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.similarBookDetail(book_r38["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 97)(3, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 102)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const book_r38 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", book_r38["image"] ? ctx_r3.IMAGE_URL + book_r38["image"] : "/assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 4, book_r38.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 6, book_r38.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r3.getRating(book_r38.rating), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function PodcastDetailComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 103)(1, "div", 104)(2, "h4", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_ng_template_78_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const modal_r41 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r41.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 107)(6, "form", 108)(7, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Add Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 110)(10, "ngb-rating", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rateChange", function PodcastDetailComponent_ng_template_78_Template_ngb_rating_rateChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.currentRate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 112)(12, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastDetailComponent_ng_template_78_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const modal_r41 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.addBookRating(ctx_r45.currentRate, ctx_r45.podcastDetail, modal_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r5.ratingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("max", 5)("rate", ctx_r5.currentRate);
} }
class PodcastDetailComponent {
    constructor(apiService, router, route, config, modalService, cusModalService, toastr, formBuilder, document, platformId) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.cusModalService = cusModalService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.platformId = platformId;
        this.updateid = '';
        this.podcastDetail = {};
        this.showSpin = false;
        this.showReadMoreButton = false;
        this.descriptionReadMoreButton = false;
        this.isShare = false;
        this.currentRate = 0;
        this.averageRating = 0;
        this.tabType = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast;
        this.sortOrders = [];
        this.similarPodcasts = [];
        this.errorMessage = '';
        this.ratings = [];
        this.modifiedCategory = [];
        this.isFavourite = false;
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.isReadMore = true;
        this.audioFile = '';
        this.selectedSortOrder = "Izvēlies nodaļu";
        this.lastEpisodes = [];
        this.isChapterReadMore = true;
        this.podcastChapters = [];
        this.isSubscribed = false;
        this.podcastChapterArr = [];
        this.popularPodcastList = [];
        this.totalSubscribers = 0;
        this.showShimmer = true;
    }
    ngOnInit() {
        this.ratingForm = this.formBuilder.group({
            rating: [''],
            bookType: ['']
        });
        this.currentUrl = this.router.url;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
        this.route.queryParams.subscribe(params => {
            this.updateid = params['id'] != undefined ? params['id'] : null;
            this.tabType = params['type'] != undefined ? params['type'] : null;
            if (this.updateid != undefined) {
                this.getPodcastDetails(this.updateid, this.tabType);
            }
        });
    }
    //  get podcast details  //
    getPodcastDetails(id, type) {
        this.sortOrders = [];
        this.showSpin = true;
        this.tabType = type;
        this.apiService.getData(`webPodcast/${id}`).subscribe((result) => {
            this.showShimmer = false;
            this.podcastDetail = result.data;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
                localStorage.setItem('type', this.tabType);
            }
            this.similarPodcasts = this.podcastDetail.similarPodcasts;
            this.errorMessage = (this.similarPodcasts == undefined || this.similarPodcasts.length < 1) ? 'No record found !!!' : '';
            this.averageRating = this.podcastDetail?.rating;
            this.modifiedCategory = [];
            for (let i = 0; i < this.podcastDetail?.category?.length; i++) {
                this.modifiedCategory.push({ "className": this.getClass(i), "_id": this.podcastDetail?.category[i]._id, "name": this.podcastDetail?.category[i].item_text_LV });
            }
            this.getLastEpisodes(this.podcastDetail.podcastByChapters);
            for (let item of this.podcastChapters) {
                this.sortOrders.push([item.episodeName, this.chapterTimeFormat(item.episodeLength)]);
            }
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
                if (localStorage.getItem('authorization') !== null) {
                    this.apiService.getData(`web/isFavourite/${id}`).subscribe((response) => {
                        this.isFavourite = response.data.isFavourite;
                    });
                    this.apiService.getData(`web/getSubscription/${id}`).subscribe((response) => {
                        this.isSubscribed = response.data.isSubscribed;
                    });
                    this.apiService.getData(`web/getRating/${id}`).subscribe((response) => {
                        this.currentRate = response.data.rating;
                    });
                }
            }
            if (this.podcastDetail.description.length >= 380) {
                this.descriptionReadMoreButton = true;
            }
            else {
                this.descriptionReadMoreButton = false;
            }
            this.showSpin = false;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
        this.apiService.getData(`webPodcast/popular/${id}`).subscribe((result) => {
            this.popularPodcastList = result.data;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
        this.apiService.getData(`web/totalSubscriber/${id}`).subscribe((result) => {
            this.totalSubscribers = result.data.totalSubscriber;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get last episodes  //
    getLastEpisodes(podcastData) {
        this.podcastChapters = [];
        for (let data of podcastData) {
            for (let chapters of data.episodes) {
                if (chapters.episodeDescription.length >= 50) {
                    chapters.showReadMoreButton = true;
                }
                else {
                    chapters.showReadMoreButton = false;
                }
                this.podcastChapters.push(chapters);
            }
        }
        this.lastEpisodes = [...this.podcastChapters];
        this.lastEpisodes.sort(function compare(a, b) {
            var dateA = new Date(a.uploadDate);
            var dateB = new Date(b.uploadDate);
            return dateB - dateA;
        });
    }
    //  chapter time format  //
    chapterTimeFormat(d) {
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
    showChapterText() {
        this.isChapterReadMore = !this.isChapterReadMore;
    }
    //  similar Book Detail  //
    similarBookDetail(id) {
        this.router.navigate(['podcast-detail/'], { queryParams: { 'id': id, 'type': this.tabType } });
    }
    //  get rating html //
    getRating(data) {
        let beforePointValue = data.toString().split(".")[0];
        let afterPointValue = data.toString().split(".")[1];
        var temp = [0, 1, 2, 3, 4];
        let html = '';
        for (let i = 0; i < temp.length; i++) {
            if (beforePointValue <= i) {
                if (afterPointValue && afterPointValue != 0) {
                    html += `<li ><img src="/assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`;
                    afterPointValue = undefined;
                }
                else {
                    html += `<li ><img src="/assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`;
                }
            }
            else {
                html += `<li ><img src="/assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`;
            }
        }
        return html;
    }
    //  podcast favourite / unfavourite  //
    favouriteBook(id, isFavourite) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if (localStorage.getItem('authorization') !== null) {
                let favourite = (isFavourite == true) ? false : true;
                this.isFavourite = favourite;
                let type = this.tabType;
                this.apiService.putData(`web/favourite/${id}?isFavourite=${favourite}&type=${type}`, '')
                    .subscribe((result) => {
                    this.apiService.passValue(result.data.favouriteCount);
                    this.toastr.success(result.responseMessage, 'Success!');
                }, (error) => {
                    this.toastr.error(error.error.responseMessage, 'Error!');
                });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    //  subscribe Podcast  //
    subscribePodcast(id, podcastSubscribed) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if (localStorage.getItem('authorization') !== null) {
                let subscribe = (podcastSubscribed == true) ? false : true;
                this.isSubscribed = subscribe;
                let type = this.tabType;
                this.apiService.putData(`webPodcast/addSubscription/${id}?isSubscribed=${this.isSubscribed}&bookType=${type}`, '')
                    .subscribe((result) => {
                    this.totalSubscribers = result.data.followers;
                    this.toastr.success(result.responseMessage, 'Success!');
                }, (error) => {
                    this.toastr.error(error.error.responseMessage, 'Error!');
                });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    //  not Subscribed Error  //
    notSubscribedError() {
        this.toastr.error('Subscribe to listen to the podcast.', 'Error!');
    }
    //  all podcast Episodes  // 
    allEpisodes(id) {
        this.router.navigate(['podcast-episodes/'], { queryParams: { 'id': id, 'type': this.tabType } });
    }
    //  open rating modal  //
    openSm(content) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if (localStorage.getItem('authorization') !== null) {
                this.modalService.open(content, { size: 'sm' });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    //  add podcast rating  //
    addBookRating(bookRating, podcastDetail, modal) {
        if (this.updateid) {
            this.apiService.putData(`webPodcast/addRating/${this.updateid}?bookType=${this.tabType}&rating=${bookRating}`, '').subscribe((result) => {
                this.averageRating = result?.data?.rating;
                this.toastr.success('Rating added.', 'Success!');
            }, (error) => {
                this.toastr.error(error.error.responseMessage, 'Error!');
            });
        }
        modal.close('Save click');
    }
    //  open player model  // podcastByChapters
    openModal(content, url, type, urlType, chapterName, episodeDetails) {
        this.podcastDetail.modalStatus = 'open';
        this.podcastDetail.bookType = this.tabType;
        this.podcastDetail.podcastByChapters = this.podcastChapters;
        this.podcastDetail.isFavourite = this.isFavourite;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if ((((localStorage.getItem('authorization') == null) || (localStorage.getItem('authorization') != null)) && ((urlType == 'audioPresentation') || (episodeDetails.season == 1 && episodeDetails.episode == 1)))) {
                this.cusModalService.open(this.podcastDetail, chapterName, urlType);
            }
            else if ((localStorage.getItem('authorization') != null) && ((episodeDetails.season != 1) || (episodeDetails.episode != 1)) && !this.isSubscribed) {
                this.toastr.error('Subscribe podcast to listen the latest episodes.', 'Error!');
            }
            else if ((localStorage.getItem('authorization') != null) && ((episodeDetails.season != 1) || (episodeDetails.episode != 1)) && this.isSubscribed) {
                this.cusModalService.open(this.podcastDetail, chapterName, urlType);
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    //  select podcast chapter  //
    ChangeSortOrder(newSortOrder, content, url, type, urlType) {
        this.selectedSortOrder = newSortOrder;
        let autoPlayArr = [];
        for (let i = 0; i < url.length; i++) {
            autoPlayArr.push(url[i].episodeUrl);
            this.autoPlayNextSong(autoPlayArr);
            if (url[i].episodeName == newSortOrder) {
                let value = url[i].episodeUrl;
                this.openModal(content, value, type, urlType, newSortOrder, url[i]);
            }
        }
    }
    //  play Latest Episode  //
    playLatestEpisode(newSortOrder, content, url, type, urlType) {
        this.selectedSortOrder = newSortOrder;
        for (let i = 0; i < url.length; i++) {
            if (url[i].episodeName == newSortOrder) {
                let value = url[i].episodeUrl;
                this.openModal(content, value, type, urlType, newSortOrder, url[i]);
            }
        }
    }
    //  view podcast by category ID  //
    viewPodcastByCategoryId(type, categoryId) {
        this.router.navigate(['/all-podcasts/'], { queryParams: { 'type': type, 'id': categoryId } });
    }
    getClass(index) {
        if (index == 0) {
            return 'alteleButton';
        }
        if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'alteleButton') {
            return 'LiteraturaButton';
        }
        else if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'LiteraturaButton') {
            return 'ThrillerButton';
        }
        else if (this.modifiedCategory[this.modifiedCategory.length - 1].className == 'ThrillerButton') {
            return 'alteleButton';
        }
        return '';
    }
    //  autoplayer for chapters  //
    autoPlayNextSong(songs) {
        var song = document.getElementById('myAudio');
        var currentSong = 0;
        var len = songs.length;
        function playSong(baseUrl, index) {
            song.src = baseUrl + songs[index];
            song.play();
        }
        if (song != null) {
            song.addEventListener("ended", () => {
                currentSong++;
                if (currentSong == len) {
                    currentSong = 0;
                    playSong(this.IMAGE_URL, currentSong);
                }
                else {
                    playSong(this.IMAGE_URL, currentSong);
                }
            });
        }
    }
}
PodcastDetailComponent.ɵfac = function PodcastDetailComponent_Factory(t) { return new (t || PodcastDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID)); };
PodcastDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PodcastDetailComponent, selectors: [["app-podcast-detail"]], decls: 81, vars: 6, consts: [[1, "contentPart"], [1, "warpper"], ["class", "wrapperView", 4, "ngIf"], ["class", "wrapperShimmer", 4, "ngIf"], [1, "background", "bookCollection"], [1, "container", "titleText"], [1, "mb-5"], [1, "productWrapper"], [1, "productline"], [1, "row"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "offerSection", "homeOffer"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-7"], [1, "offerText"], [1, "buttonRow"], [1, "buttonlogoDetailsSecond"], [1, "col-md-5"], [1, "mobileImage"], ["src", "/assets/images/mobileImgdetailPage.svg", "alt", "mobiel View"], [1, "workSection"], [1, "workSectionInner"], [1, "col-12", "text-center"], [1, "headingTitle"], [1, "col-md-4", "text-center"], [1, "blockWrap"], ["src", "/assets/images/appIcon.svg"], [1, "blockWrap", "icons"], [1, "leftArrow"], ["src", "/assets/images/arrowRight.svg", "alt", ""], ["src", "/assets/images/setupIcon.svg"], [1, "rightArrow"], ["src", "/assets/images/enjoyIcon.svg"], ["contentOne", ""], [1, "wrapperView"], [1, "background", "productDetail"], [1, "col-md-4"], [1, "stemperImg"], [1, "openBookTop", "yellow"], ["src", "/assets/images/mic.svg", "alt", "Mic icon"], ["alt", "stemperbook", 1, "mainBookImgDetail", 3, "src"], [1, "addRating"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], [1, "col-md-8"], [1, "headerStemper"], [1, "timeIng"], [1, "rating"], [1, "ratingWrap", 3, "innerHtml"], [1, "rateText"], [1, "authMain"], [1, "col-lg-5", "col-md-6", "col-sm-6"], [3, "ngClass"], [1, "text-capitalize"], ["class", "readButton", "type", "button", 3, "click", 4, "ngIf"], [1, "buttonRow", "align-items-center"], [1, "logodetail"], ["alt", "heat", 3, "src", "ngClass", "click"], [1, "shareWrap"], [1, "logodetail", "shareBtn"], ["src", "/assets/images/share.svg", "alt", "share", 3, "click"], ["class", "share-buttons", "theme", "circles-dark", "url", "currentUrl", 3, "include", "showIcon", "showText", 4, "ngIf"], ["alt", "Bell icon", 3, "src", "click"], [4, "ngIf"], ["type", "button", 1, "buttonlogoDetails", 3, "click"], [1, "genre"], [1, "GroupButtoms"], [4, "ngFor", "ngForOf"], [1, "last-episodes"], [1, "last-episodes__wrapper"], [1, "latest-episode_logo"], ["src", "/assets/images/logo_podcast.png", "alt", ""], ["type", "button", 1, "readButton", 3, "click"], ["theme", "circles-dark", "url", "currentUrl", 1, "share-buttons", 3, "include", "showIcon", "showText"], [1, "buttonlogoDetails", 3, "click"], [3, "ngClass", "click"], [1, "last-episodes__img", 3, "click"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "hover"], ["src", "/assets/images/play.png", "alt", ""], [1, "last-episodes__content"], [1, "last-episodes__time", "m-0"], [1, "wrapperShimmer"], [1, "stemperImg", "shimmer"], [1, "shimmer", "height-50"], [1, "rating", "ratingShimmer"], [1, "ratingWrap", "shimmer", "height-50"], [1, "rateText", "shimmer", "height-50"], [1, "height-120", "shimmer"], [1, ""], [1, "shimmer", "width-200", "height-50"], [1, "GroupButtoms", "d-flex", "flex-wrap"], [1, "shimmer", "width-200", "height-50", "mr-2"], [1, "last-episodes", "bgtransparent"], [1, "shimmer", "height-120"], [1, "col", "mb-4"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [1, "bookBtn", "yellow"], ["src", "/assets/images/mic.svg"], [1, "productImage"], ["alt", "stemperbook", 3, "src"], [1, "productTxt"], [1, "startModal"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "ratingTitle"], [1, "starRate"], [3, "max", "rate", "rateChange"], [1, "modal-footer", "ratingSaveBtn"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function PodcastDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PodcastDetailComponent_div_3_Template, 81, 27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PodcastDetailComponent_div_4_Template, 41, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Similar Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PodcastDetailComponent_div_12_Template, 17, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5)(16, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Most Popular Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "div", 8)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PodcastDetailComponent_div_21_Template, 17, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Atkl\u0101j Audiolas\u012Btavu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Lasi, klausies un baudi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Kad vingrojat, gatavojat \u0113st, darbojaties d\u0101rz\u0101, remont\u0113jat dz\u012Bvokli, s\u0113\u017Eat automa\u0161\u012Bnas s\u0113dekl\u012B vai vienk\u0101r\u0161i atp\u016B\u0161aties: audiogr\u0101matas vienm\u0113r ir jums l\u012Bdz\u0101s. Izv\u0113lieties, kura b\u016Bs n\u0101kam\u0101 audiogr\u0101mata, ko klaus\u012Bsieties, vai sekojiet m\u016Bsu ieteikumam! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 16)(36, "button", 17)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Pieraksties m\u016Bsu jaunumiem");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18)(40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 21)(43, "div", 22)(44, "div", 12)(45, "div", 9)(46, "div", 23)(47, "div", 24)(48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "K\u0101 darbojas Audiolas\u012Btava?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Izbaudiet audiogr\u0101matu klaus\u012B\u0161an\u0101s pieredzi jebkur\u0101 laik\u0101 sav\u0101 mobilaj\u0101 t\u0101lrun\u012B, dator\u0101 vai automa\u0161\u012Bn\u0101 - vienk\u0101r\u0161i un \u0113rti!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 9)(53, "div", 25)(54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "1. Instal\u0113 m\u016Bsu lietotni");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u0112rti lejupiel\u0101d\u0113jiet m\u016Bsu Android vai iOS mobilo lietotni, lai vienm\u0113r var\u0113tu piek\u013C\u016Bt visam saturam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 25)(61, "div", 28)(62, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "2. Izveido savu kontu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Re\u0123istr\u0113jieties, lai var\u0113tu baud\u012Bt visu m\u016Bsu platform\u0101 pieejamo audiogr\u0101matu kl\u0101stu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 25)(72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "3. Izv\u0113lies savas iecien\u012Bt\u0101k\u0101s audiogr\u0101matas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Klausieties savas iecien\u012Bt\u0101k\u0101s audiogr\u0101matas no mobil\u0101 t\u0101lru\u0146a, datora vai jebkuras ier\u012Bces, kas savienota ar Bluetooth. \u0112rti un vienk\u0101r\u0161i!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, PodcastDetailComponent_ng_template_78_Template, 14, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showShimmer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showShimmer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.similarPodcasts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.popularPodcastList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbRating, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_11__.ShareButtons, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   button.openBookTop[_ngcontent-%COMP%] {\n  background: #3080FF;\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  position: absolute;\n  top: -30px;\n  right: 0px;\n  cursor: default;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   button.openBookTop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   button.openBookTop.yellow[_ngcontent-%COMP%] {\n  background: #03B0AE;\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n  border: 1px solid #03B0AE;\n  position: absolute;\n  top: -30px;\n  right: 0px;\n  cursor: default;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   button.openBookTop.yellow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .stemperImg[_ngcontent-%COMP%]   .mainBookImgDetail[_ngcontent-%COMP%] {\n  height: 490px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 52px;\n  line-height: 46px;\n  color: #333333;\n  border-bottom: 2px solid #000;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding-left: 8px;\n  border-left: 2px solid #333;\n  margin-left: 8px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .starImg[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .starImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rateText[_ngcontent-%COMP%] {\n  padding: 0 6px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .authMain[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .ParagraphPart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .ParagraphPart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 28px;\n  letter-spacing: 0.03em;\n  color: #000000;\n  margin-bottom: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .readButton[_ngcontent-%COMP%] {\n  cursor: default;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 16px;\n  color: #A4353B;\n  text-decoration: none;\n  margin-top: 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .readButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .limitTextHeight[_ngcontent-%COMP%] {\n  height: 22px;\n  overflow: hidden;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #000;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.logodetail[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 0px;\n  padding: 0px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n  background: #A4353B;\n  height: 56px;\n  width: 227px;\n  border-radius: 100px;\n  border: 1px;\n  border-color: #A4353B;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 16px;\n  color: #FFFFFF;\n  margin-right: 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n  background: #247AFD;\n  height: 56px;\n  width: auto;\n  border-radius: 100px;\n  border: 1px solid #247AFD;\n  color: #fff;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 24px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 20px;\n  color: #000000;\n  margin-bottom: 15px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   .alteleButton[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  background: #18311E;\n  border: 1px solid #516856;\n  padding: 12px 32px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  color: #C4E5C6;\n  margin-bottom: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   .LiteraturaButton[_ngcontent-%COMP%] {\n  background: #192C32;\n  border: 1px solid #3B5C63;\n  border-radius: 100px;\n  padding: 12px 32px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  color: #7ED7E7;\n  text-align: center;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   .ThrillerButton[_ngcontent-%COMP%] {\n  background: #311718;\n  border: 1px solid #65444B;\n  border-radius: 100px;\n  color: #E6ADBC;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  padding: 12px 32px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .addRating[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 58px;\n  color: #000000;\n  margin-bottom: 50px;\n}\n.contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .bookCollectionImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   button.bookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   button.bookBtn.yellow[_ngcontent-%COMP%] {\n  background: #03B0AE;\n  border: 1px solid #03B0AE;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-position: top;\n  object-fit: cover;\n  width: 100%;\n  min-height: 264px;\n  max-height: 264px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 20px 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 20px;\n  color: #000000;\n  opacity: 0.75;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 40px 15px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(233, 233, 233, 0.4705882353);\n  padding-bottom: 2px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(233, 233, 233, 0.4705882353);\n  padding-bottom: 2px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 30px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 7px;\n  margin: 15px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  border-bottom: 1px solid rgba(233, 233, 233, 0.4705882353);\n  color: #fff;\n  width: calc(100% - 136px);\n  border-top: 1px solid rgba(233, 233, 233, 0.4705882353);\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-bottom: 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%]   .last-episodes__read[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%]   .last-episodes__time[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__img[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  transition: all 0.3s;\n  cursor: pointer;\n  background: rgba(14, 14, 14, 0.5098039216);\n  border-radius: 6px;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__img[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .last-episodes__img[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .latest-episode_logo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .latest-episode_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-top: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   button.logodetail.shareBtn[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   .share-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  background: #fff;\n  transition: 0.5s all ease-in-out;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   .share-buttons[_ngcontent-%COMP%]     .sb-circles-dark.sb-group {\n  display: flex !important;\n  justify-content: center;\n  padding: 3px 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   .share-buttons[_ngcontent-%COMP%]     .sb-circles-dark.sb-group   button {\n  min-width: 25px;\n  min-height: 25px;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   .share-buttons[_ngcontent-%COMP%]     .sb-circles-dark.sb-group   button   .sb-icon {\n  width: 30px !important;\n  height: 30px !important;\n  min-width: 30px !important;\n  min-height: 30px !important;\n  margin: 0 0px !important;\n}\n.contentPart[_ngcontent-%COMP%]   .shareWrap[_ngcontent-%COMP%]   .share-buttons[_ngcontent-%COMP%]     .sb-circles-dark.sb-group   button   .sb-icon   fa-icon.ng-fa-icon {\n  font-size: 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 420px;\n  background: #A4353B;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px !important;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  background: #fff;\n  padding: 10px 25px;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 16px;\n  color: #A4353B;\n  height: 55px;\n  margin-right: 15px;\n  width: 230px;\n  border-radius: 100px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  background: transparent;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 100px;\n  height: 55px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n  position: relative;\n  top: -75px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.headerStemper[_ngcontent-%COMP%]   button#sortMenu[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #A4353B;\n  height: 56px;\n  width: 227px;\n  border-radius: 100px;\n  border: 1px;\n  border-color: #A4353B;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 16px;\n  color: #FFFFFF;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n  color: var(--bs-dropdown-link-hover-color);\n  background-color: #A4353B;\n}\n.limitTextHeight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #000;\n  width: 100%;\n  overflow: hidden;\n}\n.spisodeDescriptionHeight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #fff;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.ratingTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.startModal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.startModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.starRate[_ngcontent-%COMP%] {\n  margin: 10px 0 20px;\n}\n.starRate[_ngcontent-%COMP%]     span {\n  font-size: 50px;\n  color: #e69b00;\n  line-height: 40px;\n}\n.addRating[_ngcontent-%COMP%]   button.btn.btn-lg.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: #fbcd43;\n  color: #000;\n  border-color: #fbcd43;\n  border-radius: 100px;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.ratingSaveBtn[_ngcontent-%COMP%]   button.btn.btn-outline-dark[_ngcontent-%COMP%] {\n  background: #A4353B;\n  border-color: #A4353B;\n  color: #fff;\n  width: 90px;\n  border-radius: 100px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n}\nbutton.btn-close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 14px;\n}\n.favourite[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.notFavourite[_ngcontent-%COMP%] {\n  background-color: white;\n}\nul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\nul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\n.modal-footer.ratingSaveBtn[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.last-episodes__img[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.shimmer[_ngcontent-%COMP%], .shimmerLight[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.shimmerLight[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  background-image: linear-gradient(to right, #e6e6e6 0%, #e5e5e6 20%, #e6e4e4 40%, #d9dcdd 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n.shimmer[_ngcontent-%COMP%], .btn.btn-primary.downloadtBtn.shimmer[_ngcontent-%COMP%] {\n  background: #cdd0d3;\n  background-image: linear-gradient(to right, #c8cbcd 0%, #c7c8cb 20%, #bbbdbf 40%, #9b9d9f 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -900px 0;\n  }\n  100% {\n    background-position: 900px 0;\n  }\n}\n.titleShimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: 15px 0;\n}\nbutton.titleShimmer.shimmer[_ngcontent-%COMP%] {\n  border: none;\n  margin: 15px 0;\n}\nh2.shimmer.titleShimmer[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\nlabel.genre.titleShimmer.shimmer[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 130px;\n}\n.readButton.titleShimmer.shimmer[_ngcontent-%COMP%] {\n  width: 58.33333333%;\n}\n.background.productDetail.shimmerWrapper[_ngcontent-%COMP%] {\n  padding: 70px 0;\n}\n.height-50[_ngcontent-%COMP%] {\n  height: 50px !important;\n  margin-bottom: 15px;\n  border-bottom: none !important;\n}\n.rating.ratingShimmer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.rating.ratingShimmer[_ngcontent-%COMP%]   ul.ratingWrap.shimmer.height-50[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.height-120[_ngcontent-%COMP%] {\n  height: 120px !important;\n}\n.width-200[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n.GroupButtoms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.GroupButtoms[_ngcontent-%COMP%]   li.shimmer.width-200.height-50[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.last-episodes.bgtransparent[_ngcontent-%COMP%] {\n  background: #f6f6f6 !important;\n  margin-top: 30px;\n}\n.stemperImg.shimmer[_ngcontent-%COMP%] {\n  height: 500px !important;\n}\n\n\n@media only screen and (max-width: 1440px) {\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0 10px 10px 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .addRating[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 42px;\n    margin-bottom: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 340px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -58px;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 278px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    position: relative;\n    top: -45px;\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 34px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -50px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0px 10px 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n    height: 42px;\n    width: 200px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n    height: 42px;\n    width: 245px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .addRating[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 215px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    top: -25px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 15px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    width: 180px;\n    height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n    height: 40px;\n    margin-right: 5px;\n    width: 190px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    height: 40px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -35px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%] {\n    margin: 50px 0 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 34px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .addRating[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 34px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    line-height: 32px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding-top: 20px;\n    margin-top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    line-height: 28px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .contentPart[_ngcontent-%COMP%]   .last-episodes[_ngcontent-%COMP%]   .last-episodes__wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .last-episodes__content[_ngcontent-%COMP%] {\n    width: calc(100% - 120px);\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .timeIng[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .ParagraphPart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n    height: 42px;\n    width: 100%;\n    margin-right: 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .headerStemper[_ngcontent-%COMP%]   .GroupButtoms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0 10px 10px 0px;\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.productDetail[_ngcontent-%COMP%]   .addRating[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsInBvZGNhc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZKQUFBO0FBR1I7RUFDSSxZQ3VHUztFRHRHVCxXQ3NCUztBQ3ZCYjtBRklBO0VBQ0ksWUNrR1M7RURqR1QsV0NpQlM7QUNsQmI7QUZJQTtFQUNJLFlDNkZTO0VENUZULFdDWVM7QUNiYjtBRklBO0VBQ0ksWUN3RlM7RUR2RlQsV0NPUztBQ1JiO0FGSUE7RUFDSSxvQkNzQ2M7QUN2Q2xCO0FGSUE7OztFQUdJLGdDQUFBO0FFREo7QUZJQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUVESjtBRk1JO0VBRUksNEJDWGE7RURZYixrQ0FBQTtFQUNBLHNCQytGUztFRDlGVCxhQ2lDTTtFRGhDTix5QkFBQTtFQUNBLGNBQUE7QUVKUjtBRk1RO0VBQ0ksa0JBQUE7QUVKWjtBRk9ZO0VBQ0ksZ0JDY0E7RURiQSxlQzlDUDtFRCtDTyxpQkN2Q0M7RUR3Q0QsdUJBQUE7RUFDQSx5QkNvRkE7RURuRkEsV0NoQ0g7QUMyQmI7QUZRWTtFQUNJLGdCQ01BO0VETEEsZUNyRFA7RURzRE8saUJDM0NDO0VENENELDBCQzZFQztFRDVFRCxXQ3hDSDtBQ2tDYjtBRlNZO0VBQ0ksZ0JDSkE7RURLQSxlQ2hFUDtFRGlFTyxpQkNyREM7RURzREQsdUJBQUE7RUFDQSwwQkNvRUM7RURuRUQsV0NqREg7QUMwQ2I7QUZVWTtFQUNJLGdCQ1hBO0VEWUEsZUM1RVA7RUQ2RU8saUJDakVDO0VEa0VELGtCQ29DSDtFRG5DRyx1QkFBQTtFQUNBLFdDM0RIO0VENERHLHNCQUFBO0VBQ0Esb0JDNkJFO0VENUJGLGdCQzdESDtFRDhERyxrQkFBQTtFQUNBLGtCQUFBO0FFUmhCO0FGU2dCO0VBQ0ksNkJDOURJO0VEK0RKLFdDbEVQO0FDMkRiO0FGV1k7RUFDSSxnQkM3QkE7RUQ4QkEsZUM5RlA7RUQrRk8saUJDbkZDO0VEb0ZELGtCQ2tCSDtFRGpCRyx1QkFBQTtFQUNBLFdDNUVIO0VENkVHLHNCQUFBO0VBQ0Esb0JDV0U7RURWRix1QkM1RVE7RUQ2RVIsa0JBQUE7QUVUaEI7QUZVZ0I7RUFDSSxXQ25GUDtFRG9GTyxzQkFBQTtFQUNBLG9CQ0tGO0VESkUsZ0JDckZQO0FDNkViO0FGYVE7RUFDSSxrQkNLTztFREpQLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FFWFo7QUZhWTtFQUNJLGVDckNGO0VEc0NFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFWGhCO0FGc0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVuQko7QUZvQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUVsQlI7QUZtQlE7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FFakJaO0FGb0JZO0VBQ0ksYUFBQTtBRWxCaEI7QUZxQlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUVuQlo7QUZxQlE7RUFDSSxXQUFBO0FFbkJaO0FGMkJJO0VBQ0ksdUJBQUE7QUV4QlI7QUYwQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FFeEJaO0FGMEJZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUV6QmhCO0FGNEJZO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBRTNCaEI7QUYrQlE7RUFDSSxlQUFBO0FFN0JaO0FGK0JZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FFOUJoQjtBRmlDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FFaENoQjtBRm9DUTtFQUNJLGtCQUFBO0FFbENaO0FGb0NZO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FFbENoQjtBRnFDWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtBRW5DaEI7QUY4Q0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUUzQ0o7QUY2Q0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FFM0NSO0FGK0NRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRTdDWjtBRmdEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGNBQUE7QUUvQ1o7QUZrRFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtBRWpEWjtBRm9EUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUVsRFo7QUZvRFk7RUFDSSx1Q0FBQTtBRWxEaEI7QUZ3RFE7RUFDSSxXQUFBO0FFdERaO0FGNERJO0VBQ0ksWUFBQTtBRXpEUjtBRjhEQTtFQUNJLG9CQUFBO0FFM0RKO0FGNkRBO0VBQ0ksZ0JBQUE7QUUxREo7QUY0REEsZ0RBQUE7QUFFSTtFQUNJLFdBQUE7QUUxRFI7QUY4REk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FFM0RSO0FGNkRJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUUzRFI7QUY2REk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUUzRFI7QUZpRUEsOENBQUE7QUFHQSxzQkFBQTtBQUNBO0VBQ0k7SUFDSSxtQkFBQTtFRWhFTjtFRmtFRTtJQUNJLG1CQUFBO0VFaEVOO0FBQ0Y7QUZtRUE7RUFFSTs7Ozs7O0lBTUksaUJBQUE7RUVsRU47QUFDRjtBRnFFQTtFQUVRO0lBQ0ksYUFBQTtFRXBFVjtBQUNGO0FGd0VBO0VBR1k7SUFDSSxhQUFBO0lBQ0EsU0FBQTtFRXhFZDtFRjRFYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUUxRWxCO0VGNkVjO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VFM0VsQjtFRm1GYztJQUNJLFlBQUE7RUVqRmxCO0VGa0ZrQjtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUVoRnRCO0VGbUZjO0lBQ0ksa0NBQUE7RUVqRmxCO0VGbUZrQjtJQUNJLGFBQUE7RUVqRnRCO0VGbUZzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRWpGMUI7QUFDRjtBRnlGQTtFQUdZO0lBQ0ksYUFBQTtFRXpGZDtFRjJGYztJQUNJLGVBQUE7RUV6RmxCO0VGNEZjO0lBQ0ksa0NBQUE7RUUxRmxCO0VGNEZrQjtJQUNJLGFBQUE7RUUxRnRCO0VGMkZzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRXpGMUI7RUY0RnNCO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUUxRjFCO0VGK0ZjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFN0ZsQjtFRmdHYztJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VFOUZsQjtFRmlHa0I7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VFL0Z0QjtFRnNHVTtJQUNJLGFBQUE7RUVwR2Q7RUZ3R2M7SUFDSSxlQUFBO0VFdEdsQjtFRnlHYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUV2R2xCO0FBQ0Y7QUY2R0E7RUFDSTtJQUNJLG1CQUFBO0VFM0dOO0VGK0dVO0lBQ0ksZUFBQTtFRTdHZDtFRmdIa0I7SUFDSSxxQkFBQTtFRTlHdEI7RUZrSGM7SUFDSSxlQUFBO0VFaEhsQjtFRnVIVTtJQUNJLGFBQUE7RUVySGQ7RUZ5SGtCO0lBQ0ksYUFBQTtFRXZIdEI7RUZ5SHNCO0lBQ0ksZUFBQTtFRXZIMUI7RUYwSHNCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFeEgxQjtFRjJIc0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFRXpIMUI7RUY0SHNCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFMUgxQjtFRjhIa0I7SUFDSSxZQUFBO0VFNUh0QjtFRjZIc0I7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VFM0gxQjtFRm1JVTtJQUNJLGFBQUE7SUFDQSxTQUFBO0VFaklkO0VGcUljO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFRW5JbEI7RUZzSWM7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUVwSWxCO0VGdUljO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VFcklsQjtFRjJJVTtJQUNJLGNBQUE7RUV6SWQ7RUZnSmtCO0lBQ0ksd0JBQUE7RUU5SXRCO0VGZ0pzQjtJQUNJLDBCQUFBO0lBQ0EsNkJBQUE7RUU5STFCO0VGaUpzQjtJQUNJLDBCQUFBO0lBQ0EsNkJBQUE7RUUvSTFCO0FBQ0Y7QUZ3SkE7RUFJZ0I7SUFDSSx1QkFBQTtFRXpKbEI7RUYySmtCO0lBQ0ksY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFRXpKdEI7QUFDRjtBRmdLQTtFQUlnQjtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFRWpLbEI7RUZtS2tCOztJQUVJLGlCQUFBO0lBQ0EsT0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUVqS3RCO0VGd0tVO0lBQ0ksWUFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFRXRLZDtFRnlLa0I7SUFDSSwrQkFBQTtFRXZLdEI7RUZ5S3NCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFdksxQjtFRjJLa0I7SUFDSSxXQUFBO0lBQ0EsdUJBQUE7RUV6S3RCO0VGMEtzQjtJQUNJLGlCQUFBO0VFeEsxQjtFRitLTTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFRTdLVjtFRitLVTtJQUNJLGFBQUE7RUU3S2Q7RUZnTFU7SUFDSSxnQkFBQTtFRTlLZDtBQUNGO0FGbUxBO0VBRVE7SUFDSSxlQUFBO0VFbExWO0VGcUxjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFbkxsQjtFRjhMc0I7SUFDSSxzQkFBQTtFRTVMMUI7RUY4TDBCO0lBQ0ksY0FBQTtFRTVMOUI7RUZ1TWtCO0lBQ0ksV0FBQTtFRXJNdEI7RUYyTU07SUFDSSxTQUFBO0VFek1WO0VGNE1jO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VFMU1sQjtBQUNGO0FBdmpCSTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXlqQlI7QUF2akJRO0VBQ0ksa0JBQUE7QUF5akJaO0FBdmpCWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLGVBQUE7QUF3akJoQjtBQXRqQmdCO0VBQ0ksV0FBQTtBQXdqQnBCO0FBcGpCWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLGVBQUE7QUFxakJoQjtBQW5qQmdCO0VBQ0ksV0FBQTtBQXFqQnBCO0FBampCWTtFQUNJLFdBQUE7QUFtakJoQjtBQWhqQlk7RUFFSSxhQUFBO0FBaWpCaEI7QUE1aUJZO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBOGlCaEI7QUExaUJZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE0aUJoQjtBQTFpQmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUE0aUJwQjtBQTFpQm9CO0VBQ0ksZ0JBQUE7QUE0aUJ4QjtBQTFpQndCO0VBQ0ksbUJBQUE7QUE0aUI1QjtBQXhpQm9CO0VBQ0ksY0FBQTtBQTBpQnhCO0FBcmlCWTtFQUVJLGFBQUE7QUFzaUJoQjtBQW5pQlk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFxaUJoQjtBQW5pQmdCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFxaUJwQjtBQWppQlk7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFtaUJoQjtBQWppQmdCO0VBQ0ksZUFBQTtBQW1pQnBCO0FBL2hCWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWlpQmhCO0FBOWhCWTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQWdpQmhCO0FBOWhCZ0I7RUFDSSxrQkFBQTtBQWdpQnBCO0FBOWhCb0I7RUFDSSxpQkFBQTtBQWdpQnhCO0FBNWhCZ0I7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOGhCcEI7QUExaEJnQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBNGhCcEI7QUExaEJvQjtFQUNJLGtCQUFBO0FBNGhCeEI7QUF4aEJnQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQTBoQnBCO0FBeGhCb0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTBoQnhCO0FBcmhCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdWhCaEI7QUFuaEJnQjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXFoQnBCO0FBbGhCZ0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBb2hCcEI7QUFqaEJnQjtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFtaEJwQjtBQS9nQmdCO0VBQ0ksa0JBQUE7QUFpaEJwQjtBQS9nQm9CO0VBQ0ksaUJBQUE7QUFpaEJ4QjtBQTNnQlE7RUFDSSxnQkFBQTtBQTZnQlo7QUF6Z0JJO0VBQ0ksaUJBQUE7QUEyZ0JSO0FBeGdCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMGdCaEI7QUFyZ0JZO0VBQ0ksV0FBQTtBQXVnQmhCO0FBamdCSTtFQUNJLG1CQUFBO0FBbWdCUjtBQWpnQlE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQW1nQlo7QUFqZ0JZO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLFdBQUE7QUFpZ0JoQjtBQS9mZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBaWdCcEI7QUE5ZmdCO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQWdnQnBCO0FBN2ZnQjtFQVdJLGVBQUE7QUFxZnBCO0FBOWZ3QjtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWdnQjVCO0FBemZnQjtFQUNJLHVCQUFBO0FBMmZwQjtBQXpmb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQTJmeEI7QUF4Zm9CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQTBmeEI7QUF2Zm9CO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeWZ4QjtBQXZmd0I7RUFDSSxpQkFBQTtBQXlmNUI7QUFqZkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBbWZSO0FBamZRO0VBQ0ksMERBQUE7RUFDQSxtQkFBQTtBQW1mWjtBQWpmWTtFQUNJLFdBQUE7RUFDQSwwREFBQTtFQUNBLG1CQUFBO0FBbWZoQjtBQWhmWTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWtmaEI7QUFoZmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBa2ZwQjtBQTllZ0I7RUFDSSxpQkFBQTtFQUNBLDBEQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdURBQUE7QUFnZnBCO0FBOWVvQjtFQUNJLGVBQUE7QUFnZnhCO0FBN2VvQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQStleEI7QUE1ZW9CO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBOGV4QjtBQTNlb0I7RUFDSSxlQUFBO0FBNmV4QjtBQTFlb0I7RUFDSSxlQUFBO0FBNGV4QjtBQXhlZ0I7RUFDSSxrQkFBQTtBQTBlcEI7QUF4ZW9CO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUEwZXhCO0FBdGVvQjtFQUVJLFVBQUE7QUF1ZXhCO0FBcmV3QjtFQUNJLHFCQUFBO0FBdWU1QjtBQWhlUTtFQUNJLGlCQUFBO0FBa2VaO0FBaGVZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBa2VoQjtBQTdkSTtFQUNJLGtCQUFBO0FBK2RSO0FBN2RRO0VBQ0ksNkJBQUE7QUErZFo7QUE1ZFE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBOGRaO0FBNWRZO0VBQ0ksd0JBQUE7RUFFQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBNmRoQjtBQTNkZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUE2ZHBCO0FBM2RvQjtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUE2ZHhCO0FBM2R3QjtFQUNJLGVBQUE7QUE2ZDVCO0FBcGRJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQXNkUjtBQXBkUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFzZFo7QUFuZFE7RUFDSSxrQkFBQTtBQXFkWjtBQW5kWTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBcWRoQjtBQWxkWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFvZGhCO0FBamRZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFtZGhCO0FBaGRZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQWtkaEI7QUFoZGdCO0VBQ0ksdUNBQUE7QUFrZHBCO0FBN2NnQjtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQStjcEI7QUE3Y29CO0VBQ0ksa0JBQUE7QUErY3hCO0FBM2NnQjtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUE2Y3BCO0FBM2NvQjtFQUNJLGFBQUE7QUE2Y3hCO0FBdGNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBd2NaO0FBdGNZO0VBQ0ksV0FBQTtBQXdjaEI7QUFqY0E7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW1jSjtBQWhjQTs7RUFFSSwwQ0FBQTtFQUNBLHlCQUFBO0FBbWNKO0FBaGNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUFrY0o7QUEvYkE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaWNKO0FBOWJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFpY0o7QUE3Ykk7RUFDSSxpQkFBQTtBQWdjUjtBQTdiSTtFQUNJLGNBQUE7QUErYlI7QUEzYkE7RUFDSSxtQkFBQTtBQThiSjtBQTViSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUE4YlI7QUF6Ykk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTRiUjtBQXZiSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBMGJSO0FBdGJBO0VBQ0ksV0FBQTtBQXliSjtBQXRiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBeWJKO0FBdGJBO0VBQ0ksa0JBQUE7QUF5Yko7QUF0YkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUF5Yko7QUF0YkE7RUFDSSxXQUFBO0FBeWJKO0FBdGJBO0VBQ0ksdUJBQUE7QUF5Yko7QUF0YkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF5Yko7QUF2Ykk7RUFDSSw0QkFBQTtBQXliUjtBQXJiQTtFQUNJLHVCQUFBO0FBd2JKO0FBcmJBO0VBQ0ksZ0JBQUE7QUF3Yko7QUFyYkEsc0JBQUE7QUFDQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQXdiSjtBQXJiQTtFQUNJLG1CQUFBO0VBQ0EsK0ZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0FBdWJKO0FBcGJBOztFQUVJLG1CQUFBO0VBQ0EsK0ZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0FBc2JKO0FBbmJBO0VBQ0k7SUFDSSw2QkFBQTtFQXNiTjtFQW5iRTtJQUNJLDRCQUFBO0VBcWJOO0FBQ0Y7QUFsYkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQW9iSjtBQWpiQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBb2JKO0FBamJBO0VBQ0ksY0FBQTtBQW9iSjtBQWpiQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQW9iSjtBQWpiQTtFQUNJLG1CQUFBO0FBb2JKO0FBaGJBO0VBQ0ksZUFBQTtBQW1iSjtBQWhiQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQW1iSjtBQWhiQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQW1iSjtBQWpiSTtFQUNJLGtCQUFBO0FBbWJSO0FBL2FBO0VBQ0ksd0JBQUE7QUFrYko7QUEvYUE7RUFDSSx1QkFBQTtBQWtiSjtBQS9hQTtFQUNJLGVBQUE7QUFrYko7QUEvYUE7RUFDSSxrQkFBQTtBQWtiSjtBQS9hQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFrYko7QUEvYUE7RUFDSSx3QkFBQTtBQWtiSjtBQS9hQSxvQkFBQTtBQUVBLHNCQUFBO0FBRUE7RUFJZ0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUE2YWxCO0VBeGFrQjtJQUNJLHVCQUFBO0VBMGF0QjtFQXBhVTtJQUNJLGdCQUFBO0VBc2FkO0VBaGFjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFrYWxCO0VBNVpVO0lBQ0ksYUFBQTtFQThaZDtFQTFaYztJQUNJLGVBQUE7RUE0WmxCO0VBelpjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQTJabEI7RUF4WmM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUEwWmxCO0VBdlpjO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF5WmxCO0VBclpVO0lBQ0ksVUFBQTtFQXVaZDtBQUNGO0FBbFpBO0VBS29CO0lBQ0ksV0FBQTtFQWdadEI7RUF4WVU7SUFDSSxhQUFBO0VBMFlkO0VBdllVO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXlZZDtFQXZZYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUF5WWxCO0VBdFljO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBd1lsQjtFQXBZVTtJQUNJLFVBQUE7RUFzWWQ7QUFDRjtBQWhZQTtFQUdZO0lBQ0ksZUFBQTtFQWdZZDtFQTFYYztJQUNJLGVBQUE7RUE0WGxCO0VBMVhrQjtJQUNJLHVCQUFBO0VBNFh0QjtFQXpYa0I7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTJYdEI7RUF4WGtCO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUEwWHRCO0VBcFhVO0lBQ0ksZ0JBQUE7RUFzWGQ7RUFqWFU7SUFDSSxhQUFBO0VBbVhkO0VBaFhVO0lBQ0ksVUFBQTtFQWtYZDtFQWhYYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFrWGxCO0VBL1djO0lBQ0ksa0JBQUE7RUFpWGxCO0VBOVdjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBZ1hsQjtFQTdXYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBK1dsQjtFQTNXa0I7SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUE2V3RCO0VBMVdrQjtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUE0V3RCO0VBdldVO0lBQ0ksVUFBQTtFQXlXZDtBQUNGO0FBcFdBO0VBRVE7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0VBcVdWO0VBbldVO0lBQ0ksZ0JBQUE7RUFxV2Q7RUFuV2M7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFxV2xCO0VBaldVO0lBQ0ksZ0JBQUE7RUFtV2Q7RUE3VmM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUErVmxCO0VBMVZNO0lBQ0ksb0JBQUE7RUE0VlY7RUF4VlU7SUFDSSxlQUFBO0VBMFZkO0VBbFZzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQW9WMUI7RUE3VU07SUFDSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQStVVjtFQTdVVTtJQUNJLGFBQUE7RUErVWQ7RUE1VVU7SUFDSSxRQUFBO0VBOFVkO0VBNVVjO0lBQ0ksaUJBQUE7RUE4VWxCO0VBMVVVO0lBQ0ksZ0JBQUE7SUFDQSxNQUFBO0VBNFVkO0VBbFVrQjtJQUNJLFdBQUE7RUFvVXRCO0FBQ0Y7QUE1VEE7RUFNd0I7SUFDSSx5QkFBQTtFQXlUMUI7RUE5U2M7SUFDSSxlQUFBO0VBZ1RsQjtFQTVTa0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUE4U3RCO0VBeFNrQjs7SUFFSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VBMFN0QjtFQXJTa0I7SUFDSSx1QkFBQTtJQUNBLFdBQUE7RUF1U3RCO0VBbFNVO0lBQ0ksZ0JBQUE7RUFvU2Q7QUFDRjtBQS9SQSxvQkFBQSIsImZpbGUiOiJwb2RjYXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICcuL3ZhcmliYWxlcy5zY3NzJztcblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xufVxuXG5hLFxuLmJ0bixcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC8qIElFIHN1cHBvcnQgKi9cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLmF1ZGlvU2VjdGlvbiB7XG4gICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL29mZmVyaW1hZ2UyLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiYWNrZ3JvdW5kTm9SZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJhY2tncm91bmRTaXplO1xuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ1MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjJDQztcbiAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG5cbiAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwJSAwO1xuXG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDI0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0VXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250NDY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxODtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dENhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZnJhZ21lbnRidG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czEwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZW50aXJlQnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRCbGFja0NvbG9yOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuXG4vLyBCcmVhZGNydW1iIFN0YXJ0IFxudWwuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvd0xlZnQuc3ZnJyk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBCcmVhZGNydW1iIEVuZCBcblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLndvcmtTZWN0aW9uIHtcbiAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAxMjBweCAwO1xuXG4gICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgNzBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBPZmZlciBFbmRcblxuXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4ub2ZmZXJTZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm9mZmVyVGV4dCB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnVsIC5yYXRpbmdXcmFwIHtcbiAgICBsaS5pbWcge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnBhZGRpbmcxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4vKiBBYm91dCB1cyBwYWdlICYgd29yayB3aXRoIHVzIHBhZ2UgQ1NTIFN0YXJ0ICovXG4uYWJvdXQtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5hYm91dC10ZXh0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgc3Bhbi5yZWFkLW1vcmUge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBFbmQgKi9cblxuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gICAgLm9yZGVyLXNtLTEge1xuICAgICAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc20tMiB7XG4gICAgICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XG5cbiAgICAuY29udGFpbmVyLXh4bCxcbiAgICAuY29udGFpbmVyLXhsLFxuICAgIC5jb250YWluZXItbGcsXG4gICAgLmNvbnRhaW5lci1tZCxcbiAgICAuY29udGFpbmVyLXNtLFxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG4gICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAuaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuLmxlZnRBcnJvdyxcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgLmhlYWRpbmdUaXRsZSB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5zV3JhcC5kLWZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvbnRTaXplIFByb3BlcnRpZXNcblxuJGZvbnQxMTogMTFweDtcbiRmb250MTI6IDEycHg7XG4kZm9udDEzOiAxM3B4O1xuJGZvbnQxNDogMTRweDtcbiRmb250MTU6IDE1cHg7XG4kZm9udDE2OiAxNnB4O1xuJGZvbnQxNzogMTdweDtcbiRmb250MTg6IDE4cHg7XG4kZm9udDI0OiAyNHB4O1xuJGZvbnQzMDogMzBweDtcbiRmb250NDY6IDQ2cHg7XG5cbi8vIExpbmUtaGVpZ2h0IFByb3BlcnRpZXNcblxuJGxpbmVIZWlnaHQxMnB4OiAxMnB4O1xuJGxpbmVIZWlnaHQxNHB4OiAxNHB4O1xuJGxpbmVIZWlnaHQxNnB4OiAxNnB4O1xuJGxpbmVIZWlnaHQyMnB4OiAyMnB4O1xuJGxpbmVIZWlnaHQyOHB4OiAyOHB4O1xuJGxpbmVIZWlnaHQzMnB4OiAzMnB4O1xuJGxpbmVIZWlnaHQ0MnB4OiA0MnB4O1xuJGxpbmVIZWlnaHQ1MnB4OiA1MnB4O1xuXG4vLyBDb2xvciBQcm9wZXJ0aWVzXG5cbiRXaGl0ZUNvbG9yOiAjZmZmO1xuJEJsYWNrQ29sb3I6ICMwMDA7XG4kTWFyb29uQ29sb3I6ICNBNDM1M0I7XG4kQ29sb3JCREJDQkQ6ICNCREJDQkQ7XG4kYmFja2dyb3VuZFRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcbiRiYWNrZ3JvdW5kTm9SZXBlYXQ6IG5vLXJlcGVhdDtcblxuLy8gbWFyZ2luIFByb3BlcnRpZXNcbiRtYXJnaW5BdXRvOiBhdXRvO1xuJG1hcmdpblplcm86IDBweDtcbiRtYXJnaW41cHg6IDVweDtcbiRtYXJnaW42cHg6IDZweDtcbiRtYXJnaW4xMHB4OiAxMHB4O1xuJG1hcmdpbjEycHg6IDEycHg7XG4kbWFyZ2luMTVweDogMTVweDtcbiRtYXJnaW4yMHB4OiAyMHB4O1xuJG1hcmdpbjI1cHg6IDI1cHg7XG4kbWFyZ2luMzVweDogMzVweDtcbiRtYXJnaW41MHB4OiA1MHB4O1xuXG4vLyBQYWRkaW5nIFByb3BlcnRpZXNcbiRwYWRkaW5nWmVybzogMHB4O1xuJHBhZGRpbmcxMHB4OiAxMHB4O1xuJHBhZGRpbmcxMnB4OiAxMnB4O1xuJHBhZGRpbmcxNXB4OiAxNXB4O1xuJHBhZGRpbmcyMHB4OiAyMHB4O1xuJHBhZGRpbmcyNHB4OiAyNHB4O1xuJHBhZGRpbmcyNXB4OiAyNXB4O1xuJHBhZGRpbmczMHB4OiAzMHB4O1xuJHBhZGRpbmczNXB4OiAzNXB4O1xuJHBhZGRpbmc0MHB4OiA0MHB4O1xuJHBhZGRpbmc1MHB4OiA1MHB4O1xuJHBhZGRpbmc2MHB4OiA2MHB4O1xuXG4vLyBmb250LWZhbWlseVxuJGZvbnRGYW1pbHlJbnRlcjogJ0ludGVyJztcblxuLy8gRm9udC13aWVoZ3QgUHJvcGVydGllc1xuXG4kZm9udFdlaWdodDMwMDogMzAwO1xuJGZvbnRXZWlnaHQ0MDA6IDQwMDtcbiRmb250V2VpZ2h0NTAwOiA1MDA7XG4kZm9udFdlaWdodDYwMDogNjAwO1xuJGZvbnRXZWlnaHQ3MDA6IDcwMDtcblxuLy8gSGVpZ2h0IFByb3BlcnRpZXNcbiRoZWlnaHRBdXRvOiBhdXRvO1xuJGhlaWdodDIwcHg6IDIwcHg7XG4kaGVpZ2h0MjRweDogMjRweDtcbiRoZWlnaHQzNHB4OiAzNHB4O1xuJGhlaWdodDQwcHg6IDQwcHg7XG4kaGVpZ2h0NDZweDogNDZweDtcbiRoZWlnaHQ1MDBweDogNTAwcHg7XG4kaGVpZ2h0MTAwdmg6IDEwMHZoO1xuJGhlaXVnaHQxMDBwZXI6IDEwMCU7XG5cbi8vIFdpZHRoIFByb3BlcnRpZXNcbiR3aWR0aEF1dG86IGF1dG87XG4kd2lkdGgyMHB4OiAyMHB4O1xuJHdpZHRoMjRweDogMjRweDtcbiR3aWR0aDMwcHg6IDMwcHg7XG4kd2lkdGgxNTBweDogMTUwcHg7XG4kd2lkdGgxMDBQZXI6IDEwMCU7XG5cbi8vIERpc3BsYXkgUHJvcGVydGllc1xuJGQtYmxvY2s6IGJsb2NrO1xuJGQtZmxleDogZmxleDtcbiRkLWlubGluZS1ibG9jazogaW5saW5lLWJsb2NrO1xuJGQtbm9uZTogbm9uZTtcblxuLy8gRmxleCBQcm9wZXJ0aWVzXG4kZmxleERpcmVjdGlvbkNvbHVtbjogY29sdW1uO1xuXG4vLyBBbGlnbiBQcm9wZXJ0aWVzXG4kYWxpZ25JdGVtc0NlbnRlcjogY2VudGVyO1xuJGp1c3RpZnlDb250ZW50Q2VudGVyOiBjZW50ZXI7XG5cbi8vIE9wYWNpdHkgUHJvcGVydGllc1xuJG9wYWNpdHlPbmU6IDE7XG4kb3BhY2l0eVR3bzogMC4yO1xuJG9wYWNpdHlPbmU6IDAuMztcbiRvcGFjaXR5Zml2ZTogMC41O1xuJG9wYWNpdHlTaXg6IDAuNjtcbiRvcGFjaXR5U2V2ZW46IDAuNztcbiRvcGFjaXR5SW5oZXJpdDogaW5oZXJpdDtcblxuXG4vLyBCb3JkZXIgUmFkaXVzIFByb3BlcnRpZXNcbiRib3JkZXJSYWRpdXM0OiA0cHg7XG4kYm9yZGVyUmFkaXVzMTI6IDEycHg7XG4kYm9yZGVyUmFkaXVzMTAwOiAxMDBweDtcblxuLy8gVGV4dC1jZW50ZXIgUHJvcGVydGllc1xuJHRleHRDZW50ZXI6IGNlbnRlcjtcblxuLy8gUG9zaXRpb25zIFByb3BlcnRpZXNcbiRwb3NpdGlvbkFic29sdXRlOiBhYnNvbHV0ZTtcbiRwb3NpdGlvblJlbGF0aXZlOiByZWxhdGl2ZTtcbiRwb3NpdGlvbkluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQ3Vyc29yIFBvaW50ZXIgUHJvcGVydGllc1xuJGN1cnNvclBvaW50ZXI6IHBvaW50ZXI7XG5cbi8vIGN1c3RvbSBQaXhlbHNcbiR6ZXJvcHg6IDBweDtcbiRmaXZlcHg6IDVweDtcbiRUZW5weDogMTBweDtcbiRmaWZ0ZWVucHg6IDE1cHg7XG4kdHdlbnR5cHg6IDIwcHg7XG5cbi8vIEJhY2tncm91bmRTaXplIFByb3BlcnRpZXNcblxuJGJhY2tncm91bmRTaXplOiBjb3ZlcjtcblxuLy8gVGV4dCBDYXNlcyBQcm9wZXJ0aWVzXG4kdGV4dFVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHRDYXBpdGFsaXplOiBjYXBpdGFsaXplOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWJhbGVzLnNjc3MnO1xuXG4vLyBzdGVtcGVyIHNlY3Rpb24gc3RhcnRcbi5jb250ZW50UGFydCB7XG4gICAgLmJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuXG4gICAgICAgIC5zdGVtcGVySW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgYnV0dG9uLm9wZW5Cb29rVG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzA4MEZGO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ub3BlbkJvb2tUb3AueWVsbG93IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNCMEFFO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNCMEFFO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbkJvb2tJbWdEZXRhaWwge1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNTIwcHg7IFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDkwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyU3RlbXBlciB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC50aW1lSW5nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0YXJJbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnJhdGVUZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aE1haW4ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLlBhcmFncmFwaFBhcnQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVhZEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0E0MzUzQjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGltaXRUZXh0SGVpZ2h0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvblJvdyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ubG9nb2RldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbmxvZ29EZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjI3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25sb2dvRGV0YWlsc1NlY29uZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNDdBRkQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ3QUZEO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdlbnJlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuR3JvdXBCdXR0b21zIHtcbiAgICAgICAgICAgICAgICAuYWx0ZWxlQnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODMxMUU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MTY4NTY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMzJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M0RTVDNjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuTGl0ZXJhdHVyYUJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOTJDMzI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzQjVDNjM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN0VEN0U3O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLlRocmlsbGVyQnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMxMTcxODtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY1NDQ0QjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRTZBREJDO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMzJweDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkUmF0aW5nIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgICAgIC50aXRsZVRleHQge1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYm9va0NvbGxlY3Rpb25JbWcge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICAuY29sIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcblxuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJvb2tCdG4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDgwRkY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24uYm9va0J0bi55ZWxsb3cge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNCMEFFO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNCMEFFO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHggMjBweDtcblxuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1bC5yYXRpbmdXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYXN0LWVwaXNvZGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgcGFkZGluZzogNDBweCAxNXB4O1xuXG4gICAgICAgIC5sYXN0LWVwaXNvZGVzX193cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllOWU5Nzg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWU5ZTk3ODtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxhc3QtZXBpc29kZXNfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk3ODtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMzZweCk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5Nzg7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGFzdC1lcGlzb2Rlc19fcmVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGFzdC1lcGlzb2Rlc19fdGltZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubGFzdC1lcGlzb2Rlc19faW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICAgIC5ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBlMGUwZTgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIC5ob3ZlciB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1lcGlzb2RlX2xvZ28ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hhcmVXcmFwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGJ1dHRvbi5sb2dvZGV0YWlsLnNoYXJlQnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNoYXJlLWJ1dHRvbnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgOjpuZy1kZWVwIC5zYi1jaXJjbGVzLWRhcmsuc2ItZ3JvdXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAvL3dpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjVweDtcblxuICAgICAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLnNiLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBmYS1pY29uLm5nLWZhLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4gICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRUZFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU3cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uUm93IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbmxvZ29EZXRhaWxzU2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC03NXB4O1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgRW5kXG59XG5cbi5oZWFkZXJTdGVtcGVyIGJ1dHRvbiNzb3J0TWVudSB7XG4gICAgLy8gd2lkdGg6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgIGhlaWdodDogNTZweDtcbiAgICB3aWR0aDogMjI3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjQTQzNTNCO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3Zlcixcbi5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0MzUzQjtcbn1cblxuLmxpbWl0VGV4dEhlaWdodCBwIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC8vIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNwaXNvZGVEZXNjcmlwdGlvbkhlaWdodCBwIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC8vIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yYXRpbmdUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3RhcnRNb2RhbCB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxufVxuXG4uc3RhclJhdGUge1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG5cbiAgICA6Om5nLWRlZXAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgY29sb3I6ICNlNjliMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cbn1cblxuLmFkZFJhdGluZyB7XG4gICAgYnV0dG9uLmJ0bi5idG4tbGcuYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmNkNDM7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmYmNkNDM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLnJhdGluZ1NhdmVCdG4ge1xuICAgIGJ1dHRvbi5idG4uYnRuLW91dGxpbmUtZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0E0MzUzQjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b24uYnRuLWNsb3NlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmZhdm91cml0ZSB7XG4gICAgd2lkdGg6IDM1cHg7XG59XG5cbi5ub3RGYXZvdXJpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG51bC5yYXRpbmdXcmFwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1vZGFsLWZvb3Rlci5yYXRpbmdTYXZlQnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxhc3QtZXBpc29kZXNfX2ltZyB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLyogU2hpbW1lciBDc3MgU3RhcnQgKi9cbi5zaGltbWVyLFxuLnNoaW1tZXJMaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2hpbW1lckxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2ZTZlNiAwJSwgI2U1ZTVlNiAyMCUsICNlNmU0ZTQgNDAlLCAjZDlkY2RkIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHBsYWNlaG9sZGVyU2hpbW1lcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi5zaGltbWVyLFxuLmJ0bi5idG4tcHJpbWFyeS5kb3dubG9hZHRCdG4uc2hpbW1lciB7XG4gICAgYmFja2dyb3VuZDogI2NkZDBkMztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjOGNiY2QgMCUsICNjN2M4Y2IgMjAlLCAjYmJiZGJmIDQwJSwgIzliOWQ5ZiAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlaG9sZGVyU2hpbW1lcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHBsYWNlaG9sZGVyU2hpbW1lciB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAwcHggMDtcbiAgICB9XG59XG5cbi50aXRsZVNoaW1tZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuYnV0dG9uLnRpdGxlU2hpbW1lci5zaGltbWVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbmgyLnNoaW1tZXIudGl0bGVTaGltbWVyIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxubGFiZWwuZ2VucmUudGl0bGVTaGltbWVyLnNoaW1tZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTMwcHg7XG59XG5cbi5yZWFkQnV0dG9uLnRpdGxlU2hpbW1lci5zaGltbWVyIHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICAgIC8vbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC5wcm9kdWN0RGV0YWlsLnNoaW1tZXJXcmFwcGVyIHtcbiAgICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5oZWlnaHQtNTAge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmF0aW5nLnJhdGluZ1NoaW1tZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgdWwucmF0aW5nV3JhcC5zaGltbWVyLmhlaWdodC01MCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5oZWlnaHQtMTIwIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53aWR0aC0yMDAge1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG4uR3JvdXBCdXR0b21zIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5Hcm91cEJ1dHRvbXMgbGkuc2hpbW1lci53aWR0aC0yMDAuaGVpZ2h0LTUwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5sYXN0LWVwaXNvZGVzLmJndHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc3RlbXBlckltZy5zaGltbWVyIHtcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFNoaW1tZXIgQ1NTIEVuZCAqL1xuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIC5oZWFkZXJTdGVtcGVyIHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuR3JvdXBCdXR0b21zIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5hZGRSYXRpbmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAudGl0bGVUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICAgICAgICAgIHRvcDogLTU4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLmxhc3QtZXBpc29kZXMge1xuICAgICAgICAgICAgLmxhc3QtZXBpc29kZXNfX3dyYXBwZXIge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uLmhvbWVPZmZlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLmJhY2tncm91bmQucHJvZHVjdERldGFpbCB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAuaGVhZGVyU3RlbXBlciB7XG4gICAgICAgICAgICAgICAgLmJ1dHRvblJvdyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbmxvZ29EZXRhaWxzU2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuYWRkUmF0aW5nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5vZmZlckJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b25Sb3cge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbmxvZ29EZXRhaWxzU2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYmFja2dyb3VuZC5wcm9kdWN0RGV0YWlsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgICAgIC5oZWFkZXJTdGVtcGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggMCAwO1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZFJhdGluZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrZ3JvdW5kLmJvb2tDb2xsZWN0aW9uIHtcbiAgICAgICAgICAgIC50aXRsZVRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgICAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24uaG9tZU9mZmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAubGFzdC1lcGlzb2RlcyB7XG4gICAgICAgICAgICAubGFzdC1lcGlzb2Rlc19fd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLmxhc3QtZXBpc29kZXMge1xuICAgICAgICAgICAgLmxhc3QtZXBpc29kZXNfX3dyYXBwZXIge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3QtZXBpc29kZXNfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYmFja2dyb3VuZC5wcm9kdWN0RGV0YWlsIHtcbiAgICAgICAgICAgIC5oZWFkZXJTdGVtcGVyIHtcbiAgICAgICAgICAgICAgICAudGltZUluZyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuUGFyYWdyYXBoUGFydCB7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uUm93IHtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25sb2dvRGV0YWlsc1NlY29uZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLkdyb3VwQnV0dG9tcyB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkUmF0aW5nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBNZWRpYSBRdWVyeSBFbmQgKi9cbiJdfQ== */"] });


/***/ }),

/***/ 7278:
/*!****************************************************************!*\
  !*** ./src/app/layout/podcast-detail/podcast-detail.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastDetailModule": () => (/* binding */ PodcastDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _podcast_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast-detail-routing.module */ 1506);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _podcast_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./podcast-detail.component */ 5387);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ 7422);
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-sharebuttons/icons */ 3592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);









class PodcastDetailModule {
}
PodcastDetailModule.ɵfac = function PodcastDetailModule_Factory(t) { return new (t || PodcastDetailModule)(); };
PodcastDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PodcastDetailModule });
PodcastDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastDetailRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__.ShareButtonsModule,
        ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__.ShareIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PodcastDetailModule, { declarations: [_podcast_detail_component__WEBPACK_IMPORTED_MODULE_2__.PodcastDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastDetailRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__.ShareButtonsModule,
        ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__.ShareIconsModule] }); })();


/***/ }),

/***/ 962:
/*!****************************************************************************!*\
  !*** ./src/app/layout/podcast-episodes/podcast-episodes-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastEpisodesRoutingModule": () => (/* binding */ PodcastEpisodesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _podcast_episodes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast-episodes.component */ 5251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _podcast_episodes_component__WEBPACK_IMPORTED_MODULE_0__.PodcastEpisodesComponent
    },
];
class PodcastEpisodesRoutingModule {
}
PodcastEpisodesRoutingModule.ɵfac = function PodcastEpisodesRoutingModule_Factory(t) { return new (t || PodcastEpisodesRoutingModule)(); };
PodcastEpisodesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PodcastEpisodesRoutingModule });
PodcastEpisodesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PodcastEpisodesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5251:
/*!***********************************************************************!*\
  !*** ./src/app/layout/podcast-episodes/podcast-episodes.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastEpisodesComponent": () => (/* binding */ PodcastEpisodesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/modal.service */ 1609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
















function PodcastEpisodesComponent_div_1_div_10_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastEpisodesComponent_div_1_div_10_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.showChapterText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.isChapterReadMore ? "Lasi vair\u0101k (pilns apraksts)" : "Lasi maz\u0101k");
} }
function PodcastEpisodesComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastEpisodesComponent_div_1_div_10_Template_div_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const data_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.checkSubscription(data_r5, _r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16)(8, "p", 17)(9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PodcastEpisodesComponent_div_1_div_10_button_16_Template, 3, 1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 20)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Time Duration:- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r4.podcastDetail.image ? ctx_r4.IMAGE_URL + ctx_r4.podcastDetail.image : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 8, data_r5.uploadDate, "dd/MM/yyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("S", data_r5.season, " E", data_r5.episode, " - ", data_r5.episodeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r5.episodeDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", data_r5.showReadMoreButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.chapterTimeFormat(data_r5.episodeLength));
} }
function PodcastEpisodesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h1")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrolled", function PodcastEpisodesComponent_div_1_Template_div_scrolled_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.onScroll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PodcastEpisodesComponent_div_1_div_10_Template, 22, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, ctx_r0.podcastDetail.name), " - All Episodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.episodeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function PodcastEpisodesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 7)(8, "div", 9)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "p", 24)(13, "h3", 22)(14, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
} }
function PodcastEpisodesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Subscribe Podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastEpisodesComponent_ng_template_4_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const modal_r14 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r14.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 30)(6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " this podcast to listen episodes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 32)(12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PodcastEpisodesComponent_ng_template_4_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const modal_r14 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.addSubscription(modal_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Subscrie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} }
class PodcastEpisodesComponent {
    constructor(apiService, router, route, config, modalService, cusModalService, toastr, formBuilder, document, platformId) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.cusModalService = cusModalService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.platformId = platformId;
        this.updateid = '';
        this.tabType = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast;
        this.skip = 0;
        this.limit = 10;
        this.isSpinner = false;
        this.errorMessage = '';
        this.episodeList = [];
        this.totalRecords = 0;
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.showReadMoreButton = false;
        this.isChapterReadMore = true;
        this.showShimmer = true;
        this.isSubscribed = false;
        this.podcastDetail = {};
        this.isFavourite = false;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
        this.route.queryParams.subscribe(params => {
            this.updateid = params['id'] != undefined ? params['id'] : null;
            this.tabType = params['type'] != undefined ? params['type'] : null;
            if (this.updateid != undefined) {
                this.getPodcastEpisodes(this.updateid, this.skip, this.limit);
            }
        });
    }
    //  get Podcast Episodes  //
    getPodcastEpisodes(id, skip, limit) {
        this.isSpinner = false;
        this.apiService.getData(`webPodcast/episodes/${id}?skip=${skip}&limit=${limit}`).subscribe((result) => {
            this.showShimmer = false;
            this.isSpinner = true;
            this.podcastDetail = result.data;
            for (let chapters of this.podcastDetail.podcastByChapters) {
                if (chapters.episodeDescription.length >= 280) {
                    chapters.showReadMoreButton = true;
                }
                else {
                    chapters.showReadMoreButton = false;
                }
                this.episodeList.push(chapters);
            }
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.episodes < 1 ? 'No record found !!!' : '';
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  chapter time format  //
    chapterTimeFormat(d) {
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }
    showChapterText() {
        this.isChapterReadMore = !this.isChapterReadMore;
    }
    //  on scroll down load more data  //
    onScroll() {
        if (this.skip == 0 && this.episodeList.length < 1) {
            this.skip = 0;
        }
        if (this.episodeList.length != this.totalRecords) {
            this.skip = this.skip + 10;
            setTimeout(() => {
                this.getPodcastEpisodes(this.updateid, this.skip, this.limit);
            }, 1000);
        }
    }
    //  open subscribtion modal  // 
    openMd(content) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if (localStorage.getItem('authorization') !== null) {
                this.modalService.open(content, { size: 'md' });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    //  check Subscription  //
    checkSubscription(episodeData, modalContent) {
        if (episodeData.season == 1 && episodeData.episode == 1) {
            console.log('**************episodeData ', episodeData);
            this.playEpisode(episodeData.episodeName, '', [episodeData], this.tabType, 'podcastByChapters');
        }
        else {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
                if (localStorage.getItem('authorization') !== null) {
                    this.apiService.getData(`web/isFavourite/${this.updateid}`).subscribe((response) => {
                        this.isFavourite = response.data.isFavourite;
                    });
                    this.apiService.getData(`web/getSubscription/${this.updateid}`).subscribe((response) => {
                        this.isSubscribed = response.data.isSubscribed;
                        if (this.isSubscribed) {
                            console.log('111111111111 ', this.isSubscribed);
                            this.playEpisode(episodeData.episodeName, '', this.episodeList, this.tabType, 'podcastByChapters');
                        }
                        else {
                            console.log('22222222222', this.isSubscribed);
                            this.openMd(modalContent);
                        }
                    }, (error) => {
                        if (error.error.responseCode == 403) {
                            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
                                localStorage.removeItem('authorization');
                                localStorage.removeItem('name');
                                this.router.navigate(['/login']);
                            }
                        }
                        else {
                            this.toastr.error(error.error.responseMessage, 'Kļūda!');
                        }
                    });
                }
                else {
                    this.router.navigate(['/login']);
                }
            }
        }
    }
    //  play Episode  //
    playEpisode(newSortOrder, content, url, type, urlType) {
        for (let i = 0; i < url.length; i++) {
            if (url[i].episodeName == newSortOrder) {
                let value = url[i].episodeUrl != '' ? url[i].episodeUrl : url[i].externalUrl;
                this.openModal(content, value, type, urlType, newSortOrder, url[i]);
            }
        }
    }
    //  open player model  //
    openModal(content, url, type, urlType, chapterName, episodeDetails) {
        this.podcastDetail.modalStatus = 'open';
        this.podcastDetail.bookType = this.tabType;
        // this.podcastDetail.podcastByChapters = this.podcastChapters;
        this.podcastDetail.isFavourite = this.isFavourite;
        this.podcastDetail.isSubscribed = this.isSubscribed;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
            if ((localStorage.getItem('authorization') != null) || (urlType == 'bookFragment') || (urlType == 'audioPresentation') || (episodeDetails.season == 1 && episodeDetails.episode == 1)) {
                this.cusModalService.open(this.podcastDetail, chapterName, urlType);
            }
            else {
                this.router.navigate(['/login']);
            }
        }
    }
    addSubscription(modal) {
        console.log('######### this.updateid ', this.updateid);
        if (this.updateid) {
            // this.apiService.putData(`webPodcast/addRating/${this.updateid}?bookType=${this.tabType}&rating=${bookRating}`, '').subscribe(
            //   (result: any) => {
            //     this.toastr.success('Rating added.', 'Success!');
            //   },
            //   (error) => {
            //     this.toastr.error(error.error.responseMessage, 'Error!');
            //   },
            // );
        }
        modal.close('Save click');
    }
}
PodcastEpisodesComponent.ɵfac = function PodcastEpisodesComponent_Factory(t) { return new (t || PodcastEpisodesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID)); };
PodcastEpisodesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PodcastEpisodesComponent, selectors: [["app-podcast-episodes"]], decls: 6, vars: 2, consts: [["class", "podcatDetail", 4, "ngIf"], ["contentOne", ""], [1, "podcatDetail"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], [1, "col-12"], ["class", "singleEpisode d-flex", 4, "ngFor", "ngForOf"], [1, "singleEpisode", "d-flex"], [1, "episodeImage"], [1, "imageRelative"], ["alt", "episodeImage", 3, "src"], [1, "hover", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-primary"], ["src", "/assets/images/play.png", "alt", ""], [1, "episodeContent"], [1, "episodeDate"], [1, "episodeDescription"], ["class", "read_more", 3, "click", 4, "ngIf"], [1, "timeDuration"], [1, "read_more", 3, "click"], [1, "shimmer", "textshimmer"], [1, "imageRelative", "shimmer"], [1, "episodeDate", "shimmer", "textshimmer"], [1, "episodeDescription", "shimmer"], [1, "startModal", "subscribeModal"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "text-center"], [1, "ratingTitle"], [1, "starRate"], [1, "subBtn", 3, "click"]], template: function PodcastEpisodesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PodcastEpisodesComponent_div_1_Template, 13, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PodcastEpisodesComponent_div_2_Template, 15, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PodcastEpisodesComponent_ng_template_4_Template, 14, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showShimmer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showShimmer);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".podcatDetail[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 40px 15px;\n  margin: 35px 0;\n}\n.podcatDetail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 30px;\n  padding-bottom: 30px;\n  font-weight: 300;\n  font-size: 36px;\n}\n.podcatDetail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n}\n.podcatDetail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  bottom: -8px;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #595656;\n  position: absolute;\n  content: \"\";\n}\n.podcatDetail[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover    + .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  border-bottom: 1px solid #595656;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: 0.5s all ease-in-out;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  transition: all 0.3s;\n  cursor: pointer;\n  background: rgba(14, 14, 14, 0.5098039216);\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   p.episodeDate[_ngcontent-%COMP%] {\n  color: #a29f9f;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 400;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   p.episodeDescription[_ngcontent-%COMP%] {\n  color: #a29f9f;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   button.read_more[_ngcontent-%COMP%] {\n  background: #A4353B;\n  color: #fff;\n  border: 1px solid #A4353B;\n  padding: 7px 20px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  transition: 0.5s all ease-in-out;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   button.read_more[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  border: 1px solid #A4353B;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   .timeDuration[_ngcontent-%COMP%] {\n  color: #a29f9f;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   .timeDuration[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.shimmer[_ngcontent-%COMP%], .shimmerLight[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.shimmerLight[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  background-image: linear-gradient(to right, #e6e6e6 0%, #e5e5e6 20%, #e6e4e4 40%, #d9dcdd 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n.shimmer[_ngcontent-%COMP%], .btn.btn-primary.downloadtBtn.shimmer[_ngcontent-%COMP%] {\n  background: #cdd0d3;\n  background-image: linear-gradient(to right, #c8cbcd 0%, #c7c8cb 20%, #bbbdbf 40%, #9b9d9f 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -900px 0;\n  }\n  100% {\n    background-position: 900px 0;\n  }\n}\n.shimmer.textshimmer[_ngcontent-%COMP%] {\n  width: 900px;\n  height: 50px;\n}\n.imageRelative.shimmer[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 270px;\n}\np.episodeDescription.shimmer[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n\n.subscribeModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n}\n.subscribeModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button.subBtn[_ngcontent-%COMP%] {\n  background: #A4353B;\n  color: #fff;\n  border: 1px solid #A4353B;\n  padding: 7px 20px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  transition: 0.5s all ease-in-out;\n  margin-top: 15px;\n}\n.subscribeModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button.subBtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #A4353B;\n  border: 1px solid #A4353B;\n}\n\n\n@media only screen and (max-width: 767px) {\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 140px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .podcatDetail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    padding-bottom: 0;\n    font-size: 20px;\n  }\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeImage[_ngcontent-%COMP%]   .imageRelative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n  }\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%] {\n    margin: 20px 0 0 0;\n  }\n  .podcatDetail[_ngcontent-%COMP%]   .singleEpisode[_ngcontent-%COMP%]   .episodeContent[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvZGNhc3QtZXBpc29kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQ1k7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNoQjtBQUtJO0VBQ0ksVUFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFKUjtBQU9ZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBTGhCO0FBT2dCO0VBQ0ksZ0JBQUE7QUFMcEI7QUFTb0I7RUFDSSxVQUFBO0FBUHhCO0FBV2dCO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FBVHBCO0FBVXFCO0VBQ0csWUFBQTtBQVJ4QjtBQVN3QjtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUDVCO0FBY1E7RUFDSSxpQkFBQTtBQVpaO0FBY1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWmhCO0FBZVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWRoQjtBQWlCWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQWZoQjtBQWlCZ0I7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0FBZnBCO0FBbUJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWpCaEI7QUFtQmdCO0VBQ0ksa0JBQUE7QUFqQnBCO0FBd0JBLHNCQUFBO0FBQ0E7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUFyQko7QUF3QkE7RUFDSSxtQkFBQTtFQUNBLCtGQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtBQXRCSjtBQXlCQTs7RUFFSSxtQkFBQTtFQUNBLCtGQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtBQXZCSjtBQTBCQTtFQUNJO0lBQ0ksNkJBQUE7RUF2Qk47RUEwQkU7SUFDSSw0QkFBQTtFQXhCTjtBQUNGO0FBMkJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUF6Qko7QUEyQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXhCSjtBQTBCQTtFQUNJLGFBQUE7QUF2Qko7QUF5QkEsb0JBQUE7QUFFQSw2QkFBQTtBQUVJO0VBQ0ksa0JBQUE7QUF4QlI7QUF5QlE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQXZCWjtBQXdCWTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBdEJoQjtBQTJCQSwyQkFBQTtBQUVBLHNCQUFBO0FBRUE7RUFLb0I7SUFDSSxnQkFBQTtFQTlCdEI7QUFDRjtBQXFDQTtFQUVRO0lBQ0ksbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFwQ1Y7RUFzQ007SUFDSSxzQkFBQTtFQXBDVjtFQXNDYztJQUNJLFdBQUE7RUFwQ2xCO0VBcUNrQjtJQUNJLGVBQUE7SUFDQSxXQUFBO0VBbkN0QjtFQXVDVTtJQUNJLGtCQUFBO0VBckNkO0VBc0NjO0lBQ0ksZUFBQTtFQXBDbEI7QUFDRiIsImZpbGUiOiJwb2RjYXN0LWVwaXNvZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvZGNhdERldGFpbCB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHg7XG4gICAgbWFyZ2luOiAzNXB4IDA7XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtOHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OTU2NTY7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuZXBpc29kZUltYWdlIGltZzpob3ZlcisuaG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5zaW5nbGVFcGlzb2RlIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU5NTY1NjtcblxuICAgICAgICAuZXBpc29kZUltYWdlIHtcbiAgICAgICAgICAgIC5pbWFnZVJlbGF0aXZlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTQsIDE0LCAwLjUwOTgwMzkyMTYpO1xuICAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVwaXNvZGVDb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuXG4gICAgICAgICAgICBwLmVwaXNvZGVEYXRlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2EyOWY5ZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAuZXBpc29kZURlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2EyOWY5ZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLnJlYWRfbW9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTQzNTNCO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E0MzUzQjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aW1lRHVyYXRpb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTI5ZjlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBTaGltbWVyIENTUyBTdGFydCAqL1xuLnNoaW1tZXIsXG4uc2hpbW1lckxpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaGltbWVyTGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTZlNmU2IDAlLCAjZTVlNWU2IDIwJSwgI2U2ZTRlNCA0MCUsICNkOWRjZGQgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLnNoaW1tZXIsXG4uYnRuLmJ0bi1wcmltYXJ5LmRvd25sb2FkdEJ0bi5zaGltbWVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2RkMGQzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2M4Y2JjZCAwJSwgI2M3YzhjYiAyMCUsICNiYmJkYmYgNDAlLCAjOWI5ZDlmIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHBsYWNlaG9sZGVyU2hpbW1lcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MDBweCAwO1xuICAgIH1cbn1cblxuLnNoaW1tZXIudGV4dHNoaW1tZXIge1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uaW1hZ2VSZWxhdGl2ZS5zaGltbWVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNzBweDtcbn1cbnAuZXBpc29kZURlc2NyaXB0aW9uLnNoaW1tZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG59XG4vKiBTaGltbWVyIENTUyBFbmQgKi9cblxuLypNb2RhbCBTdWJzY3JpYmUgQ1NTIFN0YXJ0ICovXG4uc3Vic2NyaWJlTW9kYWwge1xuICAgIC5tb2RhbC1ib2R5ICB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYnV0dG9uLnN1YkJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQTQzNTNCO1xuICAgICAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNBNDM1M0I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcbiAgICB9XG59XG4vKk1vZGFsIFN1YnNjcmliZSBDU1MgRW5kICovXG5cbi8qIE1lZGlhIFF1ZXJ5IHN0YXJ0ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucG9kY2F0RGV0YWlsIHtcbiAgICAgICAgLnNpbmdsZUVwaXNvZGUge1xuICAgICAgICAgICAgLmVwaXNvZGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgLmltYWdlUmVsYXRpdmUge1xuICAgICAgICAgICAgICAgICAgICBpbWcgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAucG9kY2F0RGV0YWlsIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaW5nbGVFcGlzb2RlIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAuZXBpc29kZUltYWdlIHtcbiAgICAgICAgICAgICAgICAuaW1hZ2VSZWxhdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBpbWcgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVwaXNvZGVDb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 8607:
/*!********************************************************************!*\
  !*** ./src/app/layout/podcast-episodes/podcast-episodes.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastEpisodesModule": () => (/* binding */ PodcastEpisodesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _podcast_episodes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast-episodes-routing.module */ 962);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _podcast_episodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./podcast-episodes.component */ 5251);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class PodcastEpisodesModule {
}
PodcastEpisodesModule.ɵfac = function PodcastEpisodesModule_Factory(t) { return new (t || PodcastEpisodesModule)(); };
PodcastEpisodesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PodcastEpisodesModule });
PodcastEpisodesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_episodes_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastEpisodesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PodcastEpisodesModule, { declarations: [_podcast_episodes_component__WEBPACK_IMPORTED_MODULE_2__.PodcastEpisodesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_episodes_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastEpisodesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] }); })();


/***/ }),

/***/ 3773:
/*!**********************************************************!*\
  !*** ./src/app/layout/podcast/podcast-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastRoutingModule": () => (/* binding */ PodcastRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _podcast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast.component */ 3228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _podcast_component__WEBPACK_IMPORTED_MODULE_0__.PodcastComponent
    },
];
class PodcastRoutingModule {
}
PodcastRoutingModule.ɵfac = function PodcastRoutingModule_Factory(t) { return new (t || PodcastRoutingModule)(); };
PodcastRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PodcastRoutingModule });
PodcastRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PodcastRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3228:
/*!*****************************************************!*\
  !*** ./src/app/layout/podcast/podcast.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastComponent": () => (/* binding */ PodcastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 5502);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/scroll-top/scroll-top.component */ 1418);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);















function PodcastComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Audio Lasitava");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Re\u0123istr\u0113jieties un ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", data_r9.image ? ctx_r10.IMAGE_URL + data_r9.image : "assets/images/slideOne.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PodcastComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PodcastComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 9, 1, "ng-template", 48);
} }
function PodcastComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_2_ngb_carousel_1_1_Template, 1, 0, null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.bannerLists);
} }
function PodcastComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_2_ngb_carousel_1_Template, 2, 1, "ngb-carousel", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.images);
} }
function PodcastComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PodcastComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8)(4, "div", 55)(5, "div", 20)(6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} }
function PodcastComponent_div_6_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PodcastComponent_div_6_ng_container_1_div_1_div_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.viewMore(ctx_r17.tabType, data_r13["categoryName_EN"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Las\u012Bt vair\u0101k");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", data_r13["categoryName_EN"] == "Recomendations" ? "Ieteikumi" : "Ieteikumi", " ");
} }
function PodcastComponent_div_6_ng_container_1_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PodcastComponent_div_6_ng_container_1_div_1_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const innerData_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.podcastDetails(innerData_r21["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 69)(2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 74)(7, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const innerData_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", innerData_r21["image"] ? ctx_r23.IMAGE_URL + innerData_r21["image"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", innerData_r21["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, innerData_r21["name"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 8, innerData_r21.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 10, innerData_r21.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r23.getRating(innerData_r21.rating), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function PodcastComponent_div_6_ng_container_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_6_ng_container_1_div_1_div_4_div_1_Template, 15, 12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r22 < 5);
} }
function PodcastComponent_div_6_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_6_ng_container_1_div_1_div_1_Template, 6, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 61)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PodcastComponent_div_6_ng_container_1_div_1_div_4_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r13["data"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", data_r13.data);
} }
const _c0 = function () { return ["recomendations"]; };
function PodcastComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_6_ng_container_1_div_1_Template, 5, 2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0).includes(data_r13["categoryName_EN"].toLowerCase()));
} }
function PodcastComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_6_ng_container_1_Template, 2, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.finalData);
} }
function PodcastComponent_div_7_div_10_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p", 81);
} }
const _c1 = function () { return [0, 1, 2, 3]; };
function PodcastComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66)(1, "div", 79)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "h2", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PodcastComponent_div_7_div_10_p_6_Template, 1, 0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
} }
function PodcastComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8)(4, "div", 63)(5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "h2", 77)(7, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 61)(9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PodcastComponent_div_7_div_10_Template, 8, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
} }
function PodcastComponent_div_30_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PodcastComponent_div_30_ng_container_1_div_1_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const data_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.viewBookByCategoryId(ctx_r39.tabType, data_r35["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Las\u012Bt vair\u0101k");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, data_r35["categoryName_LV"]), " ");
} }
function PodcastComponent_div_30_ng_container_1_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PodcastComponent_div_30_ng_container_1_div_1_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48); const innerData_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.podcastDetails(innerData_r43["_id"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 69)(2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 74)(7, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const innerData_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", innerData_r43["image"] ? ctx_r45.IMAGE_URL + innerData_r43["image"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", innerData_r43["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, innerData_r43["name"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 8, innerData_r43.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 10, innerData_r43.author));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r45.getRating(innerData_r43.rating), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function PodcastComponent_div_30_ng_container_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_30_ng_container_1_div_1_div_4_div_1_Template, 15, 12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r44 < 5);
} }
function PodcastComponent_div_30_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_30_ng_container_1_div_1_div_1_Template, 7, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 61)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PodcastComponent_div_30_ng_container_1_div_1_div_4_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r35["data"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", data_r35.data);
} }
function PodcastComponent_div_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_30_ng_container_1_div_1_Template, 5, 2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0).includes(data_r35["categoryName_EN"].toLowerCase()));
} }
function PodcastComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PodcastComponent_div_30_ng_container_1_Template, 2, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.finalData);
} }
function PodcastComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PodcastComponent_div_39_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const category_r51 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.viewBookByCategoryId(ctx_r52.tabType, category_r51._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const category_r51 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", category_r51.image ? ctx_r6.IMAGE_URL + category_r51.image : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r51 ? category_r51.lvName : "-");
} }
class PodcastComponent {
    constructor(apiService, router, authService, toastr, cookieService, platformId, titleService, metaService) {
        this.apiService = apiService;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.platformId = platformId;
        this.titleService = titleService;
        this.metaService = metaService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.bannerLists = [];
        this.showGetStarted = true;
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.isSpinner = false;
        this.tabType = 'podcast';
        this.finalData = [];
        this.recommend = {};
        this.categoryArr = [];
    }
    ngOnInit() {
        this.toggleBookType();
        this.setMetaInfo();
    }
    setMetaInfo() {
        let metaTitle = 'Populārkā audiogrāmatu, e-grāmatu un podkāstu platforma Latvijā!';
        let metaDescription = 'Tevi gaida daudz aizraujošu stāstu. Atrodi savas iecienītākās audiogrāmatas, e-grāmatas, podkāstus un presi Audiolasītavā. Klausies, lasi un baudi!';
        let metaUrl = window.location.href;
        this.titleService.setTitle(metaTitle);
        this.metaService.updateTag({ name: 'description', content: metaDescription });
        this.metaService.addTag({ property: 'og:title', content: metaTitle });
        this.metaService.addTag({ property: 'og:description', content: metaDescription });
        this.metaService.addTag({ property: 'og:url', content: metaUrl });
    }
    //  change book type tab  //
    toggleBookType() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
            this.tabType = localStorage.getItem('type')?.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast : localStorage.getItem('type')?.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.ebook ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.ebook : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.audiobook;
            localStorage.setItem('type', this.tabType);
        }
        if (this.tabType.toLocaleLowerCase() === src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.audiobook) {
            this.router.navigateByUrl('/home');
        }
        if (this.tabType.toLocaleLowerCase() === src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.ebook) {
            this.router.navigateByUrl('/home');
        }
        else {
            this.BannerList(this.tabType);
            this.categoryList();
            this.getPodcast();
        }
    }
    //  get podasts  //
    getPodcast() {
        this.apiService.getData("webPodcast").subscribe((res) => {
            this.finalData = [];
            this.finalData = res.data;
            for (let item of res.data) {
                if (item['categoryName_EN'] == "Recomendations") {
                    this.recommend = item.data[0];
                }
            }
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
                localStorage.removeItem('type');
            }
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get banner  //
    BannerList(type) {
        this.isSpinner = false;
        this.apiService.getData(`banner?type=${type}`).subscribe((res) => {
            this.isSpinner = true;
            this.bannerLists = res.data ? res.data : [];
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  get category  //
    categoryList() {
        this.apiService.getData("category?type=podcast").subscribe((res) => {
            this.categoryArr = res.data;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  podcast details  //
    podcastDetails(id) {
        this.router.navigate(['podcast-detail/'], { queryParams: { 'id': id, 'type': this.tabType } });
    }
    getStarted() {
        // if (this.authService.isAuthenticated()) {
        //   this.showGetStarted = false;
        // } else {
        //   this.router.navigate(
        //     ['/login']
        //   );
        // }
    }
    //  view podcast by category ID  //
    viewBookByCategoryId(type, categoryId) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
            localStorage.setItem('type', type);
        }
        this.router.navigate(['/all-podcasts/'], { queryParams: { 'type': type, 'id': categoryId } });
    }
    //  view more by category name //
    viewMore(type, categoryName) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
            localStorage.setItem('type', type);
        }
        this.router.navigate(['/all-podcasts/'], { queryParams: { 'type': type, 'category': categoryName } });
    }
    getRating(data) {
        let beforePointValue = data.toString().split(".")[0];
        let afterPointValue = data.toString().split(".")[1];
        var temp = [0, 1, 2, 3, 4];
        let html = '';
        for (let i = 0; i < temp.length; i++) {
            if (beforePointValue <= i) {
                if (afterPointValue) {
                    html += `<li ><img src="assets/images/halfStarRating.svg" alt="Star half" height=20; width=20; /></li>`;
                    afterPointValue = undefined;
                }
                else {
                    html += `<li ><img src="assets/images/starBlankIcon.svg" alt="Star blank" height=20; width=20; /></li>`;
                }
            }
            else {
                html += `<li ><img src="assets/images/starFillIcon.svg" alt="Star FIll" height=20; width=20; /></li>`;
            }
        }
        return html;
    }
}
PodcastComponent.ɵfac = function PodcastComponent_Factory(t) { return new (t || PodcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta)); };
PodcastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PodcastComponent, selectors: [["app-podcast"]], decls: 98, vars: 11, consts: [[1, "contentPart"], ["class", "banner", 4, "ngIf"], [1, "partMar"], ["class", "addWrapper", 4, "ngIf"], ["class", "shimmerBox", 4, "ngIf"], ["class", "productWrapper", 4, "ngIf"], [1, "audioSection"], [1, "audioSectionInner"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-7"], [1, "audioTextWrap"], [1, "btnsWrap", "d-flex"], [1, "fragmentbtn"], [1, "entireBtn"], [1, "col-md-5"], [1, "mobileImageWrap"], ["alt", "recomendation Image", 3, "src"], [1, "categoriesSection"], [1, "categoriesSectionInner", "text-center"], [1, "row"], [1, "mainWrap"], [1, "mainWrapInner"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "offerSection", "homeOffer"], [1, "offerText"], [1, "buttonRow"], [1, "buttonlogoDetailsSecond"], [1, "mobileImage"], ["src", "assets/images/mobileImgdetailPage.svg", "alt", "mobiel View"], ["id", "LasitavaWork", 1, "workSection"], [1, "workSectionInner"], [1, "col-12", "text-center"], [1, "headingTitle"], [1, "col-md-4", "text-center"], [1, "blockWrap"], ["src", "assets/images/appIcon.svg"], [1, "blockWrap", "icons"], [1, "leftArrow"], ["src", "assets/images/arrowRight.svg", "alt", ""], ["src", "assets/images/setupIcon.svg"], [1, "rightArrow"], ["src", "assets/images/enjoyIcon.svg"], [1, "addWrapper"], ["src", "assets/images/footer-before-strip.jpg", "alt", "Advertisement Area", 1, "footer-banner-img"], [1, "banner"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide'", 3, "src"], [1, "carousel-caption"], ["src", "assets/images/after-slider-strip.jpg", "alt", "Advertisement Area", 1, "footer-banner-img"], [1, "shimmerBox"], [1, "banner", "shimmer"], [1, "addWrapper", "shimmer"], [1, "col-12"], [1, "addImage"], [1, "productWrapper"], ["class", "container", 4, "ngIf"], ["class", "productTitle", 4, "ngIf"], [1, "productline"], ["class", "col mb-4 md-3", 4, "ngFor", "ngForOf"], [1, "productTitle"], [1, "d-flex", "justify-content-between", "align-items-center", "productTitleInner", "mb-4"], [1, "viewMore", 3, "click"], [1, "col", "mb-4", "md-3"], ["class", "singleProduct", 3, "click", 4, "ngIf"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [1, "bookBtn", "yellow"], ["src", "assets/images/mic.svg", "alt", "Mic icon"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], ["placement", "top", 3, "ngbTooltip"], [1, "ratingWrap", 3, "innerHtml"], [1, "shimmer", "titleShimmer"], [1, "shimmer", "viewMoreshimmer"], [1, "singleProduct"], [1, "productImage", "shimmer", "productImageShimmer"], ["placement", "top", 1, "shimmer"], ["class", "shimmer", "placement", "top", 4, "ngFor", "ngForOf"], [1, "ratingWrap", "shimmer"], [1, "d-flex"], [1, "blockInner"], ["alt", "", 3, "src"], ["type", "button", 1, "blockTxt", 3, "click"]], template: function PodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PodcastComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PodcastComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PodcastComponent_div_5_Template, 8, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PodcastComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PodcastComponent_div_7_Template, 11, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "OUR MONTHLY RECOMMENDATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12)(23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "noklausies fragmentu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "noklausies visu gr\u0101matu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15)(28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, PodcastComponent_div_30_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Kategorijas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 8)(36, "div", 20)(37, "div", 21)(38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PodcastComponent_div_39_Template, 6, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 24)(41, "div", 8)(42, "div", 9)(43, "div", 10)(44, "div", 25)(45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Atkl\u0101j Audiolas\u012Btavu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Lasi, klausies un baudi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, " Kad vingrojat, gatavojat \u0113st, darbojaties d\u0101rz\u0101, remont\u0113jat dz\u012Bvokli, s\u0113\u017Eat automa\u0161\u012Bnas s\u0113dekl\u012B vai vienk\u0101r\u0161i atp\u016B\u0161aties: audiogr\u0101matas vienm\u0113r ir jums l\u012Bdz\u0101s. Izv\u0113lieties, kura b\u016Bs n\u0101kam\u0101 audiogr\u0101mata, ko klaus\u012Bsieties, vai sekojiet m\u016Bsu ieteikumam! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 26)(52, "button", 27)(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Pieraksties m\u016Bsu jaunumiem");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 15)(56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 30)(59, "div", 31)(60, "div", 8)(61, "div", 20)(62, "div", 32)(63, "div", 33)(64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "K\u0101 darbojas Audiolas\u012Btava?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Izbaudiet audiogr\u0101matu klaus\u012B\u0161an\u0101s pieredzi jebkur\u0101 laik\u0101 sav\u0101 mobilaj\u0101 t\u0101lrun\u012B, dator\u0101 vai automa\u0161\u012Bn\u0101 - vienk\u0101r\u0161i un \u0113rti! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 20)(69, "div", 34)(70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "1. Instal\u0113 m\u016Bsu lietotni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " \u0112rti lejupiel\u0101d\u0113jiet m\u016Bsu Android vai iOS mobilo lietotni, lai vienm\u0113r var\u0113tu piek\u013C\u016Bt visam saturam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 34)(77, "div", 37)(78, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "2. Izveido savu kontu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " Re\u0123istr\u0113jieties, lai var\u0113tu baud\u012Bt visu m\u016Bsu platform\u0101 pieejamo audiogr\u0101matu kl\u0101stu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 34)(88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "3. Izv\u0113lies savas iecien\u012Bt\u0101k\u0101s audiogr\u0101matas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, " Klausieties savas iecien\u012Bt\u0101k\u0101s audiogr\u0101matas no mobil\u0101 t\u0101lru\u0146a, datora vai jebkuras ier\u012Bces, kas savienota ar Bluetooth. \u0112rti un vienk\u0101r\u0161i! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "app-scroll-top")(97, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bannerLists.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bannerLists.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bannerLists.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.finalData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.finalData.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.recommend.name ? ctx.recommend.name : "The Gravity of us", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("by ", ctx.recommend.author ? ctx.recommend.author : " Phil Stamper", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.recommend.description ? ctx.recommend.description : "As a successful social media journalist with half a million followers, seventeen-year-old Cal is used to sharing his life online. But when his pilot father is selected for a highly publicized NASA mission to Mars, Cal and his family relocate from Brooklyn to Houston and are thrust into a media circus.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.recommend["image"] ? ctx.IMAGE_URL + ctx.recommend["image"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.finalData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categoryArr);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__.ScrollTopComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbSlide, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(180deg, #A4353B -12.43%, #000000 13.44%);\n  opacity: 0.4;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30rem;\n  object-fit: cover;\n  -o-object-fit: cover;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]     .carousel-indicators {\n  display: none;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n  transform: translateY(50%);\n  bottom: 50%;\n  max-width: 675px;\n  padding: 0 15px;\n  margin: auto;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 12px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 54px;\n  line-height: 54px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.8);\n  margin: 40px 0px;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.8);\n  margin-bottom: 30px;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   button.btnGet[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #A4353B;\n  width: 170px;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 100px;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .scrollBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 11;\n  bottom: 30px;\n  transform: translateX(-50%);\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  border: none;\n  color: #fff;\n  align-items: center;\n  text-decoration: none;\n}\n.contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .scrollBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .addWrapper[_ngcontent-%COMP%] {\n  background-color: #01304C;\n  position: relative;\n  bottom: 1px;\n}\n.contentPart[_ngcontent-%COMP%]   .addWrapper[_ngcontent-%COMP%]   .addImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  background-color: #fff;\n  padding: 5px 20px 5px 0;\n  position: relative;\n  z-index: 2;\n  text-transform: capitalize;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]   a.viewMore[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 15px;\n  text-decoration-line: underline;\n  text-transform: capitalize;\n  color: #A4353B;\n  padding: 5px 0 5px 20px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]   a.viewMore[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  bottom: 18px;\n  background-color: transparent;\n  border-top: 1px solid #D9D9D9;\n  border-bottom: 1px solid #D9D9D9;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   button.bookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   button.bookBtn.yellow[_ngcontent-%COMP%] {\n  background: #03B0AE;\n  border: 1px solid #03B0AE;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   button.bookBtn[_ngcontent-%COMP%] {\n  background: #3080FF;\n  border: 1px solid #3080FF;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-height: 264px;\n  max-height: 264px;\n  object-position: top;\n  object-fit: cover;\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 2px;\n}\n.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 20px;\n  color: #000000;\n  opacity: 0.75;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .partMar[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 420px;\n  background: #A4353B;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #FFFEFE;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  background: #fff;\n  padding: 10px 25px;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 16px;\n  color: #A4353B;\n  height: 55px;\n  margin-right: 15px;\n  width: 230px;\n  border-radius: 100px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  background: transparent;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 100px;\n  height: 55px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n  position: relative;\n  top: -75px;\n}\n.contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%] {\n  background-image: url('categoriesBg.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 660px;\n  padding: 125px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  font-weight: 600;\n  font-size: 42px;\n  line-height: 48px;\n  text-align: center;\n  color: #000000;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(180deg, #A4353B -12.43%, #000000 13.44%);\n  opacity: 0.4;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 220px;\n  opacity: 0.7;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 36px;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Inter\";\n  margin-top: 30px;\n  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%]   .mainWrapInner[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1600px;\n}\n.contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%]   .mainWrapInner[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  margin: 0 10px 15px 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n.footer-banner-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.shimmer[_ngcontent-%COMP%], .shimmerLight[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.shimmerLight[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  background-image: linear-gradient(to right, #e6e6e6 0%, #e5e5e6 20%, #e6e4e4 40%, #d9dcdd 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background: #cdd0d3;\n  background-image: linear-gradient(to right, #c8cbcd 0%, #c7c8cb 20%, #bbbdbf 40%, #9b9d9f 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: placeholderShimmer;\n  -webkit-animation-name: placeholderShimmer;\n  animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n.contentPart[_ngcontent-%COMP%]   .banner.shimmer[_ngcontent-%COMP%] {\n  height: 480px;\n}\n.contentPart[_ngcontent-%COMP%]   .addWrapper.shimmer[_ngcontent-%COMP%] {\n  background-color: #cdd0d3;\n  height: 100px;\n  display: block;\n}\n.contentPart[_ngcontent-%COMP%]   h2.shimmer.titleShimmer[_ngcontent-%COMP%] {\n  background-color: #cdd0d3 !important;\n}\n.contentPart[_ngcontent-%COMP%]   h2.shimmer.titleShimmer[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   a.shimmer.viewMoreshimmer[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 50px;\n  z-index: 1;\n}\n.contentPart[_ngcontent-%COMP%]   .productImage.shimmer.productImageShimmer[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.singleProduct[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 0 !important;\n}\n.singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap.shimmer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n}\n\n\n@media only screen and (max-width: 1499px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 88%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 390px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 340px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -58px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 0 0 120px 0;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n    line-height: 46px;\n    margin: 10px 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   button.btnGet[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    width: 150px;\n    height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 278px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    position: relative;\n    top: -45px;\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 34px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -50px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%] {\n    height: 400px;\n    padding: 65px 0 75px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    background: linear-gradient(180deg, #A4353B -12.43%, #000000 13.44%);\n    opacity: 0.4;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 18px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    height: 215px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    top: -25px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 15px;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    width: 180px;\n    height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n    height: 40px;\n    margin-right: 5px;\n    width: 190px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    height: 40px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    top: -35px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 5px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%] {\n    padding: 50px 0 75px 0;\n    height: auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    font-size: 32px;\n    line-height: 38px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    background: linear-gradient(180deg, #A4353B -12.43%, #000000 13.44%);\n    opacity: 0.4;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%]   .categoriesSectionInner[_ngcontent-%COMP%]   .blockInner[_ngcontent-%COMP%]   .blockTxt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-top: 10px;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 33%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 26px;\n    margin: 5px 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   button.btnGet[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    width: 150px;\n    height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding-top: 20px;\n    margin-top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    line-height: 28px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 10% 0 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 26px;\n    margin: 5px 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   button.btnGet[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    width: 150px;\n    height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 12px;\n    line-height: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding-top: 20px;\n    margin-top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    line-height: 28px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    top: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 10% 0 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 5px 10px 5px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productTitle[_ngcontent-%COMP%]::after {\n    bottom: 12px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 34px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]     .carousel-inner {\n    height: 250px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]     .carousel-inner   .carousel-item {\n    height: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]     .carousel-inner   .carousel-item   .picsum-img-wrapper {\n    height: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]     .carousel-inner   .carousel-item   .picsum-img-wrapper   img {\n    height: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    padding: 0px;\n    transform: translateY(40%);\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    margin: 5px 0px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .carousel.slide[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   button.btnGet[_ngcontent-%COMP%] {\n    font-size: 12px;\n    width: 135px;\n    height: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .scrollBtn[_ngcontent-%COMP%] {\n    bottom: 10px;\n    font-size: 12px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .scrollBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .categoriesSection[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetails[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n    height: 40px;\n    margin-right: 5px;\n    width: 100%;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection.homeOffer[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   .buttonRow[_ngcontent-%COMP%]   button.buttonlogoDetailsSecond[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    height: 40px;\n    font-size: 14px;\n    width: 100%;\n    margin: 10px 0;\n  }\n  .carousel-inner[_ngcontent-%COMP%] {\n    overflow: auto;\n    height: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsInBvZGNhc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkpBQUE7QUFHUjtFQUNJLFlDdUdTO0VEdEdULFdDc0JTO0FDdkJiO0FGSUE7RUFDSSxZQ2tHUztFRGpHVCxXQ2lCUztBQ2xCYjtBRklBO0VBQ0ksWUM2RlM7RUQ1RlQsV0NZUztBQ2JiO0FGSUE7RUFDSSxZQ3dGUztFRHZGVCxXQ09TO0FDUmI7QUZJQTtFQUNJLG9CQ3NDYztBQ3ZDbEI7QUZJQTs7O0VBR0ksZ0NBQUE7QUVESjtBRklBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBRURKO0FGTUk7RUFFSSw0QkNYYTtFRFliLGtDQUFBO0VBQ0Esc0JDK0ZTO0VEOUZULGFDaUNNO0VEaENOLHlCQUFBO0VBQ0EsY0FBQTtBRUpSO0FGTVE7RUFDSSxrQkFBQTtBRUpaO0FGT1k7RUFDSSxnQkNjQTtFRGJBLGVDOUNQO0VEK0NPLGlCQ3ZDQztFRHdDRCx1QkFBQTtFQUNBLHlCQ29GQTtFRG5GQSxXQ2hDSDtBQzJCYjtBRlFZO0VBQ0ksZ0JDTUE7RURMQSxlQ3JEUDtFRHNETyxpQkMzQ0M7RUQ0Q0QsMEJDNkVDO0VENUVELFdDeENIO0FDa0NiO0FGU1k7RUFDSSxnQkNKQTtFREtBLGVDaEVQO0VEaUVPLGlCQ3JEQztFRHNERCx1QkFBQTtFQUNBLDBCQ29FQztFRG5FRCxXQ2pESDtBQzBDYjtBRlVZO0VBQ0ksZ0JDWEE7RURZQSxlQzVFUDtFRDZFTyxpQkNqRUM7RURrRUQsa0JDb0NIO0VEbkNHLHVCQUFBO0VBQ0EsV0MzREg7RUQ0REcsc0JBQUE7RUFDQSxvQkM2QkU7RUQ1QkYsZ0JDN0RIO0VEOERHLGtCQUFBO0VBQ0Esa0JBQUE7QUVSaEI7QUZTZ0I7RUFDSSw2QkM5REk7RUQrREosV0NsRVA7QUMyRGI7QUZXWTtFQUNJLGdC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dHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICcuL3ZhcmliYWxlcy5zY3NzJztcblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xufVxuXG5hLFxuLmJ0bixcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC8qIElFIHN1cHBvcnQgKi9cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLmF1ZGlvU2VjdGlvbiB7XG4gICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL29mZmVyaW1hZ2UyLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiYWNrZ3JvdW5kTm9SZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJhY2tncm91bmRTaXplO1xuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ1MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjJDQztcbiAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG5cbiAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwJSAwO1xuXG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDI0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0VXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250NDY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxODtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dENhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZnJhZ21lbnRidG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czEwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZW50aXJlQnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRCbGFja0NvbG9yOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuXG4vLyBCcmVhZGNydW1iIFN0YXJ0IFxudWwuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvd0xlZnQuc3ZnJyk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBCcmVhZGNydW1iIEVuZCBcblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLndvcmtTZWN0aW9uIHtcbiAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAxMjBweCAwO1xuXG4gICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgNzBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBPZmZlciBFbmRcblxuXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4ub2ZmZXJTZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm9mZmVyVGV4dCB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnVsIC5yYXRpbmdXcmFwIHtcbiAgICBsaS5pbWcge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnBhZGRpbmcxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4vKiBBYm91dCB1cyBwYWdlICYgd29yayB3aXRoIHVzIHBhZ2UgQ1NTIFN0YXJ0ICovXG4uYWJvdXQtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5hYm91dC10ZXh0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgc3Bhbi5yZWFkLW1vcmUge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBFbmQgKi9cblxuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gICAgLm9yZGVyLXNtLTEge1xuICAgICAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc20tMiB7XG4gICAgICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XG5cbiAgICAuY29udGFpbmVyLXh4bCxcbiAgICAuY29udGFpbmVyLXhsLFxuICAgIC5jb250YWluZXItbGcsXG4gICAgLmNvbnRhaW5lci1tZCxcbiAgICAuY29udGFpbmVyLXNtLFxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG4gICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAuaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuLmxlZnRBcnJvdyxcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgLmhlYWRpbmdUaXRsZSB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5zV3JhcC5kLWZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvbnRTaXplIFByb3BlcnRpZXNcblxuJGZvbnQxMTogMTFweDtcbiRmb250MTI6IDEycHg7XG4kZm9udDEzOiAxM3B4O1xuJGZvbnQxNDogMTRweDtcbiRmb250MTU6IDE1cHg7XG4kZm9udDE2OiAxNnB4O1xuJGZvbnQxNzogMTdweDtcbiRmb250MTg6IDE4cHg7XG4kZm9udDI0OiAyNHB4O1xuJGZvbnQzMDogMzBweDtcbiRmb250NDY6IDQ2cHg7XG5cbi8vIExpbmUtaGVpZ2h0IFByb3BlcnRpZXNcblxuJGxpbmVIZWlnaHQxMnB4OiAxMnB4O1xuJGxpbmVIZWlnaHQxNHB4OiAxNHB4O1xuJGxpbmVIZWlnaHQxNnB4OiAxNnB4O1xuJGxpbmVIZWlnaHQyMnB4OiAyMnB4O1xuJGxpbmVIZWlnaHQyOHB4OiAyOHB4O1xuJGxpbmVIZWlnaHQzMnB4OiAzMnB4O1xuJGxpbmVIZWlnaHQ0MnB4OiA0MnB4O1xuJGxpbmVIZWlnaHQ1MnB4OiA1MnB4O1xuXG4vLyBDb2xvciBQcm9wZXJ0aWVzXG5cbiRXaGl0ZUNvbG9yOiAjZmZmO1xuJEJsYWNrQ29sb3I6ICMwMDA7XG4kTWFyb29uQ29sb3I6ICNBNDM1M0I7XG4kQ29sb3JCREJDQkQ6ICNCREJDQkQ7XG4kYmFja2dyb3VuZFRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcbiRiYWNrZ3JvdW5kTm9SZXBlYXQ6IG5vLXJlcGVhdDtcblxuLy8gbWFyZ2luIFByb3BlcnRpZXNcbiRtYXJnaW5BdXRvOiBhdXRvO1xuJG1hcmdpblplcm86IDBweDtcbiRtYXJnaW41cHg6IDVweDtcbiRtYXJnaW42cHg6IDZweDtcbiRtYXJnaW4xMHB4OiAxMHB4O1xuJG1hcmdpbjEycHg6IDEycHg7XG4kbWFyZ2luMTVweDogMTVweDtcbiRtYXJnaW4yMHB4OiAyMHB4O1xuJG1hcmdpbjI1cHg6IDI1cHg7XG4kbWFyZ2luMzVweDogMzVweDtcbiRtYXJnaW41MHB4OiA1MHB4O1xuXG4vLyBQYWRkaW5nIFByb3BlcnRpZXNcbiRwYWRkaW5nWmVybzogMHB4O1xuJHBhZGRpbmcxMHB4OiAxMHB4O1xuJHBhZGRpbmcxMnB4OiAxMnB4O1xuJHBhZGRpbmcxNXB4OiAxNXB4O1xuJHBhZGRpbmcyMHB4OiAyMHB4O1xuJHBhZGRpbmcyNHB4OiAyNHB4O1xuJHBhZGRpbmcyNXB4OiAyNXB4O1xuJHBhZGRpbmczMHB4OiAzMHB4O1xuJHBhZGRpbmczNXB4OiAzNXB4O1xuJHBhZGRpbmc0MHB4OiA0MHB4O1xuJHBhZGRpbmc1MHB4OiA1MHB4O1xuJHBhZGRpbmc2MHB4OiA2MHB4O1xuXG4vLyBmb250LWZhbWlseVxuJGZvbnRGYW1pbHlJbnRlcjogJ0ludGVyJztcblxuLy8gRm9udC13aWVoZ3QgUHJvcGVydGllc1xuXG4kZm9udFdlaWdodDMwMDogMzAwO1xuJGZvbnRXZWlnaHQ0MDA6IDQwMDtcbiRmb250V2VpZ2h0NTAwOiA1MDA7XG4kZm9udFdlaWdodDYwMDogNjAwO1xuJGZvbnRXZWlnaHQ3MDA6IDcwMDtcblxuLy8gSGVpZ2h0IFByb3BlcnRpZXNcbiRoZWlnaHRBdXRvOiBhdXRvO1xuJGhlaWdodDIwcHg6IDIwcHg7XG4kaGVpZ2h0MjRweDogMjRweDtcbiRoZWlnaHQzNHB4OiAzNHB4O1xuJGhlaWdodDQwcHg6IDQwcHg7XG4kaGVpZ2h0NDZweDogNDZweDtcbiRoZWlnaHQ1MDBweDogNTAwcHg7XG4kaGVpZ2h0MTAwdmg6IDEwMHZoO1xuJGhlaXVnaHQxMDBwZXI6IDEwMCU7XG5cbi8vIFdpZHRoIFByb3BlcnRpZXNcbiR3aWR0aEF1dG86IGF1dG87XG4kd2lkdGgyMHB4OiAyMHB4O1xuJHdpZHRoMjRweDogMjRweDtcbiR3aWR0aDMwcHg6IDMwcHg7XG4kd2lkdGgxNTBweDogMTUwcHg7XG4kd2lkdGgxMDBQZXI6IDEwMCU7XG5cbi8vIERpc3BsYXkgUHJvcGVydGllc1xuJGQtYmxvY2s6IGJsb2NrO1xuJGQtZmxleDogZmxleDtcbiRkLWlubGluZS1ibG9jazogaW5saW5lLWJsb2NrO1xuJGQtbm9uZTogbm9uZTtcblxuLy8gRmxleCBQcm9wZXJ0aWVzXG4kZmxleERpcmVjdGlvbkNvbHVtbjogY29sdW1uO1xuXG4vLyBBbGlnbiBQcm9wZXJ0aWVzXG4kYWxpZ25JdGVtc0NlbnRlcjogY2VudGVyO1xuJGp1c3RpZnlDb250ZW50Q2VudGVyOiBjZW50ZXI7XG5cbi8vIE9wYWNpdHkgUHJvcGVydGllc1xuJG9wYWNpdHlPbmU6IDE7XG4kb3BhY2l0eVR3bzogMC4yO1xuJG9wYWNpdHlPbmU6IDAuMztcbiRvcGFjaXR5Zml2ZTogMC41O1xuJG9wYWNpdHlTaXg6IDAuNjtcbiRvcGFjaXR5U2V2ZW46IDAuNztcbiRvcGFjaXR5SW5oZXJpdDogaW5oZXJpdDtcblxuXG4vLyBCb3JkZXIgUmFkaXVzIFByb3BlcnRpZXNcbiRib3JkZXJSYWRpdXM0OiA0cHg7XG4kYm9yZGVyUmFkaXVzMTI6IDEycHg7XG4kYm9yZGVyUmFkaXVzMTAwOiAxMDBweDtcblxuLy8gVGV4dC1jZW50ZXIgUHJvcGVydGllc1xuJHRleHRDZW50ZXI6IGNlbnRlcjtcblxuLy8gUG9zaXRpb25zIFByb3BlcnRpZXNcbiRwb3NpdGlvbkFic29sdXRlOiBhYnNvbHV0ZTtcbiRwb3NpdGlvblJlbGF0aXZlOiByZWxhdGl2ZTtcbiRwb3NpdGlvbkluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQ3Vyc29yIFBvaW50ZXIgUHJvcGVydGllc1xuJGN1cnNvclBvaW50ZXI6IHBvaW50ZXI7XG5cbi8vIGN1c3RvbSBQaXhlbHNcbiR6ZXJvcHg6IDBweDtcbiRmaXZlcHg6IDVweDtcbiRUZW5weDogMTBweDtcbiRmaWZ0ZWVucHg6IDE1cHg7XG4kdHdlbnR5cHg6IDIwcHg7XG5cbi8vIEJhY2tncm91bmRTaXplIFByb3BlcnRpZXNcblxuJGJhY2tncm91bmRTaXplOiBjb3ZlcjtcblxuLy8gVGV4dCBDYXNlcyBQcm9wZXJ0aWVzXG4kdGV4dFVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHRDYXBpdGFsaXplOiBjYXBpdGFsaXplOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWJhbGVzLnNjc3MnO1xuXG4uY29udGVudFBhcnQge1xuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmNhcm91c2VsLnNsaWRlIHtcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E0MzUzQiAtMTIuNDMlLCAjMDAwMDAwIDEzLjQ0JSk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzByZW07XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTUlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwIDAgMCAvIDgwJSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAgMCAwIC8gODAlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24uYnRuR2V0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNDM1M0I7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsQnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJhbm5lciBDc3MgRW5kIFxuXG4gICAgLy8gQWR2ZXJ0aXNlbWVudCBDU1MgU3RhcnRcbiAgICAuYWRkV3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTMwNEM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAxcHg7XG5cbiAgICAgICAgLmFkZEltYWdlIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICR3aWR0aDEwMFBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcblxuICAgICAgICAucHJvZHVjdFRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW5aZXJvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRXaGl0ZUNvbG9yO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhLnZpZXdNb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICR3aWR0aDEwMFBlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG5cbiAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJvb2tCdG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwODBGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5ib29rQnRuLnllbGxvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNCMEFFO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzQjBBRTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5ib29rQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDgwRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3RJbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLnJhdGluZ1dyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAvLyAuYmFubmVyLWltZyB7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIH1cblxuICAgIC5wYXJ0TWFyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAvLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIFN0YXJ0IFxuICAgIC5vZmZlclNlY3Rpb24uaG9tZU9mZmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbi5vZmZlckJ0biB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b25Sb3cge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25sb2dvRGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNDM1M0I7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHNTZWNvbmQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTc1cHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuICAgIC8vIENhdGVnb3JpZXMgU2VjdGlvbiBTdGFydFxuICAgIC5jYXRlZ29yaWVzU2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXRlZ29yaWVzQmcuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogNjYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEyNXB4IDA7XG5cbiAgICAgICAgLmNhdGVnb3JpZXNTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2tJbm5lciB7XG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E0MzUzQiAtMTIuNDMlLCAjMDAwMDAwIDEzLjQ0JSk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJsb2NrVHh0IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHlJbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDRweCByZ2IoMCAwIDAgLyA1MCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbldyYXAge1xuXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgICAgICAgICAgICAgIC5tYWluV3JhcElubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MDBweDtcblxuICAgICAgICAgICAgICAgICAgICAuZC1mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjUlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIFxufVxuXG4uZm9vdGVyLWJhbm5lci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTaGltbWVyIENzcyBTdGFydCAqL1xuLnNoaW1tZXIsXG4uc2hpbW1lckxpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaGltbWVyTGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTZlNmU2IDAlLCAjZTVlNWU2IDIwJSwgI2U2ZTRlNCA0MCUsICNkOWRjZGQgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLnNoaW1tZXIge1xuICAgIGJhY2tncm91bmQ6ICNjZGQwZDM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzhjYmNkIDAlLCAjYzdjOGNiIDIwJSwgI2JiYmRiZiA0MCUsICM5YjlkOWYgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuXG5cbkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICAgIH1cbn1cblxuLmNvbnRlbnRQYXJ0IHtcbiAgICAuYmFubmVyLnNoaW1tZXIge1xuICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgIH1cblxuICAgIC5hZGRXcmFwcGVyLnNoaW1tZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkMGQzO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBoMi5zaGltbWVyLnRpdGxlU2hpbW1lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGQwZDMgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoMi5zaGltbWVyLnRpdGxlU2hpbW1lcixcbiAgICBhLnNoaW1tZXIudmlld01vcmVzaGltbWVyIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLnByb2R1Y3RJbWFnZS5zaGltbWVyLnByb2R1Y3RJbWFnZVNoaW1tZXIge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn1cblxuLnNpbmdsZVByb2R1Y3Qge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAucHJvZHVjdFR4dCB7XG4gICAgICAgIC5zaGltbWVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwucmF0aW5nV3JhcC5zaGltbWVyIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBTaGltbWVyIENzcyBFbmQgKi9cblxuLyogTWVkaWEgUXVlcnkgU3RhcnQgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG5cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAubW9iaWxlSW1hZ2VXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4OCVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24uaG9tZU9mZmVyIHtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAubW9iaWxlSW1hZ2VXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uLmhvbWVPZmZlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgdG9wOiAtNThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgICAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDEyMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAubW9iaWxlSW1hZ2VXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAuY2Fyb3VzZWwuc2xpZGUge1xuICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ0bkdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24uaG9tZU9mZmVyIHtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vYmlsZUltYWdlIHtcbiAgICAgICAgICAgICAgICB0b3A6IC01MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhdGVnb3JpZXNTZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2NXB4IDAgNzVweCAwO1xuXG4gICAgICAgICAgICAuY2F0ZWdvcmllc1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgLmJsb2NrSW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTQzNTNCIC0xMi40MyUsICMwMDAwMDAgMTMuNDQlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ibG9ja1R4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5vZmZlckJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b25Sb3cge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbmxvZ29EZXRhaWxzU2Vjb25kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG5cbiAgICAgICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFR4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXRlZ29yaWVzU2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDAgNzVweCAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICAuY2F0ZWdvcmllc1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja0lubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E0MzUzQiAtMTIuNDMlLCAjMDAwMDAwIDEzLjQ0JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYmxvY2tUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RXcmFwcGVyIHtcbiAgICAgICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAuY2Fyb3VzZWwuc2xpZGUge1xuICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnRuR2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAuY2Fyb3VzZWwuc2xpZGUge1xuICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnRuR2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbi5ob21lT2ZmZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RXcmFwcGVyIHtcbiAgICAgICAgICAgIC5wcm9kdWN0VGl0bGUge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RXcmFwcGVyIHtcbiAgICAgICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgIC5jYXJvdXNlbC5zbGlkZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcblxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5waWNzdW0taW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MCUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idG5HZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2Nyb2xsQnRuIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXRlZ29yaWVzU2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uLmhvbWVPZmZlciB7XG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICAuYnV0dG9uUm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9ubG9nb0RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25sb2dvRGV0YWlsc1NlY29uZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtaW5uZXIge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 4340:
/*!**************************************************!*\
  !*** ./src/app/layout/podcast/podcast.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastModule": () => (/* binding */ PodcastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast-routing.module */ 3773);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _podcast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./podcast.component */ 3228);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ 7422);
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-sharebuttons/icons */ 3592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class PodcastModule {
}
PodcastModule.ɵfac = function PodcastModule_Factory(t) { return new (t || PodcastModule)(); };
PodcastModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PodcastModule });
PodcastModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__.ShareButtonsModule,
        ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_7__.ShareIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PodcastModule, { declarations: [_podcast_component__WEBPACK_IMPORTED_MODULE_2__.PodcastComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodcastRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__.ShareButtonsModule,
        ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_7__.ShareIconsModule] }); })();


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ApiService {
    constructor(http) {
        this.http = http;
        this.stringSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.BaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BaseUrl;
    }
    getToken() {
        let token = localStorage.getItem("authorization")
            ? localStorage.getItem("authorization")
            : "";
        return token;
    }
    postData(url, data) {
        const headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
                "Lang": "En",
                Authorization: this.getToken(),
            }),
        };
        return this.http.post(this.BaseUrl + url, data, headers);
    }
    getData(url) {
        const headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
                "Lang": "En",
                Authorization: this.getToken(),
            }),
        };
        return this.http.get(this.BaseUrl + url, headers);
    }
    putData(url, data) {
        const headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
                "Lang": "En",
                Authorization: this.getToken(),
            }),
        };
        return this.http.put(this.BaseUrl + url, data, headers);
    }
    putFileData(url, data) {
        const headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: this.getToken(),
            }),
        };
        return this.http.put(this.BaseUrl + url, data, headers);
    }
    passValue(data) {
        this.stringSubject.next(data);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 6818);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);









class AuthService {
    constructor(router, afAuth, apiService, toastr, platformId) {
        this.router = router;
        this.afAuth = afAuth;
        this.apiService = apiService;
        this.toastr = toastr;
        this.platformId = platformId;
    }
    canActivate(next, state) {
        return this.isAuthenticated();
    }
    isAuthenticated() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            const token = localStorage.getItem('authorization');
            if (token === null) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
    }
    // Sign in with Google
    GoogleAuth(type) {
        return this.AuthLogin(new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider(), type);
    }
    // Auth logic to run auth providers
    AuthLogin(provider, type) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
            if (result.user) {
                result.user?.getIdToken().then(getIdToken => {
                    let obj = {
                        token: getIdToken,
                        type: 'social'
                    };
                    if (type == 'signUp') {
                        this.registerUser(obj);
                    }
                    else {
                        this.login(obj);
                    }
                });
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
    registerUser(obj) {
        this.apiService.postData('user/signup', obj).subscribe((result) => {
            if (result.responseCode === 200) {
                this.toastr.success("User has been created successfully.", "Success!");
            }
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        }, () => {
            this.login(obj);
        });
    }
    login(obj) {
        this.apiService.postData("user/signin", obj).subscribe((result) => {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                localStorage.setItem("authorization", result.data.accessToken);
                localStorage.setItem("name", result.data.name);
            }
        }, (error) => {
            this.toastr.error(error.error.responseMessage, "Error!");
        }, () => {
            this.toastr.success("Logged In.", "Success!");
            this.router.navigate(['/home']);
        });
    }
    // Sign in with Facebook
    FacebookAuth(type) {
        return this.facebookAuthLogin(new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider(), type);
    }
    // Auth logic to run auth providers
    facebookAuthLogin(provider, type) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
            console.log('You have been successfully logged in!');
            if (result.user) {
                result.user?.getIdToken().then(getIdToken => {
                    let obj = {
                        token: getIdToken,
                        type: 'social'
                    };
                    if (type == 'signUp') {
                        this.registerUser(obj);
                    }
                    else {
                        this.login(obj);
                    }
                });
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1609:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ModalService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.currentMessage = this.messageSource.asObservable();
    }
    open(value, chapterName, urlType) {
        value.currentChapterName = chapterName;
        value.currentUrlType = urlType;
        this.messageSource.next(value);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 130, vars: 0, consts: [[1, "footerWrapper"], [1, "container"], [1, "row"], [1, "col-md-3"], [1, "footerLogo"], ["href", "#"], ["src", "assets/images/logoMain.svg", "alt", "Footer Logo"], [1, "footerLinks", "withlogoLinks"], ["routerLink", "/parUznemumu"], ["routerLink", "/plataforma"], ["routerLink", "/darbs"], ["routerLink", "/janumi"], ["href", "http://www.blog.audiolasitava.lv/"], ["target", "_blank", "href", "https://us21.list-manage.com/contact-form?u=6f9d1c2564ee09de428d19acd&form_id=3e0113dcbff032c6d30180432101cd70"], [1, "col-md-2"], [1, "footerLinks"], ["routerLink", "/AudioPodkasti"], ["routerLink", "/faqs"], ["routerLink", "/privataPolitika"], ["routerLink", "/sikdatnes"], ["routerLink", "/lietosanas"], ["routerLink", "/kategorijas"], ["routerLink", "/dizpardokli"], ["routerLink", "/jaunumi"], ["routerLink", "/stastnieki"], ["routerLink", "/izdeveji"], [1, "appIconsWrap"], ["routerLink", "/home"], ["src", "assets/images/appStoreIcon.svg", "alt", "App Store"], ["src", "assets/images/googleAppIcon.svg", "alt", "App Store"], [1, "socialIcons"], ["href", "https://www.instagram.com/audiolasitava/"], ["src", "assets/images/instagramIcon.svg", "alt", "instagramIcon"], ["href", "https://twitter.com/audiolasitava"], ["src", "assets/images/twitterIcon.svg", "alt", "twitterIcon"], ["href", "https://www.facebook.com/people/Audio-Las%C4%ABtava/100089302657283/"], ["src", "assets/images/fbFooterIcon.svg", "alt", "fbFooterIcon"], ["href", "https://www.tiktok.com/@audiolasitava"], ["src", "assets/images/tiktok-logo-2.svg", "alt", "tikTokIcon"], [1, "col-12"], [1, "d-flex", "align-items-center", "justify-content-between", "copyrightWrapper"], [1, "d-flex", "cardIcons"], ["src", "assets/images/googleCard.svg", "alt", ""], ["src", "assets/images/discoverCard.svg", "alt", ""], ["src", "assets/images/paypalCard.svg", "alt", ""], ["src", "assets/images/maestroCard.svg", "alt", ""], ["src", "assets/images/cirrusCard.svg", "alt", ""], ["src", "assets/images/masterCard.svg", "alt", ""], ["src", "assets/images/visaCard.svg", "alt", ""], ["src", "assets/images/heart.png", "alt", "Heart Icon", 1, "heatLogoFooter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Atkl\u0101j jaunus veidus, k\u0101 papildin\u0101t savu gr\u0101matu kl\u0101stu. Audiolas\u012Btav\u0101 var\u0113si atlicin\u0101t laiku saviem iecien\u012Bt\u0101kajiem st\u0101stiem digit\u0101los form\u0101tos: lasot vai klausoties. M\u0113s apvienojam izgl\u012Bt\u012Bbu un izklaidi vienuviet. Audiolas\u012Btav\u0101 klausies, lasi un baudi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Audiolas\u012Btava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul")(14, "li")(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Par uz\u0146\u0113mumu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "M\u016Bsu platforma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Te ir darbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Janumi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "M\u016Bsu blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "M\u016Bsu podk\u0101sts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sazinies ar mums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14)(36, "div", 15)(37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inform\u0101cija lietot\u0101jiem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul")(40, "li")(41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Aug\u0161upl\u0101d\u0113 podk\u0101stu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Jaut\u0101jumi un atbildes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Priv\u0101tuma politika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "S\u012Bkdat\u0146u politika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lieto\u0161anas noteikumi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14)(56, "div", 15)(57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Uzzini vair\u0101k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul")(60, "li")(61, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kategorijas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li")(64, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Di\u017Ep\u0101rdok\u013Ci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Jaun\u0101k\u0101s gr\u0101matas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li")(70, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "St\u0101stnieki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li")(73, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Izdev\u0113ji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14)(76, "div", 15)(77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Lejupl\u0101d\u0113jiet lietotni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 26)(80, "li")(81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li")(84, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 30)(87, "li")(88, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li")(91, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li")(97, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2)(100, "div", 39)(101, "div", 40)(102, "ul", 41)(103, "li")(104, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li")(107, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li")(110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li")(113, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li")(116, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li")(119, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li")(122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Copyright \u00A9 2023 Audiolas\u012Btava. Visas ties\u012Bbas aizsarg\u0101tas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Rad\u012Bts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Latvij\u0101! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #A4353B -28.09%, #000 69.94%);\n  padding-top: 60px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  width: 85%;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLogo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n  color: #BDBCBD;\n  width: 17rem;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks.withlogoLinks[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%] {\n  padding: 15px 0 0 0px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 12px;\n  color: #fff;\n  font-family: \"Inter\";\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   .appIconsWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  width: 100%;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  margin: 15px 0;\n  color: #BDBCBD;\n  text-decoration: none;\n  display: block;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul.socialIcons[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul.socialIcons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px;\n  width: auto;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin-top: 50px;\n  border-top: 1px solid rgba(189, 188, 189, 0.3);\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   ul.cardIcons[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0px;\n  margin-bottom: 0px;\n  list-style: none;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   ul.cardIcons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #fff;\n  margin-bottom: 0px;\n}\nimg.heatLogoFooter[_ngcontent-%COMP%] {\n  width: 26px;\n}\n@media only screen and (max-width: 1024px) {\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLogo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks.withlogoLinks[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul.socialIcons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul.socialIcons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul.socialIcons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media only screen and (max-width: 767px) {\n  footer.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   ul.d-flex.cardIcons[_ngcontent-%COMP%] {\n    margin: 20px 0px 10px 0px;\n    flex-direction: column;\n    flex-direction: row;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%] {\n    margin: 15px 0px;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    line-height: 28px;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks.withlogoLinks[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n  footer.footerWrapper[_ngcontent-%COMP%]   .footerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media only screen and (max-width: 479px) {\n  footer.footerWrapper[_ngcontent-%COMP%]   .copyrightWrapper[_ngcontent-%COMP%]   ul.cardIcons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2SkFBQTtBQUdSO0VBQ0ksWUN1R1M7RUR0R1QsV0NzQlM7QUN2QmI7QUZJQTtFQUNJLFlDa0dTO0VEakdULFdDaUJTO0FDbEJiO0FGSUE7RUFDSSxZQzZGUztFRDVGVCxXQ1lTO0FDYmI7QUZJQTtFQUNJLFlDd0ZTO0VEdkZULFdDT1M7QUNSYjtBRklBO0VBQ0ksb0JDc0NjO0FDdkNsQjtBRklBOzs7RUFHSSxnQ0FBQTtBRURKO0FGSUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FFREo7QUZNSTtFQUVJLDRCQ1hhO0VEWWIsa0NBQUE7RUFDQSxzQkMrRlM7RUQ5RlQsYUNpQ007RURoQ04seUJBQUE7RUFDQSxjQUFBO0FFSlI7QUZNUTtFQUNJLGtCQUFBO0FFSlo7QUZPWTtFQUNJLGdCQ2NBO0VEYkEsZUM5Q1A7RUQrQ08saUJDdkNDO0VEd0NELHVCQUFBO0VBQ0EseUJDb0ZBO0VEbkZBLFdDaENIO0FDMkJiO0FGUVk7RUFDSSxnQkNNQTtFRExBLGVDckRQO0VEc0RPLGlCQzNDQztFRDRDRCwwQkM2RUM7RUQ1RUQsV0N4Q0g7QUNrQ2I7QUZTWTtFQUNJLGdCQ0pBO0VES0EsZUNoRVA7RURpRU8saUJDckRDO0VEc0RELHVCQUFBO0VBQ0EsMEJDb0VDO0VEbkVELFdDakRIO0FDMENiO0FGVVk7RUFDSSxnQkNYQTtFRFlBLGVDNUVQO0VENkVPLGlCQ2pFQztFRGtFRCxrQkNvQ0g7RURuQ0csdUJBQUE7RUFDQSxXQzNESDtFRDRERyxzQkFBQTtFQUNBLG9CQzZCRTtFRDVCRixnQkM3REg7RUQ4REcsa0JBQUE7RUFDQSxrQkFBQTtBRVJoQjtBRlNnQjtFQUNJLDZCQzlESTtFRCtESixXQ2xFUDtBQzJEYjtBRldZO0VBQ0ksZ0JD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Qm9CO0VBQ0ksWURnRFg7QUNnZ0JiO0FBM2lCWTtFQUNJLGFEMEJQO0FDbWhCVDtBQTNpQmdCO0VBQ0ksd0JBQUE7RUFDQSxXRGFSO0FDZ2lCWjtBQXZpQkk7RUFDSSxpQkFBQTtFQUNBLGdCRGxDSztFQ21DTCw4Q0FBQTtBQXlpQlI7QUF2aUJRO0VBQ0ksYURVSDtFQ1RHLFlEcENFO0VDcUNGLGtCRGpEQztFQ2tERCxnQkRTSDtBQ2dpQlQ7QUF2aUJZO0VBQ0ksaUJBQUE7QUF5aUJoQjtBQXJpQlE7RUFDSSxnQkQ1Qkk7RUM2QkosZUQxRkg7RUMyRkcsaUJEL0VLO0VDZ0ZMLGtCRHVCQztFQ3RCRCxzQkFBQTtFQUNBLFdEeEVDO0VDeUVELGtCRGhFQztBQ3VtQmI7QUFsaUJBO0VBQ0ksV0FBQTtBQXFpQko7QUFsaUJBO0VBR1k7SUFDSSxXQUFBO0VBbWlCZDtFQS9oQk07SUFDSSxrQkFBQTtFQWlpQlY7RUExaEJzQjtJQUNJLFdBQUE7RUE0aEIxQjtFQXRoQlU7SUFDSSxlQUFBO0VBd2hCZDtFQXJoQmtCO0lBQ0ksYUFBQTtFQXVoQnRCO0VBcmhCc0I7SUFDSSxXQUFBO0VBdWhCMUI7QUFDRjtBQTlnQkE7RUFFUTtJQUNJLHNCRHZEVTtJQ3dEVixtQkRyRE87RUNva0JqQjtFQTdnQlU7SUFDSSx5QkFBQTtJQUNBLHNCRDVETTtJQzZETixtQkFBQTtFQStnQmQ7RUE1Z0JVO0lBQ0ksZ0JBQUE7RUE4Z0JkO0VBemdCTTtJQUNJLGdCQUFBO0VBMmdCVjtFQXZnQmtCO0lBQ0ksaUJEMUpQO0VDbXFCZjtFQW5nQk07SUFDSSxpQkFBQTtFQXFnQlY7RUE5ZnNCO0lBQ0ksV0FBQTtFQWdnQjFCO0FBQ0Y7QUF2ZkE7RUFLb0I7SUFDSSxXRHRIWjtFQzJtQlY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7OTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANTAwOzYwMCZmYW1pbHk9TXVsaXNoOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCAnLi92YXJpYmFsZXMuc2Nzcyc7XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5T25lO1xuICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHlJbnRlcjtcbn1cblxuYSxcbi5idG4sXG5idXR0b24ge1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICAvKiBJRSBzdXBwb3J0ICovXG59XG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnRcbi5hdWRpb1NlY3Rpb24ge1xuICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9vZmZlcmltYWdlMi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiAkYmFja2dyb3VuZE5vUmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICRiYWNrZ3JvdW5kU2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0NTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYyQ0M7XG4gICAgICAgIG1hcmdpbjogNzBweCAwO1xuXG4gICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxMCUgMDtcblxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQyNDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQxNnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dFVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDQ2O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDUycHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0Q2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MzJweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLmZyYWdtZW50YnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAzNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLmVudGlyZUJ0biB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxNTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQxNnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246ICR0ZXh0Q2VudGVyO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzMTAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAzNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzMTAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvblJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHdpZHRoMTAwUGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxMGRlZyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAyMHB4IHNvbGlkICRXaGl0ZUNvbG9yO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDU5MHB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU5MHB4O1xuICAgICAgICAgICAgICAgIC8vIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBFbmRcblxuLy8gQnJlYWRjcnVtYiBTdGFydCBcbnVsLmJyZWFkY3J1bWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYXJyb3dMZWZ0LnN2ZycpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggMTBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICBjb2xvcjogI0E0MzUzQjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gQnJlYWRjcnVtYiBFbmQgXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnRcbi53b3JrU2VjdGlvbiB7XG4gICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDAgMTIwcHggMDtcblxuICAgICAgICAuaGVhZGluZ1RpdGxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwIDcwcHggMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2NrV3JhcC5pY29ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIHNwYW4ubGVmdEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ucmlnaHRBcnJvdyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gT2ZmZXIgRW5kXG5cblxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIFN0YXJ0IFxuLm9mZmVyU2VjdGlvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIC5vZmZlclRleHQge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRUZFO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vYmlsZUltYWdlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG51bCAucmF0aW5nV3JhcCB7XG4gICAgbGkuaW1nIHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgIH1cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBFbmRcbmZvb3Rlci5mb290ZXJXcmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5wYWRkaW5nMTAwIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xufVxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBTdGFydCAqL1xuLmFib3V0LWltYWdlIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uYWJvdXQtdGV4dCB7XG4gICAgaDIge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIHNwYW4ucmVhZC1tb3JlIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBjb2xvcjogI0E0MzUzQjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuXG5cbi8qIEFib3V0IHVzIHBhZ2UgJiB3b3JrIHdpdGggdXMgcGFnZSBDU1MgRW5kICovXG5cblxuLyogTWVkaWEgUXVlcnkgU3RhcnQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkge1xuICAgIC5vcmRlci1zbS0xIHtcbiAgICAgICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm9yZGVyLXNtLTIge1xuICAgICAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xuXG4gICAgLmNvbnRhaW5lci14eGwsXG4gICAgLmNvbnRhaW5lci14bCxcbiAgICAuY29udGFpbmVyLWxnLFxuICAgIC5jb250YWluZXItbWQsXG4gICAgLmNvbnRhaW5lci1zbSxcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0OTlweCkge1xuICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA0NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTJweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAvLyAgaGVpZ2h0OiA0NTVweDtcbiAgICAgICAgICAgICAgICAubW9iaWxlSW1hZ2VXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSUgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcblxuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmFib3V0LWltYWdlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLndvcmtTZWN0aW9uIHtcbiAgICAgICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGluZ1RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYmxvY2tXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG5cbiAgICAgICAgICAgICAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMyUgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubW9iaWxlSW1hZ2VXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uIHtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5vZmZlckJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2tncm91bmQuYm9va0NvbGxlY3Rpb24ge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0VHh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RXcmFwcGVyIHtcbiAgICAgICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLndvcmtTZWN0aW9uIHtcbiAgICAgICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3csXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ucmlnaHRBcnJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuc1dyYXAuZC1mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3RXcmFwcGVyIHtcbiAgICAgICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmZXJTZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBGb250U2l6ZSBQcm9wZXJ0aWVzXG5cbiRmb250MTE6IDExcHg7XG4kZm9udDEyOiAxMnB4O1xuJGZvbnQxMzogMTNweDtcbiRmb250MTQ6IDE0cHg7XG4kZm9udDE1OiAxNXB4O1xuJGZvbnQxNjogMTZweDtcbiRmb250MTc6IDE3cHg7XG4kZm9udDE4OiAxOHB4O1xuJGZvbnQyNDogMjRweDtcbiRmb250MzA6IDMwcHg7XG4kZm9udDQ2OiA0NnB4O1xuXG4vLyBMaW5lLWhlaWdodCBQcm9wZXJ0aWVzXG5cbiRsaW5lSGVpZ2h0MTJweDogMTJweDtcbiRsaW5lSGVpZ2h0MTRweDogMTRweDtcbiRsaW5lSGVpZ2h0MTZweDogMTZweDtcbiRsaW5lSGVpZ2h0MjJweDogMjJweDtcbiRsaW5lSGVpZ2h0MjhweDogMjhweDtcbiRsaW5lSGVpZ2h0MzJweDogMzJweDtcbiRsaW5lSGVpZ2h0NDJweDogNDJweDtcbiRsaW5lSGVpZ2h0NTJweDogNTJweDtcblxuLy8gQ29sb3IgUHJvcGVydGllc1xuXG4kV2hpdGVDb2xvcjogI2ZmZjtcbiRCbGFja0NvbG9yOiAjMDAwO1xuJE1hcm9vbkNvbG9yOiAjQTQzNTNCO1xuJENvbG9yQkRCQ0JEOiAjQkRCQ0JEO1xuJGJhY2tncm91bmRUcmFuc3BhcmVudDogdHJhbnNwYXJlbnQ7XG4kYmFja2dyb3VuZE5vUmVwZWF0OiBuby1yZXBlYXQ7XG5cbi8vIG1hcmdpbiBQcm9wZXJ0aWVzXG4kbWFyZ2luQXV0bzogYXV0bztcbiRtYXJnaW5aZXJvOiAwcHg7XG4kbWFyZ2luNXB4OiA1cHg7XG4kbWFyZ2luNnB4OiA2cHg7XG4kbWFyZ2luMTBweDogMTBweDtcbiRtYXJnaW4xMnB4OiAxMnB4O1xuJG1hcmdpbjE1cHg6IDE1cHg7XG4kbWFyZ2luMjBweDogMjBweDtcbiRtYXJnaW4yNXB4OiAyNXB4O1xuJG1hcmdpbjM1cHg6IDM1cHg7XG4kbWFyZ2luNTBweDogNTBweDtcblxuLy8gUGFkZGluZyBQcm9wZXJ0aWVzXG4kcGFkZGluZ1plcm86IDBweDtcbiRwYWRkaW5nMTBweDogMTBweDtcbiRwYWRkaW5nMTJweDogMTJweDtcbiRwYWRkaW5nMTVweDogMTVweDtcbiRwYWRkaW5nMjBweDogMjBweDtcbiRwYWRkaW5nMjRweDogMjRweDtcbiRwYWRkaW5nMjVweDogMjVweDtcbiRwYWRkaW5nMzBweDogMzBweDtcbiRwYWRkaW5nMzVweDogMzVweDtcbiRwYWRkaW5nNDBweDogNDBweDtcbiRwYWRkaW5nNTBweDogNTBweDtcbiRwYWRkaW5nNjBweDogNjBweDtcblxuLy8gZm9udC1mYW1pbHlcbiRmb250RmFtaWx5SW50ZXI6ICdJbnRlcic7XG5cbi8vIEZvbnQtd2llaGd0IFByb3BlcnRpZXNcblxuJGZvbnRXZWlnaHQzMDA6IDMwMDtcbiRmb250V2VpZ2h0NDAwOiA0MDA7XG4kZm9udFdlaWdodDUwMDogNTAwO1xuJGZvbnRXZWlnaHQ2MDA6IDYwMDtcbiRmb250V2VpZ2h0NzAwOiA3MDA7XG5cbi8vIEhlaWdodCBQcm9wZXJ0aWVzXG4kaGVpZ2h0QXV0bzogYXV0bztcbiRoZWlnaHQyMHB4OiAyMHB4O1xuJGhlaWdodDI0cHg6IDI0cHg7XG4kaGVpZ2h0MzRweDogMzRweDtcbiRoZWlnaHQ0MHB4OiA0MHB4O1xuJGhlaWdodDQ2cHg6IDQ2cHg7XG4kaGVpZ2h0NTAwcHg6IDUwMHB4O1xuJGhlaWdodDEwMHZoOiAxMDB2aDtcbiRoZWl1Z2h0MTAwcGVyOiAxMDAlO1xuXG4vLyBXaWR0aCBQcm9wZXJ0aWVzXG4kd2lkdGhBdXRvOiBhdXRvO1xuJHdpZHRoMjBweDogMjBweDtcbiR3aWR0aDI0cHg6IDI0cHg7XG4kd2lkdGgzMHB4OiAzMHB4O1xuJHdpZHRoMTUwcHg6IDE1MHB4O1xuJHdpZHRoMTAwUGVyOiAxMDAlO1xuXG4vLyBEaXNwbGF5IFByb3BlcnRpZXNcbiRkLWJsb2NrOiBibG9jaztcbiRkLWZsZXg6IGZsZXg7XG4kZC1pbmxpbmUtYmxvY2s6IGlubGluZS1ibG9jaztcbiRkLW5vbmU6IG5vbmU7XG5cbi8vIEZsZXggUHJvcGVydGllc1xuJGZsZXhEaXJlY3Rpb25Db2x1bW46IGNvbHVtbjtcblxuLy8gQWxpZ24gUHJvcGVydGllc1xuJGFsaWduSXRlbXNDZW50ZXI6IGNlbnRlcjtcbiRqdXN0aWZ5Q29udGVudENlbnRlcjogY2VudGVyO1xuXG4vLyBPcGFjaXR5IFByb3BlcnRpZXNcbiRvcGFjaXR5T25lOiAxO1xuJG9wYWNpdHlUd286IDAuMjtcbiRvcGFjaXR5T25lOiAwLjM7XG4kb3BhY2l0eWZpdmU6IDAuNTtcbiRvcGFjaXR5U2l4OiAwLjY7XG4kb3BhY2l0eVNldmVuOiAwLjc7XG4kb3BhY2l0eUluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQm9yZGVyIFJhZGl1cyBQcm9wZXJ0aWVzXG4kYm9yZGVyUmFkaXVzNDogNHB4O1xuJGJvcmRlclJhZGl1czEyOiAxMnB4O1xuJGJvcmRlclJhZGl1czEwMDogMTAwcHg7XG5cbi8vIFRleHQtY2VudGVyIFByb3BlcnRpZXNcbiR0ZXh0Q2VudGVyOiBjZW50ZXI7XG5cbi8vIFBvc2l0aW9ucyBQcm9wZXJ0aWVzXG4kcG9zaXRpb25BYnNvbHV0ZTogYWJzb2x1dGU7XG4kcG9zaXRpb25SZWxhdGl2ZTogcmVsYXRpdmU7XG4kcG9zaXRpb25Jbmhlcml0OiBpbmhlcml0O1xuXG5cbi8vIEN1cnNvciBQb2ludGVyIFByb3BlcnRpZXNcbiRjdXJzb3JQb2ludGVyOiBwb2ludGVyO1xuXG4vLyBjdXN0b20gUGl4ZWxzXG4kemVyb3B4OiAwcHg7XG4kZml2ZXB4OiA1cHg7XG4kVGVucHg6IDEwcHg7XG4kZmlmdGVlbnB4OiAxNXB4O1xuJHR3ZW50eXB4OiAyMHB4O1xuXG4vLyBCYWNrZ3JvdW5kU2l6ZSBQcm9wZXJ0aWVzXG5cbiRiYWNrZ3JvdW5kU2l6ZTogY292ZXI7XG5cbi8vIFRleHQgQ2FzZXMgUHJvcGVydGllc1xuJHRleHRVcHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0Q2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmliYWxlcy5zY3NzJztcblxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRNYXJvb25Db2xvciAtMjguMDklLCAkQmxhY2tDb2xvciA2OS45NCUpO1xuICAgIHBhZGRpbmctdG9wOiAkcGFkZGluZzYwcHg7XG5cbiAgICAuZm9vdGVyTG9nbyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogJENvbG9yQkRCQ0JEO1xuICAgICAgICAgICAgd2lkdGg6IDE3cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3RlckxpbmtzLndpdGhsb2dvTGlua3Mge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgfVxuXG4gICAgLmZvb3RlckxpbmtzIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDAgMHB4O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxNTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDEycHg7XG4gICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHlJbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcHBJY29uc1dyYXAge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJG1hcmdpbjEwcHggJG1hcmdpblplcm87XG4gICAgICAgICAgICAgICAgd2lkdGg6ICR3aWR0aDEwMFBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6ICRkLW5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ1plcm87XG4gICAgICAgICAgICBtYXJnaW46ICRtYXJnaW5aZXJvO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NDJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRDb2xvckJEQkNCRDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiAkZC1ub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5U2l4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bC5zb2NpYWxJY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJGQtZmxleDtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAkbWFyZ2luWmVybyAkbWFyZ2luMTBweCAkbWFyZ2luWmVybyAkbWFyZ2luWmVybztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR3aWR0aEF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodFdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZzE1cHggJHBhZGRpbmdaZXJvO1xuICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luNTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTg5LCAxODgsIDE4OSwgMC4zKTtcblxuICAgICAgICB1bC5jYXJkSWNvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogJGQtZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nWmVybztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW5aZXJvO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogJGQtbm9uZTtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250MTQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgICAgICAgICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpblplcm87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmltZy5oZWF0TG9nb0Zvb3RlciB7XG4gICAgd2lkdGg6IDI2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgICAgICAuZm9vdGVyTG9nbyB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJMaW5rcy53aXRobG9nb0xpbmtzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJMaW5rcyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsLnNvY2lhbEljb25zIHtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgICAgICAuY29weXJpZ2h0V3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhEaXJlY3Rpb25Db2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXNDZW50ZXI7XG5cbiAgICAgICAgICAgIHVsLmQtZmxleC5jYXJkSWNvbnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJG1hcmdpbjIwcHggJG1hcmdpblplcm8gJG1hcmdpbjEwcHggJG1hcmdpblplcm87XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246ICRmbGV4RGlyZWN0aW9uQ29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJG1hcmdpbjEwcHggJG1hcmdpblplcm87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJMaW5rcyB7XG4gICAgICAgICAgICBtYXJnaW46ICRtYXJnaW4xNXB4ICRtYXJnaW5aZXJvO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyTGlua3Mud2l0aGxvZ29MaW5rcyB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXJMaW5rcyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgIGZvb3Rlci5mb290ZXJXcmFwcGVyIHtcbiAgICAgICAgLmNvcHlyaWdodFdyYXBwZXIge1xuICAgICAgICAgICAgdWwuY2FyZEljb25zIHtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHdpZHRoMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _home_gt0637_Desktop_Arpita_E_book_ebook_universal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);












const _c0 = ["content"];
const _c1 = ["ref"];

function HeaderComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_22_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.updateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 30)(7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_22_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Main\u012Bt paroli");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 32)(12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_22_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Iziet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.name);
  }
}

function HeaderComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ieiet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}

function HeaderComponent_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "ul", 42)(2, "li", 43)(3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Audiogr\u0101matas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 43)(6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "E-gr\u0101matas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 43)(9, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Apraide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}

function HeaderComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "nav", 36)(2, "div", 37)(3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_24_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, HeaderComponent_div_24_div_5_Template, 11, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.hide);
  }
}

function HeaderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "nav", 36)(2, "div", 37)(3, "div", 41)(4, "ul", 42)(5, "li", 43)(6, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.tabClick("audiobook"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Audiogr\u0101matas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 43)(9, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.tabClick("ebook"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "E-gr\u0101matas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 43)(12, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.tabClick("podcast"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Podk\u0101sti");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r4.tabType && ctx_r4.tabType == "audiobook" ? "nav-link active" : ctx_r4.tabType == "" ? "nav-link active" : "nav-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r4.tabType && ctx_r4.tabType == "ebook" ? "nav-link active" : "nav-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r4.tabType && ctx_r4.tabType == "podcast" ? "nav-link active" : "nav-link");
  }
}

function HeaderComponent_div_26_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.miniPlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_div_26_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.isMini = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_div_26_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r21.modalData.author));
  }
}

function HeaderComponent_div_26_div_15_h6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const author_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, author_r34));
  }
}

function HeaderComponent_div_26_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_div_26_div_15_h6_1_Template, 3, 3, "h6", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r22.modalData.author);
  }
}

function HeaderComponent_div_26_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r35.modalData.author));
  }
}

function HeaderComponent_div_26_div_20_div_5_h6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const author_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, author_r38));
  }
}

function HeaderComponent_div_26_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_div_26_div_20_div_5_h6_1_Template, 3, 3, "h6", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r36.modalData.author);
  }
}

function HeaderComponent_div_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HeaderComponent_div_26_div_20_div_4_Template, 4, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, HeaderComponent_div_26_div_20_div_5_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r23.modalData ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, ctx_r23.modalData.name) : "The Gravity of us");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.modalData.bookType == "podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.modalData.bookType != "podcast");
  }
}

function HeaderComponent_div_26_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r24.selectedChapter ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r24.selectedChapter) : ctx_r24.modalData.name);
  }
}

function HeaderComponent_div_26_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);

      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      _r25.play();

      ctx_r39.isPlay = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.startTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_div_26_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);

      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      _r25.pause();

      ctx_r41.isPlay = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.pauseTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_div_26_ul_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 96)(1, "li", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_ul_52_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45);
      const chapters_r43 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      ctx_r44.loadMusic(chapters_r43[0], ctx_r44.playerType);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.isPlay = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 98)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const chapters_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](chapters_r43[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](chapters_r43[1]);
  }
}

function HeaderComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HeaderComponent_div_26_i_3_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HeaderComponent_div_26_i_4_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r46.isPlayerShow = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r46.closePlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "div", 55)(9, "div", 56)(10, "h4")(11, "marquee", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HeaderComponent_div_26_div_14_Template, 4, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HeaderComponent_div_26_div_15_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 61)(19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, HeaderComponent_div_26_div_20_Template, 6, 5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, HeaderComponent_div_26_div_21_Template, 4, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 64)(23, "div", 65)(24, "p", 66)(25, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function HeaderComponent_div_26_Template_input_change_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.progressSet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ngb-progressbar", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 69)(28, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "audio", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 73)(35, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);

      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r49.restartAudio();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r25.play());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);

      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r50.previousAudioChapter();

      _r25.play();

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.isPlay = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.prevAudio10sec());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, HeaderComponent_div_26_button_42_Template, 2, 0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HeaderComponent_div_26_button_43_Template, 2, 0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.fwdAudio10sec());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);

      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r53.nextAudioChapter();

      _r25.play();

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.isPlay = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 15)(49, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.allAudioChapterList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, HeaderComponent_div_26_ul_52_Template, 7, 2, "ul", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r5.isMini ? "" : "player-shadow");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r5.isMini ? "mini-player" : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isMini);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isMini);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r5.modalData ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 21, ctx_r5.modalData.name) : "The Gravity of us", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.modalData.bookType == "podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.modalData.bookType != "podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r5.modalData.bookType == "podcast" ? ctx_r5.IMAGE_URL + ctx_r5.modalData["image"] : ctx_r5.modalData["photo"] ? ctx_r5.IMAGE_URL + ctx_r5.modalData["photo"] : "/assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.playerType == "bookFragment" || ctx_r5.playerType == "audioPresentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.playerType == "bookByChapters" || ctx_r5.playerType == "podcastByChapters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r5.timeCount)("max", ctx_r5.mainAudioLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r5.timeCount)("max", ctx_r5.mainAudioLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.timeCountString);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("-", ctx_r5.timeLeftString, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r5.mainAudio, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.playerType == "bookFragment" || ctx_r5.playerType == "audioPresentation" || ctx_r5.sortOrders.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.sortOrders);
  }
} // import { isPlatformBrowser } from '@angular/common'


class HeaderComponent {
  constructor(route, router, apiService, formBuilder, authService, toastr, modalService, cusModalService) {
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.toastr = toastr;
    this.modalService = modalService;
    this.cusModalService = cusModalService;
    this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.newSearchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.hide = false;
    this.updateid = '';
    this.tabType = '';
    this.name = '';
    this.totalRecords = 0;
    this.token = '';
    this.isFavourite = false;
    this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.IMAGE_URL;
    this.playerType = '';
    this.selectedChapter = '';
    this.isPlayerShow = false;
    this.isMini = false;
    this.timeLeft = 0;
    this.timeCount = 0;
    this.sortOrders = [];
    this.showAudioList = false;
    this.isPlay = false;
    this.currentChapterName = '';
    this.playbackUpdate = false;
  }

  ngOnInit() {
    var _this = this;

    // console.log('78 @@@@@@@@@@@@@@@ ');
    setTimeout(() => {
      this.newSubscription = this.cusModalService.currentMessage.pipe().subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_gt0637_Desktop_Arpita_E_book_ebook_universal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          // console.log('80 +++++++++++++ ');
          if (res.modalStatus == 'open') {
            _this.modalData = res;
            _this.isPlayerShow = true;
            _this.isFavourite = res.isFavourite ? res.isFavourite : false;

            _this.subscribedData(_this.modalData);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }, 200); // if (isPlatformBrowser(this.platformId)) {

    this.tabType = localStorage.getItem('type')?.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.podcast ? src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.podcast : localStorage.getItem('type')?.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.ebook ? src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.ebook : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.audiobook;
    localStorage.setItem('type', this.tabType); // }

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    this.favouriteCount();
    this.route.queryParams.subscribe(params => {
      if (params['searchFilter'] != undefined) {
        this.searchForm.patchValue({
          search: params['searchFilter']
        });
      }

      if (params['id'] != undefined) {
        this.updateid = '/all';
      } else {
        this.updateid = this.router.url.split('?')[0];
      }
    }); // if (isPlatformBrowser(this.platformId)) {

    this.name = localStorage.getItem('name');
    this.token = localStorage.getItem('authorization');

    if (localStorage.getItem('authorization') != null || localStorage.getItem('authorization') != undefined) {
      this.getFavouriteList();
    } // }

  }

  ngOnDestroy() {
    this.newSubscription.unsubscribe();
  } //  open player according to subscribe data  //


  subscribedData(modalData) {
    console.log('176 ################ '); // if (isPlatformBrowser(this.platformId)) {

    if (localStorage.getItem('isMini') == 'true') {
      this.isMini = true;
    } else {
      localStorage.setItem('isMini', 'false');
    } // }


    if (modalData.bookType.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.ebook) {
      for (let item of modalData.bookByChapters) {
        this.sortOrders.push([item.chapterName, item.chapterLength]);
      }

      this.bookDuration = modalData.length + ' pages';
    }

    if (modalData.bookType.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.podcast) {
      // if (isPlatformBrowser(this.platformId)) {
      if (this.sortOrders.length == 0 && localStorage.getItem('authorization') !== null && modalData.isSubscribed) {
        for (let item of modalData.podcastByChapters) {
          this.sortOrders.push([item.episodeName, item.episodeLength]);
        }
      } // }


      this.currentChapterName = modalData.currentChapterName;
      this.playerType = modalData.currentUrlType;
      this.mSet();
      this.startTimer();

      if (this.playerType.toLocaleLowerCase() == 'podcastbychapters' && !this.playbackUpdate) {
        this.addPlayback(modalData._id);
      } // console.log('222222222 playbackUpdate ',this.playbackUpdate);

    } else {
      console.log('else');

      for (let item of modalData.bookByChapters) {
        this.sortOrders.push([item.chapterName, this.chapterTimeFormat(item.chapterLength)]);
      }

      this.timeFormat(modalData.length);
      this.currentChapterName = modalData.currentChapterName;
      this.playerType = modalData.currentUrlType;
      this.mSet();
      this.startTimer();
    }
  }

  toggle() {
    this.hide = !this.hide;
  } //  on book type tab change  //


  tabClick(type) {
    // if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('type', type); // }

    this.newItemEvent.emit(type);

    if (type.toLocaleLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tabType.podcast) {
      this.router.navigate(['/podcast']);
    } else {
      this.router.navigateByUrl('home');
    }

    this.tabType = type;
  } //  login  //


  logIn() {
    this.router.navigate(['/login']);
  } //  logout  //


  logout() {
    // if (isPlatformBrowser(this.platformId)) {
    localStorage.removeItem('authorization');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('isMini'); // }

    this.token = null;
    this.cusModalService.open('', '', '');
    this.router.navigate(['/login']);
  } //  change password  //


  changePassword() {
    this.router.navigate(['/change-password']);
  } //  update profile  //


  updateProfile() {
    this.router.navigate(['/updateProfile']);
  } //  get favourite book count  //


  getFavouriteList() {
    this.apiService.getData('web/favouriteCount').subscribe(res => {
      this.totalRecords = res.data.totalRecord;
    }, error => {// this.toastr.error(error.error.responseMessage, 'Error!');
    });
  } //  get all favourite list  //


  favouriteClick(url) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(url); // this.router.navigate([url])
    } else {
      this.router.navigate(['/login']);
    }
  } //  update favourite count on new book  //


  favouriteCount() {
    this.newSubscription = this.apiService.stringSubject.subscribe(data => {
      this.totalRecords = data;
    });
  } //  on book search filter  //


  onSearchChange(event) {
    this.router.navigate(['/search/'], {
      queryParams: {
        searchFilter: event.target.value
      }
    });
  } // search() {
  //   this.router.navigate(
  //     ['/search/']
  //   );
  // }
  //  add Playback  //


  addPlayback(id) {
    console.log('311 &&&&&&&&&&&&&& addPlayback'); // if (isPlatformBrowser(this.platformId)) {
    // if (localStorage.getItem('authorization') !== null) {
    //   this.playbackUpdate = true
    //   // this.apiService.putData(`webPodcast/addPlaybacks/${id}`, '')
    //   //   .subscribe(
    //   //     (result: any) => {
    //   //       // this.toastr.success(result.responseMessage, 'Success!');
    //   //     },
    //   //     (error: any) => {
    //   //       // this.toastr.error(error.error.responseMessage, 'Error!');
    //   //     },
    //   //   )
    // } else {
    //   this.router.navigate(
    //     ['/login']
    //   );
    // }
    // }
  }

  miniPlayer() {
    this.isMini = true; // if (isPlatformBrowser(this.platformId)) {

    localStorage.setItem('isMini', 'true'); // }
  }

  maximizePlayer() {
    this.isMini = false; // if (isPlatformBrowser(this.platformId)) {

    localStorage.setItem('isMini', 'false'); // }
  } //  book favourite / unfavourite  //


  favouriteBook(id, isFavourite) {
    // if (isPlatformBrowser(this.platformId)) {
    if (localStorage.getItem('authorization') !== null) {
      let favourite = isFavourite == true ? false : true;
      this.isFavourite = favourite;
      let type = this.tabType;
      var api = this.apiService.putData(`web/favourite/${id}?isFavourite=${favourite}&type=${type}`, '');
      api.subscribe(result => {
        this.apiService.passValue(result.data.favouriteCount);
        this.toastr.success(result.responseMessage, 'Error!');
      }, error => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      });
    } else {
      this.router.navigate(['/login']);
    } // }

  } //  AUDIO PLAYER  //


  mSet() {
    let dur = document.getElementById('dur');
    console.log('>>>>> dur', !localStorage.getItem('isMini'), dur); // if (isPlatformBrowser(this.platformId)) {

    if (dur != null && !localStorage.getItem('isMini')) {
      console.log('334 4444444444444');
      this.selectedChapter = this.currentChapterName;

      for (let chapters of this.modalData.bookByChapters) {
        if (chapters.chapterName == this.selectedChapter) {
          let oAudio = document.getElementById('main-audio');
          this.mainAudio = oAudio.src;
          oAudio.currentTime = dur.value;
          this.mainAudioLength = parseInt(chapters.chapterLength);
          this.timeCount = dur.value;
          this.timeLeft = this.mainAudioLength - this.timeCount;
          var date = new Date(0);
          date.setSeconds(this.timeLeft); // specify value for SECONDS here

          this.timeLeftString = date.toISOString().substring(11, 19);
          var date = new Date(0);
          date.setSeconds(0); // specify value for SECONDS here

          this.timeCountString = date.toISOString().substring(11, 19);
        }
      }
    } else {
      console.log('357 777777777777');
      return this.loadMusic(this.currentChapterName, this.playerType);
    } // }

  } //  restart Audio  //


  restartAudio() {
    this.mainAudio = '';
    this.mainAudioLength = '';
    this.timeLeft = 0;
    this.timeCount = 0;
    setTimeout(() => {
      this.loadMusic(this.currentChapter, this.playerType);
    }, 100);
  } //  change to previous audio chapter  //


  previousAudioChapter() {
    let indexNumber = this.sortOrders.findIndex(element => {
      return element.includes(this.currentChapter);
    });
    let nextChapter = this.sortOrders[indexNumber - 1];
    this.loadMusic(nextChapter[0], this.playerType);
  } //  prev audio by 30 sec  //


  prevAudio10sec() {
    this.timeLeft = this.timeLeft + 30.0;
    this.timeCount = this.timeCount - 30.0 < 0 ? 0 : this.timeCount - 30.0;
    var date = new Date(0);
    date.setSeconds(this.timeLeft); // specify value for SECONDS here

    this.timeLeftString = date.toISOString().substring(11, 19);
    var date = new Date(0);
    date.setSeconds(this.timeCount); // specify value for SECONDS here

    this.timeCountString = date.toISOString().substring(11, 19);
    let oAudio = document.getElementById('main-audio');
    oAudio.currentTime -= 30.0;
  } //  fwd audio by 30 sec  //


  fwdAudio10sec() {
    this.timeLeft = this.timeLeft - 30.0;
    this.timeCount = this.timeCount + 30.0 > this.mainAudioLength ? this.mainAudioLength : this.timeCount + 30.0;
    var date = new Date(0);
    date.setSeconds(this.timeLeft); // specify value for SECONDS here

    this.timeLeftString = date.toISOString().substring(11, 19);
    var date = new Date(0);
    date.setSeconds(this.timeCount); // specify value for SECONDS here

    this.timeCountString = date.toISOString().substring(11, 19);
    let oAudio = document.getElementById('main-audio');
    oAudio.currentTime += 30.0;
  } //  timer count on play  //


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.timeCount++;
        var date = new Date(0);
        date.setSeconds(this.timeLeft); // specify value for SECONDS here

        this.timeLeftString = date.toISOString().substring(11, 19);
        var date = new Date(0);
        date.setSeconds(this.timeCount); // specify value for SECONDS here

        this.timeCountString = date.toISOString().substring(11, 19);
      } else {
        this.timeLeft = this.mainAudioLength;
        this.timeCount = 0;
        this.nextAudioChapter();
      }
    }, 1000);
  } //  pause timer  //


  pauseTimer() {
    clearInterval(this.interval);
  } //  change to next audio chapter  //


  nextAudioChapter() {
    let indexNumber = this.sortOrders.findIndex(element => {
      return element.includes(this.currentChapter);
    });
    let nextChapter = this.sortOrders[indexNumber + 1];
    this.loadMusic(nextChapter[0], this.playerType);
  } //  all audio chapter list  //


  allAudioChapterList() {
    this.showAudioList = !this.showAudioList;
  } // load audio  //


  loadMusic(chapter, audioType) {
    if (chapter) {
      this.currentChapter = chapter;
      this.selectedChapter = chapter;

      if (this.modalData.bookType.toLocaleLowerCase() == 'podcast') {
        for (let allChapter of this.modalData.podcastByChapters) {
          if (allChapter.episodeName == chapter) {
            this.mainAudio = allChapter.externalUrl ? allChapter.externalUrl : this.IMAGE_URL + allChapter.episodeUrl;
            this.mainAudioLength = parseInt(allChapter.episodeLength);
            this.timeLeft = this.mainAudioLength;
            this.timeCount = 0;
            var date = new Date(0);
            date.setSeconds(this.timeLeft); // specify value for SECONDS here

            this.timeLeftString = date.toISOString().substring(11, 19);
            var date = new Date(0);
            date.setSeconds(0); // specify value for SECONDS here

            this.timeCountString = date.toISOString().substring(11, 19);
          }
        }
      } else {
        for (let allChapter of this.modalData.bookByChapters) {
          if (allChapter.chapterName == chapter) {
            this.mainAudio = this.IMAGE_URL + allChapter.chapterUrl;
            this.mainAudioLength = parseInt(allChapter.chapterLength);
            this.timeLeft = this.mainAudioLength;
            this.timeCount = 0;
            var date = new Date(0);
            date.setSeconds(this.timeLeft); // specify value for SECONDS here

            this.timeLeftString = date.toISOString().substring(11, 19);
            var date = new Date(0);
            date.setSeconds(0); // specify value for SECONDS here

            this.timeCountString = date.toISOString().substring(11, 19);
          }
        }
      }

      if (this.isPlay) {
        this.startTimer();
        this.isPlay = !this.isPlay;
      }
    } else {
      let audioUrl = audioType == 'bookFragment' ? this.modalData.bookFragment : audioType == 'audioPresentation' ? this.modalData.audioPresentation : this.modalData.entireBook;
      let audioLength = audioType == 'bookFragment' ? this.modalData.fragmentLength : audioType == 'audioPresentation' ? this.modalData.audioPresentationLength : this.modalData.length;
      this.mainAudio = this.IMAGE_URL + audioUrl;
      this.mainAudioLength = parseInt(audioLength);
      this.timeLeft = this.mainAudioLength;
      this.timeCount = 0;
      var date = new Date(0);
      date.setSeconds(this.timeLeft); // specify value for SECONDS here

      this.timeLeftString = date.toISOString().substring(11, 19);
      var date = new Date(0);
      date.setSeconds(0); // specify value for SECONDS here

      this.timeCountString = date.toISOString().substring(11, 19);
    }
  } //  skip audio on click progress bar  //


  progressSet() {
    let dur = document.getElementById('dur');
    this.timeCount = dur.value;
    this.timeLeft = this.mainAudioLength - this.timeCount;
    var date = new Date(0);
    date.setSeconds(this.timeLeft); // specify value for SECONDS here

    this.timeLeftString = date.toISOString().substring(11, 19);
    var date = new Date(0);
    date.setSeconds(this.timeCount); // specify value for SECONDS here

    this.timeCountString = date.toISOString().substring(11, 19);
    let oAudio = document.getElementById('main-audio');
    oAudio.currentTime = dur.value;
  } //  calculate chapter time format  //


  chapterTimeFormat(d) {
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
  } //  get entire book time format  //


  timeFormat(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    this.bookDuration = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
  } //  close player  //


  closePlayer() {
    this.mainAudio = '';
    this.mainAudioLength = '';
    this.timeLeft = 0;
    this.timeCount = 0;
    this.isPlay = false;
    this.pauseTimer(); // if (isPlatformBrowser(this.platformId)) {

    localStorage.setItem('isMini', 'false'); // }

    this.cusModalService.open({
      modalStatus: 'close'
    }, '', '');
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    }
  },
  outputs: {
    newItemEvent: "newItemEvent",
    newSearchEvent: "newSearchEvent"
  },
  decls: 27,
  vars: 7,
  consts: [[1, "header"], [1, "topBar"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "searchWrap", 3, "formGroup"], ["type", "text", "placeholder", "Atrodi lielisku gr\u0101matu", "formControlName", "search", "name", "search2", 3, "input"], ["type", "submit"], ["src", "assets/images/searchIcon.svg", "alt", "Search Icon"], [1, "logoWrap"], ["routerLink", "/home"], ["src", "assets/images/logoMain.svg", "alt", ""], [1, "headerOptions"], [3, "click"], ["src", "assets/images/wishlistIcon.svg", "alt", ""], [1, "count"], ["ngbDropdown", "", 1, "d-inline-block"], ["myDrop", "ngbDropdown"], ["type", "button", "id", "dropdownManual", "ngbDropdownAnchor", "", 1, "btn", "me-2", 3, "focus"], ["src", "assets/images/personIcon.svg", "alt", "", 2, "width", "25px", "height", "30px"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], ["class", "dropdown-inner", 4, "ngIf"], ["class", "logIn", 4, "ngIf"], ["class", "mobileView", 4, "ngIf"], ["class", "desktopView", 4, "ngIf"], ["class", "custom-player-main", 3, "ngClass", 4, "ngIf"], [1, "dropdown-inner"], [1, "profile"], ["ngbDropdownItem", "", "type", "button", 3, "click"], ["src", "assets/images/userGrey.png", "alt", "", 1, "iconEdit"], [1, "profileText"], [1, "Change-Password"], ["src", "assets/images/lock.png", 1, "iconEditPassword"], [1, "logOut"], ["src", "assets/images/power.png", 1, "iconLogout"], [1, "logIn"], [1, "mobileView"], [1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "container", "align-items-center"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsibleNavbar", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["class", "navbar-collapse align-items-center", "id", "collapsibleNavbar", 4, "ngIf"], ["id", "collapsibleNavbar", 1, "navbar-collapse", "align-items-center"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "active"], [1, "nav-link"], [1, "desktopView"], [3, "ngClass", "click"], [1, "custom-player-main", 3, "ngClass"], [1, "backCustom", 3, "ngClass"], [1, "modal-header"], ["class", "fa fa-minus minMaxIcon", 3, "click", 4, "ngIf"], ["class", "fa fa-square-o minMaxIcon", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["src", "assets/images/close.png"], [1, "modal-body", "wrapper"], [1, "audioContent", 2, "width", "70%"], ["scrollamount", "5", "direction", "left"], [4, "ngIf"], [1, "audioImg"], ["alt", "stemperbook", 1, "musicImg", 3, "src"], [1, "musicIcon"], [1, "musicAppMain", "mb-3"], ["class", "audioTextRight", 4, "ngIf"], [1, "audioPlayer"], [1, "audio-progress-area"], [1, "audio-progress-bar", 2, "position", "relative"], ["id", "dur", "type", "range", "name", "rng", "min", "0", "step", "1", 1, "cus-audio-progress", 3, "value", "max", "change"], ["type", "danger", 1, "cus-progress-bar", 3, "value", "max"], [1, "timer"], [1, "current"], ["id", "main-audio", "loop", "", "autoplay", "", 3, "src"], ["ref", ""], [1, "controls"], ["type", "button", "id", "repeat-plist", 3, "click"], ["src", "assets/images/reload.png"], ["type", "button", "id", "prev", 3, "click"], ["src", "assets/images/prevButton.png"], ["type", "button", "id", "prev", 1, "skip", 3, "click"], ["src", "/assets/images/30secPrv1.png"], ["type", "button", "class", "play-pause", 3, "click", 4, "ngIf"], ["type", "button", "id", "next", 1, "skip", 3, "click"], ["src", "/assets/images/30secFwd1.png"], ["type", "button", "id", "next", 3, "click"], ["src", "/assets/images/nextButton.png"], ["type", "button", "id", "more-music", "ngbDropdownToggle", "", 3, "disabled", "click"], ["src", "/assets/images/list.png"], ["ngbDropdownMenu", "", "aria-labelledby", "more-music", "placement", "right", 2, "width", "300px", "max-height", "200px", "overflow", "auto"], ["class", "chapterlist p-0", 4, "ngFor", "ngForOf"], [1, "fa", "fa-minus", "minMaxIcon", 3, "click"], [1, "fa", "fa-square-o", "minMaxIcon", 3, "click"], [4, "ngFor", "ngForOf"], [1, "audioTextRight"], ["type", "button", 1, "play-pause", 3, "click"], ["src", "/assets/images/play.png", "height", "35", "width", "35"], ["src", "/assets/images/pause.png", "height", "35", "width", "35"], [1, "chapterlist", "p-0"], [1, "d-flex", "px-3", "justify-content-between", 3, "click"], [1, "row"], [1, "audio-duration"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4)(5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function HeaderComponent_Template_input_input_5_listener($event) {
        return ctx.onSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 11)(12, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_12_listener() {
        return ctx.favouriteClick("/favourites");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li")(17, "div", 15, 16)(19, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function HeaderComponent_Template_button_focus_19_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, HeaderComponent_div_22_Template, 16, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, HeaderComponent_div_23_Template, 5, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, HeaderComponent_div_24_Template, 6, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HeaderComponent_div_25_Template, 14, 3, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, HeaderComponent_div_26_Template, 53, 23, "div", 24);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.totalRecords ? ctx.totalRecords : 0, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.token != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.token == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.updateid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.updateid == "/detail" || ctx.updateid == "/favourites" || ctx.updateid == "/search" || ctx.updateid == "/all" || ctx.updateid == "/cookiePolicy" || ctx.updateid == "/parUznemumu" || ctx.updateid == "/darbs" || ctx.updateid == "/contactUs" || ctx.updateid == "/janumi" || ctx.updateid == "/plataforma" || ctx.updateid == "/authors" || ctx.updateid == "/AudioPodkasti" || ctx.updateid == "/faqs" || ctx.updateid == "/privataPolitika" || ctx.updateid == "/sikdatnes" || ctx.updateid == "/lietosanas" || ctx.updateid == "/kategorijas" || ctx.updateid == "/dizpardokli" || ctx.updateid == "/jaunumi" || ctx.updateid == "/stastnieki" || ctx.updateid == "/izdeveji"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isPlayerShow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownAnchor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbProgressbar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe],
  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #A4353B 0%, #000000 102.5%);\n  padding: 24px 0px;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%] {\n  width: 232px;\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background: rgba(223, 223, 223, 0.3);\n  opacity: inherit;\n  border: 1px solid rgba(223, 223, 223, 0.3);\n  border-radius: 100px;\n  padding-left: 15px;\n  font-size: 13px;\n  font-family: \"Inter\";\n  line-height: 12px;\n  height: 40px;\n  width: 100%;\n  color: #fff;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  border: none;\n  background: transparent;\n  padding: 8px 12px;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0px;\n  margin-bottom: 0px;\n  justify-content: flex-end;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px 15px;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background: #000;\n  position: absolute;\n  z-index: 1;\n  text-align: center;\n  color: #fff;\n  border-radius: 100px;\n  top: -15px;\n  right: -15px;\n  font-size: 12px;\n  padding: 3px 0px;\n}\n.header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.header[_ngcontent-%COMP%]   nav.navbar.navbar-expand-sm.bg-dark.navbar-dark[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  padding: 21px 0px;\n}\n.header[_ngcontent-%COMP%]   nav.navbar.navbar-expand-sm.bg-dark.navbar-dark[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  position: relative;\n  cursor: pointer;\n  padding: 12px 25px;\n  margin: 0 10px;\n  color: #000000;\n  text-transform: uppercase;\n}\n.header[_ngcontent-%COMP%]   nav.navbar.navbar-expand-sm.bg-dark.navbar-dark[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav.navbar.navbar-expand-sm.bg-dark.navbar-dark[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\n  background: #A4353B;\n  border-radius: 20px;\n  color: #fff;\n}\n.header[_ngcontent-%COMP%]   .mobileView[_ngcontent-%COMP%] {\n  display: none;\n}\n.logoWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media only screen and (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding-left: 10px;\n    font-size: 12px;\n    line-height: 12px;\n    height: 34px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 3px 9px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 5px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%] {\n    order: 2;\n    margin: 10px 0px 15px 0px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding-left: 10px;\n    font-size: 12px;\n    line-height: 12px;\n    height: 34px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   form.searchWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 4px 9px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 12px;\n  }\n  .header[_ngcontent-%COMP%]   .topBar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   ul.headerOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    font-size: 11px;\n    padding: 1px 0px;\n    top: -6px;\n    right: -14px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .header[_ngcontent-%COMP%]   .mobileView[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .header[_ngcontent-%COMP%]   .desktopView[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   nav.navbar[_ngcontent-%COMP%] {\n    padding: 10px 0px !important;\n  }\n  .header[_ngcontent-%COMP%]   nav.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: #333;\n    background: linear-gradient(180deg, #A4353B 0%, #000 102.5%);\n    border: 0px solid #333;\n    border-radius: 4px;\n  }\n}\nbutton#dropdownManual[_ngcontent-%COMP%] {\n  border: 0px solid white;\n  position: relative;\n  bottom: 7px;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  border-right: 0px solid transparent;\n  border-left: 0px solid transparent;\n  background-color: #333;\n}\nbutton#dropdownManual[_ngcontent-%COMP%]:hover {\n  color: #333;\n  background-color: #333;\n}\nbutton.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  padding: 7px 20px;\n}\n.profileText[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0px;\n}\nimg.iconEdit[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.iconEditPassword[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 22px;\n}\n.iconLogout[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.dropdown-item[_ngcontent-%COMP%]:active {\n  color: var(--bs-dropdown-link-active-color);\n  text-decoration: none;\n  background-color: white;\n}\n\n.audio-progress-area[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 100%;\n}\n.audio-progress-area[_ngcontent-%COMP%]   .audio-progress-bar[_ngcontent-%COMP%] {\n  height: inherit;\n  position: relative;\n  border-radius: inherit;\n}\n.audio-progress-area[_ngcontent-%COMP%]   .audio-progress-bar[_ngcontent-%COMP%] {\n  height: inherit;\n  position: relative;\n  border-radius: inherit;\n}\nngb-progressbar.progress[_ngcontent-%COMP%] {\n  background: gray;\n  height: 6px;\n}\n.audio-progress-bar[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 12px;\n  width: 12px;\n  background: #000;\n  border-radius: inherit;\n  top: 50%;\n  right: -5px;\n  transform: translateY(-50%);\n  background: inherit;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.audio-progress-area[_ngcontent-%COMP%]:hover   .audio-progress-bar[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.audio-progress-area[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2px;\n}\n.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: white;\n}\n.controls[_ngcontent-%COMP%] {\n  margin: 40px 0 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.controls[_ngcontent-%COMP%]   #prev[_ngcontent-%COMP%] {\n  margin-right: -13px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n}\n.controls[_ngcontent-%COMP%]   #next[_ngcontent-%COMP%] {\n  margin-left: -13px;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n}\n.controls[_ngcontent-%COMP%]   #repeat-plist[_ngcontent-%COMP%], #more-music[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: transparent;\n  border: none;\n}\n.controls[_ngcontent-%COMP%]   .play-pause[_ngcontent-%COMP%] {\n  height: 54px;\n  width: 54px;\n  align-items: center;\n  background: transparent;\n  border: none;\n}\n.play-pause[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n}\n.margin-list[_ngcontent-%COMP%]   .chapterlist[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  max-height: 260px;\n  overflow-y: auto !important;\n}\n.chapterlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  list-style: none;\n  padding-bottom: 10px;\n  margin-bottom: 5px;\n  color: gray;\n  border-bottom: 1px solid #e5e5e5;\n}\n.cus-audio-progress[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: -5px;\n  left: -1px;\n  z-index: 9;\n  opacity: 0;\n  cursor: pointer;\n}\n.mini-player[_ngcontent-%COMP%]   .audioImg[_ngcontent-%COMP%], .mini-player[_ngcontent-%COMP%]   .musicAppMain[_ngcontent-%COMP%], .mini-player[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .skip[_ngcontent-%COMP%] {\n  display: none;\n}\n.mini-player[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 400px;\n}\n.musicImg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.musicSystem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.custom-player-main[_ngcontent-%COMP%] {\n  top: 0;\n  position: fixed;\n  display: flex;\n  width: 100%;\n  z-index: 9;\n  justify-content: center;\n  align-items: center;\n}\n.player-shadow[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4392156863);\n  height: 100vh;\n}\n.backCustom[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #A4353B 0%, #000000 102.5%);\n  border-radius: 7px;\n  width: 100%;\n  max-width: 500px;\n  padding: 15px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.musicImg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.audioContent[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 10px;\n}\n.audioContent[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n  justify-content: end;\n}\n.audioContent[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 2px;\n}\n.audioImg[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.audioImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 300px;\n  width: 100%;\n  object-fit: contain;\n}\n.audioTextRight[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.musicAppMain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.backCustom[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.audioTextRight[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.audioTextRight[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nbutton.iconMusic[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid transparent;\n}\n.audioPlayer[_ngcontent-%COMP%] {\n  margin: 0px;\n}\naudio[_ngcontent-%COMP%] {\n  background: transparent !important;\n  width: 100% !important;\n}\n.musicIcon[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton.btn-close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 14px;\n}\n.favourite[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.notFavourite[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.minMaxIcon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  margin-right: 1rem;\n  font-size: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2SkFBQTtBQUdSO0VBQ0ksWUN1R1M7RUR0R1QsV0NzQlM7QUN2QmI7QUZJQTtFQUNJLFlDa0dTO0VEakdULFdDaUJTO0FDbEJiO0FGSUE7RUFDSSxZQzZGUztFRDVGVCxXQ1lTO0FDYmI7QUZJQTtFQUNJLFlDd0ZTO0VEdkZULFdDT1M7QUNSYjtBRklBO0VBQ0ksb0JDc0NjO0FDdkNsQjtBRklBOzs7RUFHSSxnQ0FBQTtBRURKO0FGSUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FFREo7QUZNSTtFQUVJLDRCQ1hhO0VEWWIsa0NBQUE7RUFDQSxzQkMrRlM7RUQ5RlQsYUNpQ007RURoQ04seUJBQUE7RUFDQSxjQUFBO0FFSlI7QUZNUTtFQUNJLGtCQUFBO0FFSlo7QUZPWTtFQUNJLGdCQ2NBO0VEYkEsZUM5Q1A7RUQrQ08saUJDdkNDO0VEd0NELHVCQUFBO0VBQ0EseUJDb0ZBO0VEbkZBLFdDaENIO0FDMkJiO0FGUVk7RUFDSSxnQkNNQTtFRExBLGVDckRQO0VEc0RPLGlCQzNDQztFRDRDRCwwQkM2RUM7RUQ1RUQsV0N4Q0g7QUNrQ2I7QUZTWTtFQUNJLGdCQ0pBO0VES0EsZUNoRVA7RURpRU8saUJDckRDO0VEc0RELHVCQUFBO0VBQ0EsMEJDb0VDO0VEbkVELFdDakRIO0FDMENiO0FGVVk7RUFDSSxnQkNYQTtFRFlBLGVDNUVQO0VENkVPLGlCQ2pFQztFRGtFRCxrQkNvQ0g7RURuQ0csdUJBQUE7RUFDQSxXQzNESDtFRDRERyxzQkFBQTtFQUNBLG9CQzZCRTtFRDVCRixnQkM3REg7RUQ4REcsa0JBQUE7RUFDQSxrQkFBQTtBRVJoQjtBRlNnQjtFQUNJLDZCQzlESTtFRCtESixXQ2xFUDtBQzJEYjtBRldZO0VBQ0ksZ0JD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ZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICcuL3ZhcmliYWxlcy5zY3NzJztcblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xufVxuXG5hLFxuLmJ0bixcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC8qIElFIHN1cHBvcnQgKi9cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLmF1ZGlvU2VjdGlvbiB7XG4gICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL29mZmVyaW1hZ2UyLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiYWNrZ3JvdW5kTm9SZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJhY2tncm91bmRTaXplO1xuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ1MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjJDQztcbiAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG5cbiAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwJSAwO1xuXG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDI0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0VXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250NDY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxODtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dENhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZnJhZ21lbnRidG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czEwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZW50aXJlQnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRCbGFja0NvbG9yOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuXG4vLyBCcmVhZGNydW1iIFN0YXJ0IFxudWwuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvd0xlZnQuc3ZnJyk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBCcmVhZGNydW1iIEVuZCBcblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLndvcmtTZWN0aW9uIHtcbiAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAxMjBweCAwO1xuXG4gICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgNzBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBPZmZlciBFbmRcblxuXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4ub2ZmZXJTZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm9mZmVyVGV4dCB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnVsIC5yYXRpbmdXcmFwIHtcbiAgICBsaS5pbWcge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnBhZGRpbmcxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4vKiBBYm91dCB1cyBwYWdlICYgd29yayB3aXRoIHVzIHBhZ2UgQ1NTIFN0YXJ0ICovXG4uYWJvdXQtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5hYm91dC10ZXh0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgc3Bhbi5yZWFkLW1vcmUge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBFbmQgKi9cblxuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gICAgLm9yZGVyLXNtLTEge1xuICAgICAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc20tMiB7XG4gICAgICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XG5cbiAgICAuY29udGFpbmVyLXh4bCxcbiAgICAuY29udGFpbmVyLXhsLFxuICAgIC5jb250YWluZXItbGcsXG4gICAgLmNvbnRhaW5lci1tZCxcbiAgICAuY29udGFpbmVyLXNtLFxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG4gICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAuaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuLmxlZnRBcnJvdyxcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgLmhlYWRpbmdUaXRsZSB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5zV3JhcC5kLWZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvbnRTaXplIFByb3BlcnRpZXNcblxuJGZvbnQxMTogMTFweDtcbiRmb250MTI6IDEycHg7XG4kZm9udDEzOiAxM3B4O1xuJGZvbnQxNDogMTRweDtcbiRmb250MTU6IDE1cHg7XG4kZm9udDE2OiAxNnB4O1xuJGZvbnQxNzogMTdweDtcbiRmb250MTg6IDE4cHg7XG4kZm9udDI0OiAyNHB4O1xuJGZvbnQzMDogMzBweDtcbiRmb250NDY6IDQ2cHg7XG5cbi8vIExpbmUtaGVpZ2h0IFByb3BlcnRpZXNcblxuJGxpbmVIZWlnaHQxMnB4OiAxMnB4O1xuJGxpbmVIZWlnaHQxNHB4OiAxNHB4O1xuJGxpbmVIZWlnaHQxNnB4OiAxNnB4O1xuJGxpbmVIZWlnaHQyMnB4OiAyMnB4O1xuJGxpbmVIZWlnaHQyOHB4OiAyOHB4O1xuJGxpbmVIZWlnaHQzMnB4OiAzMnB4O1xuJGxpbmVIZWlnaHQ0MnB4OiA0MnB4O1xuJGxpbmVIZWlnaHQ1MnB4OiA1MnB4O1xuXG4vLyBDb2xvciBQcm9wZXJ0aWVzXG5cbiRXaGl0ZUNvbG9yOiAjZmZmO1xuJEJsYWNrQ29sb3I6ICMwMDA7XG4kTWFyb29uQ29sb3I6ICNBNDM1M0I7XG4kQ29sb3JCREJDQkQ6ICNCREJDQkQ7XG4kYmFja2dyb3VuZFRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcbiRiYWNrZ3JvdW5kTm9SZXBlYXQ6IG5vLXJlcGVhdDtcblxuLy8gbWFyZ2luIFByb3BlcnRpZXNcbiRtYXJnaW5BdXRvOiBhdXRvO1xuJG1hcmdpblplcm86IDBweDtcbiRtYXJnaW41cHg6IDVweDtcbiRtYXJnaW42cHg6IDZweDtcbiRtYXJnaW4xMHB4OiAxMHB4O1xuJG1hcmdpbjEycHg6IDEycHg7XG4kbWFyZ2luMTVweDogMTVweDtcbiRtYXJnaW4yMHB4OiAyMHB4O1xuJG1hcmdpbjI1cHg6IDI1cHg7XG4kbWFyZ2luMzVweDogMzVweDtcbiRtYXJnaW41MHB4OiA1MHB4O1xuXG4vLyBQYWRkaW5nIFByb3BlcnRpZXNcbiRwYWRkaW5nWmVybzogMHB4O1xuJHBhZGRpbmcxMHB4OiAxMHB4O1xuJHBhZGRpbmcxMnB4OiAxMnB4O1xuJHBhZGRpbmcxNXB4OiAxNXB4O1xuJHBhZGRpbmcyMHB4OiAyMHB4O1xuJHBhZGRpbmcyNHB4OiAyNHB4O1xuJHBhZGRpbmcyNXB4OiAyNXB4O1xuJHBhZGRpbmczMHB4OiAzMHB4O1xuJHBhZGRpbmczNXB4OiAzNXB4O1xuJHBhZGRpbmc0MHB4OiA0MHB4O1xuJHBhZGRpbmc1MHB4OiA1MHB4O1xuJHBhZGRpbmc2MHB4OiA2MHB4O1xuXG4vLyBmb250LWZhbWlseVxuJGZvbnRGYW1pbHlJbnRlcjogJ0ludGVyJztcblxuLy8gRm9udC13aWVoZ3QgUHJvcGVydGllc1xuXG4kZm9udFdlaWdodDMwMDogMzAwO1xuJGZvbnRXZWlnaHQ0MDA6IDQwMDtcbiRmb250V2VpZ2h0NTAwOiA1MDA7XG4kZm9udFdlaWdodDYwMDogNjAwO1xuJGZvbnRXZWlnaHQ3MDA6IDcwMDtcblxuLy8gSGVpZ2h0IFByb3BlcnRpZXNcbiRoZWlnaHRBdXRvOiBhdXRvO1xuJGhlaWdodDIwcHg6IDIwcHg7XG4kaGVpZ2h0MjRweDogMjRweDtcbiRoZWlnaHQzNHB4OiAzNHB4O1xuJGhlaWdodDQwcHg6IDQwcHg7XG4kaGVpZ2h0NDZweDogNDZweDtcbiRoZWlnaHQ1MDBweDogNTAwcHg7XG4kaGVpZ2h0MTAwdmg6IDEwMHZoO1xuJGhlaXVnaHQxMDBwZXI6IDEwMCU7XG5cbi8vIFdpZHRoIFByb3BlcnRpZXNcbiR3aWR0aEF1dG86IGF1dG87XG4kd2lkdGgyMHB4OiAyMHB4O1xuJHdpZHRoMjRweDogMjRweDtcbiR3aWR0aDMwcHg6IDMwcHg7XG4kd2lkdGgxNTBweDogMTUwcHg7XG4kd2lkdGgxMDBQZXI6IDEwMCU7XG5cbi8vIERpc3BsYXkgUHJvcGVydGllc1xuJGQtYmxvY2s6IGJsb2NrO1xuJGQtZmxleDogZmxleDtcbiRkLWlubGluZS1ibG9jazogaW5saW5lLWJsb2NrO1xuJGQtbm9uZTogbm9uZTtcblxuLy8gRmxleCBQcm9wZXJ0aWVzXG4kZmxleERpcmVjdGlvbkNvbHVtbjogY29sdW1uO1xuXG4vLyBBbGlnbiBQcm9wZXJ0aWVzXG4kYWxpZ25JdGVtc0NlbnRlcjogY2VudGVyO1xuJGp1c3RpZnlDb250ZW50Q2VudGVyOiBjZW50ZXI7XG5cbi8vIE9wYWNpdHkgUHJvcGVydGllc1xuJG9wYWNpdHlPbmU6IDE7XG4kb3BhY2l0eVR3bzogMC4yO1xuJG9wYWNpdHlPbmU6IDAuMztcbiRvcGFjaXR5Zml2ZTogMC41O1xuJG9wYWNpdHlTaXg6IDAuNjtcbiRvcGFjaXR5U2V2ZW46IDAuNztcbiRvcGFjaXR5SW5oZXJpdDogaW5oZXJpdDtcblxuXG4vLyBCb3JkZXIgUmFkaXVzIFByb3BlcnRpZXNcbiRib3JkZXJSYWRpdXM0OiA0cHg7XG4kYm9yZGVyUmFkaXVzMTI6IDEycHg7XG4kYm9yZGVyUmFkaXVzMTAwOiAxMDBweDtcblxuLy8gVGV4dC1jZW50ZXIgUHJvcGVydGllc1xuJHRleHRDZW50ZXI6IGNlbnRlcjtcblxuLy8gUG9zaXRpb25zIFByb3BlcnRpZXNcbiRwb3NpdGlvbkFic29sdXRlOiBhYnNvbHV0ZTtcbiRwb3NpdGlvblJlbGF0aXZlOiByZWxhdGl2ZTtcbiRwb3NpdGlvbkluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQ3Vyc29yIFBvaW50ZXIgUHJvcGVydGllc1xuJGN1cnNvclBvaW50ZXI6IHBvaW50ZXI7XG5cbi8vIGN1c3RvbSBQaXhlbHNcbiR6ZXJvcHg6IDBweDtcbiRmaXZlcHg6IDVweDtcbiRUZW5weDogMTBweDtcbiRmaWZ0ZWVucHg6IDE1cHg7XG4kdHdlbnR5cHg6IDIwcHg7XG5cbi8vIEJhY2tncm91bmRTaXplIFByb3BlcnRpZXNcblxuJGJhY2tncm91bmRTaXplOiBjb3ZlcjtcblxuLy8gVGV4dCBDYXNlcyBQcm9wZXJ0aWVzXG4kdGV4dFVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHRDYXBpdGFsaXplOiBjYXBpdGFsaXplOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWJhbGVzLnNjc3MnO1xuXG4uaGVhZGVyIHtcbiAgICAudG9wQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E0MzUzQiAwJSwgIzAwMDAwMCAxMDIuNSUpO1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZzI0cHggJHBhZGRpbmdaZXJvO1xuXG4gICAgICAgIGZvcm0uc2VhcmNoV3JhcCB7XG4gICAgICAgICAgICB3aWR0aDogMjMycHg7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjc1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuMyk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJG9wYWNpdHlJbmhlcml0O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIzLCAyMjMsIDIyMywgMC4zKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzMTAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmcxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxMztcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHlJbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogJGhlaWdodDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICR3aWR0aDEwMFBlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJGQtbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvbkFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkemVyb3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJGQtbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAkcGFkZGluZzEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ29XcmFwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bC5oZWFkZXJPcHRpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICRkLWZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiAkZC1ub25lO1xuICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmdaZXJvO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpblplcm87XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI3NXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvblJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJG1hcmdpblplcm8gJG1hcmdpbjE1cHg7XG5cbiAgICAgICAgICAgICAgICAuY291bnQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHdpZHRoMjRweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0MjRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJGQtaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICRwb3NpdGlvbkFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzMTAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxMjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4ICRwYWRkaW5nWmVybztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkd2lkdGgyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0MjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1zbS5iZy1kYXJrLm5hdmJhci1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFdoaXRlQ29sb3IgICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDIxcHggJHBhZGRpbmdaZXJvO1xuXG4gICAgICAgIGEubmF2LWxpbmsge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTJweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgY29sb3I6ICRNYXJvb25Db2xvcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkcG9zaXRpb25SZWxhdGl2ZTtcbiAgICAgICAgICAgIGN1cnNvcjogJGN1cnNvclBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEubmF2LWxpbmsuYWN0aXZlLCBhLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAvLyAmOjpiZWZvcmUge1xuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiAkcG9zaXRpb25BYnNvbHV0ZTtcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAkTWFyb29uQ29sb3I7XG4gICAgICAgICAgICAvLyAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICAgICAgLy8gICAgIGxlZnQ6ICR6ZXJvcHg7XG4gICAgICAgICAgICAvLyAgICAgcmlnaHQ6ICR6ZXJvcHg7XG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAkbWFyZ2luQXV0bztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubW9iaWxlVmlldyB7XG4gICAgICAgIGRpc3BsYXk6ICRkLW5vbmU7XG4gICAgfVxufVxuXG4ubG9nb1dyYXAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIC5sb2dvV3JhcCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICAudG9wQmFyIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHdpZHRoMTAwUGVyO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5zZWFyY2hXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZzEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0MzRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ29XcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkd2lkdGgxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVsLmhlYWRlck9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICRtYXJnaW5aZXJvICRtYXJnaW41cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIC50b3BCYXIge1xuICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmcxMHB4ICRwYWRkaW5nWmVybztcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHdpZHRoMTAwUGVyO1xuXG4gICAgICAgICAgICAgICAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhEaXJlY3Rpb25Db2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zZWFyY2hXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAkbWFyZ2luMTBweCAkbWFyZ2luWmVybyAkbWFyZ2luMTVweCAkbWFyZ2luWmVybztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZzEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0MzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxvZ29XcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVsLmhlYWRlck9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICRtYXJnaW5aZXJvICRtYXJnaW4xMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkd2lkdGgyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRoZWlnaHQyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAkcGFkZGluZ1plcm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIC5tb2JpbGVWaWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICRkLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNrdG9wVmlldyB7XG4gICAgICAgICAgICBkaXNwbGF5OiAkZC1ub25lO1xuICAgICAgICB9XG4gICAgICAgIG5hdi5uYXZiYXIge1xuICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmcxMHB4ICRwYWRkaW5nWmVybyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkTWFyb29uQ29sb3IgMCUsICRCbGFja0NvbG9yIDEwMi41JSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAkemVyb3B4IHNvbGlkICMzMzM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuYnV0dG9uI2Ryb3Bkb3duTWFudWFsIHtcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA3cHg7XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IFxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbmJ1dHRvbiNkcm9wZG93bk1hbnVhbDpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuXG5idXR0b24uZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG59XG4ucHJvZmlsZVRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmltZy5pY29uRWRpdCB7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5pY29uRWRpdFBhc3N3b3Jke1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjJweDtcbn1cblxuLmljb25Mb2dvdXR7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYnMtZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi8qKlxuICAgIDIzIEphbiAyMDIzIFBsYXllciBtb2RhbCBjc3NcbiovXG4uYXVkaW8tcHJvZ3Jlc3MtYXJlYSB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdWRpby1wcm9ncmVzcy1hcmVhIC5hdWRpby1wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cbi5hdWRpby1wcm9ncmVzcy1hcmVhIC5hdWRpby1wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxubmdiLXByb2dyZXNzYmFyLnByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIGhlaWdodDogNnB4O1xufVxuXG4uYXVkaW8tcHJvZ3Jlc3MtYmFyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbn1cblxuLmF1ZGlvLXByb2dyZXNzLWFyZWE6aG92ZXIgLmF1ZGlvLXByb2dyZXNzLWJhcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYXVkaW8tcHJvZ3Jlc3MtYXJlYSAudGltZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGltZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2xzIHtcbiAgICBtYXJnaW46IDQwcHggMCA1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udHJvbHMgI3ByZXYge1xuICAgIG1hcmdpbi1yaWdodDogLTEzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRyb2xzICNuZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogLTEzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRyb2xzICNyZXBlYXQtcGxpc3QsXG4jbW9yZS1tdXNpYyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRyb2xzIC5wbGF5LXBhdXNlIHtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wbGF5LXBhdXNlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWFyZ2luLWxpc3QgLmNoYXB0ZXJsaXN0IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jaGFwdGVybGlzdCBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuLmN1cy1hdWRpby1wcm9ncmVzcyB7XG4gICAgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNXB4OyBsZWZ0OiAtMXB4O3otaW5kZXg6IDk7b3BhY2l0eTogMDsgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWluaS1wbGF5ZXIgLmF1ZGlvSW1nLCBcbi5taW5pLXBsYXllciAubXVzaWNBcHBNYWluLCBcbi5taW5pLXBsYXllciAuY29udHJvbHMgLnNraXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubWluaS1wbGF5ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuLm11c2ljSW1nIHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4ubXVzaWNTeXN0ZW0gaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5jdXN0b20tcGxheWVyLW1haW4ge1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyLXNoYWRvdyB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDcwO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uYmFja0N1c3RvbSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E0MzUzQiAwJSwgIzAwMDAwMCAxMDIuNSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tdXNpY0ltZyB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXVkaW9Db250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXVkaW9Db250ZW50IGg2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDplbmRcbn1cblxuLmF1ZGlvQ29udGVudCBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmF1ZGlvSW1nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxufVxuXG4uYXVkaW9UZXh0UmlnaHQge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubXVzaWNBcHBNYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5iYWNrQ3VzdG9tIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmF1ZGlvVGV4dFJpZ2h0IGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hdWRpb1RleHRSaWdodCBoNiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b24uaWNvbk11c2ljIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmF1ZGlvUGxheWVyIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYXVkaW8ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm11c2ljSWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5idG4tY2xvc2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uZmF2b3VyaXRlIHtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLm5vdEZhdm91cml0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5taW5NYXhJY29ue1xuICAgIG9wYWNpdHk6IDAuNTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlXG59Il19 */"]
});

/***/ }),

/***/ 1418:
/*!***********************************************************!*\
  !*** ./src/app/shared/scroll-top/scroll-top.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": () => (/* binding */ ScrollTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);

// import { DOCUMENT } from "@angular/platform-browser";




const _c0 = function (a0) { return { "show-scrollTop": a0 }; };
class ScrollTopComponent {
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.windowScrolled = false;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
                window.scrollTo(0, 0);
            }
        }
    }
    ngOnInit() {
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
ScrollTopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 3, consts: [[1, "scroll-to-top", 3, "ngClass"], [3, "click"], [1, "fa", "fa-chevron-up"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_1_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass], styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.scroll-to-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #A4353B;\n  border: 1px solid #A4353B;\n  color: #fff;\n  border-radius: 100px;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctc2Nyb2xsVG9wIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc2Nyb2xsLXRvLXRvcCBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNBNDM1M0I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E0MzUzQjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59Il19 */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 9470);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ 1418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__.ScrollTopComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__.ScrollTopComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // BaseUrl: 'http://localhost:3000/api/v1/',
    BaseUrl: 'http://3.136.227.187:3000/api/v1/',
    IMAGE_URL: 'https://audiolasitava.s3.us-east-2.amazonaws.com/',
    tabType: {
        audiobook: "audiobook",
        ebook: "ebook",
        podcast: "podcast"
    },
    bookSearchType: {
        Audiobook: "audiobook",
        Ebook: "ebook",
        Podcast: "podcast"
    },
    firebase: {
        // databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",
        apiKey: "AIzaSyAzcRiMr72GNkuAB4U0KRt92OleiJCCwE0",
        authDomain: "audio-lasitava.firebaseapp.com",
        projectId: "audio-lasitava",
        storageBucket: "audio-lasitava.appspot.com",
        messagingSenderId: "873835543171",
        appId: "1:873835543171:web:9761fff2f7a5e66c20f9b6",
        measurementId: "G-VH64234L96"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
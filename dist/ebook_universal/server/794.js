"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 98250:
/*!****************************************************************!*\
  !*** ./src/app/layout/favourites/favourites-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesRoutingModule": () => (/* binding */ FavouritesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _favourites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.component */ 7359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '',
        component: _favourites_component__WEBPACK_IMPORTED_MODULE_0__.FavouritesComponent,
    },];
class FavouritesRoutingModule {
}
FavouritesRoutingModule.ɵfac = function FavouritesRoutingModule_Factory(t) { return new (t || FavouritesRoutingModule)(); };
FavouritesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FavouritesRoutingModule });
FavouritesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavouritesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7359:
/*!***********************************************************!*\
  !*** ./src/app/layout/favourites/favourites.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesComponent": () => (/* binding */ FavouritesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);









function FavouritesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FavouritesComponent_div_6_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.detailBook(data_r2["bookId"], data_r2["bookType"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9)(3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", data_r2["bookType"].toLowerCase() == "ebook" ? "ebookBtn" : data_r2["bookType"].toLowerCase() == "audiobook" ? "audiobookBtn" : "podcastBtn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["bookType"].toLowerCase() == "ebook" ? "assets/images/openBookIcon.svg" : data_r2["bookType"].toLowerCase() == "audiobook" ? "assets/images/headphoneIcon.svg" : "assets/images/mic.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2.booksDetails.length > 0 ? ctx_r0.IMAGE_URL + data_r2.booksDetails[0].photo : data_r2.podcastDetails.length > 0 ? ctx_r0.IMAGE_URL + data_r2.podcastDetails[0].image : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.booksDetails.length > 0 ? data_r2.booksDetails[0].name : data_r2.podcastDetails[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.booksDetails.length > 0 ? data_r2.booksDetails[0].author : data_r2.podcastDetails[0].author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r0.getRating(data_r2.booksDetails.length > 0 ? data_r2.booksDetails[0].rating : data_r2.podcastDetails[0].rating), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function FavouritesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 16)(5, "div", 17)(6, "div", 18)(7, "div", 9)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 17)(12, "div", 18)(13, "div", 9)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 17)(18, "div", 18)(19, "div", 9)(20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 9)(26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class FavouritesComponent {
    constructor(apiService, router, toastr) {
        this.apiService = apiService;
        this.router = router;
        this.toastr = toastr;
        this.favouriteList = [];
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.totalRecords = 0;
        this.skip = 0;
        this.errorMessage = '';
        this.showSpin = false;
        this.token = '';
    }
    ngOnInit() {
        this.token = localStorage.getItem('authorization');
        if (this.token != null || this.token != undefined) {
            this.getFavouriteList(this.skip);
        }
        // this.getFavouriteList(this.skip);
    }
    getType(event) {
        console.log("Favourite Page");
    }
    //  get favourite book list  //
    getFavouriteList(skip) {
        this.showSpin = true;
        this.apiService.getData(`web/favourite?skip=${skip}&limit=10`).subscribe((res) => {
            this.favouriteList.push(...res.data);
            this.totalRecords = res.totalRecord;
            this.errorMessage = res.data == undefined || res.data.length < 1 ? 'No record found !!!' : '';
            this.showSpin = false;
        }, (error) => {
            this.showSpin = false;
            this.toastr.error(error.error.responseMessage, 'Error!');
            this.errorMessage = error.error.responseMessage;
        });
    }
    //  get book details  //
    detailBook(id, type) {
        if (type.toLowerCase() == src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tabType.podcast) {
            this.router.navigate(['podcast-detail/'], { queryParams: { 'id': id, 'type': type } });
        }
        else {
            this.router.navigate(['detail/'], { queryParams: { 'id': id, 'type': type } });
        }
    }
    //  get book ratoing html  //
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
    //  on scroll pagination  //
    onScroll() {
        if (this.skip == 0 && this.favouriteList.length < 1) {
            this.skip = 0;
        }
        if (this.favouriteList.length != this.totalRecords) {
            this.skip = this.skip + 10;
            setTimeout(() => {
                this.getFavouriteList(this.skip);
            }, 1000);
        }
    }
}
FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
FavouritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FavouritesComponent, selectors: [["app-favourites"]], decls: 11, vars: 4, consts: [[3, "newItemEvent"], [1, "contentPart"], [1, "container"], [1, "productline"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], ["class", "col-sm-6 col-md-3 col-lg-3 mb-5", 4, "ngFor", "ngForOf"], ["class", "contentPart", 4, "ngIf"], [1, "col-sm-6", "col-md-3", "col-lg-3", "mb-5"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [3, "ngClass"], ["alt", "Book icon", 3, "src"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], [1, "ratingWrap", 3, "innerHtml"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "singleProduct", "shimmer"], [1, ""]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newItemEvent", function FavouritesComponent_Template_app_header_newItemEvent_0_listener($event) { return ctx.getType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function FavouritesComponent_Template_div_scrolled_5_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FavouritesComponent_div_6_Template, 13, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FavouritesComponent_div_9_Template, 29, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.favouriteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSpin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollDirective], styles: [".contentPart[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  width: 230px;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.ebookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.audiobookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FF9D0C;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #FF9D0C;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.podcastBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #03B0AE;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #03B0AE;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 346px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 20px 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 15px;\n  color: #000000;\n  opacity: 0.75;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #ebebeb calc(50% - 100px), #c5c5c5 50%, #ebebeb calc(50% + 100px));\n  background-size: 0;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(200% + 200px);\n  bottom: 0;\n  background-image: inherit;\n  animation: move 2s linear infinite;\n}\n@keyframes move {\n  to {\n    transform: translateX(calc(50% + 100px));\n  }\n}\n.productTitleInner[_ngcontent-%COMP%]   h2.shimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n.singleProduct.shimmer[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    min-height: 200px;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: inherit;\n    min-height: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFDUTtFQUNJLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBQUFaO0FBR2dCO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURwQjtBQUdnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFEcEI7QUFHZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRHBCO0FBSW9CO0VBT0ksWUFBQTtFQUNBLGFBQUE7QUFSeEI7QUFZWTtFQUNJLHVCQUFBO0FBVmhCO0FBV2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVRwQjtBQVdnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFUcEI7QUFXZ0I7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFUcEI7QUFVb0I7RUFDSSxpQkFBQTtBQVJ4QjtBQWdCQTtFQUNFLDhHQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFaRjtBQWNBO0VBQ0U7SUFDRSx3Q0FBQTtFQVhGO0FBQ0Y7QUFjQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBWko7QUFjQTtFQUNJLHdCQUFBO0FBWEo7QUFjQTtFQUdZO0lBQ0ksV0FBQTtFQWJkO0VBZ0JzQjtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBZDFCO0FBQ0Y7QUFzQkE7RUFNd0I7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0VBekIxQjtBQUNGIiwiZmlsZSI6ImZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFBhcnQge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdElubmVyIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZWJvb2tCdG4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDgwRkY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLmF1ZGlvYm9va0J0biB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGOUQwQztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjlEMEM7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24ucG9kY2FzdEJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzQjBBRTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM0IwQUU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bC5yYXRpbmdXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2hpbW1lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ViZWJlYiBjYWxjKDUwJSAtIDEwMHB4KSwgI2M1YzVjNSA1MCUsICNlYmViZWIgY2FsYyg1MCUgKyAxMDBweCkpO1xuICBiYWNrZ3JvdW5kLXNpemU6MDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIG92ZXJmbG93OmhpZGRlbjtcbn1cbi5zaGltbWVyOjpiZWZvcmUge1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgcmlnaHQ6MDtcbiAgd2lkdGg6Y2FsYygyMDAlICsgMjAwcHgpO1xuICBib3R0b206MDtcbiAgYmFja2dyb3VuZC1pbWFnZTppbmhlcml0O1xuICBhbmltYXRpb246bW92ZSAycyBsaW5lYXIgaW5maW5pdGU7IFxufVxuQGtleWZyYW1lcyBtb3Zle1xuICB0byB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoY2FsYyg1MCUgKyAxMDBweCkpO1xuICB9XG59XG5cbi5wcm9kdWN0VGl0bGVJbm5lciBoMi5zaGltbWVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2luZ2xlUHJvZHVjdC5zaGltbWVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3RJbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 61794:
/*!********************************************************!*\
  !*** ./src/app/layout/favourites/favourites.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesModule": () => (/* binding */ FavouritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites-routing.module */ 98250);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _favourites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourites.component */ 7359);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class FavouritesModule {
}
FavouritesModule.ɵfac = function FavouritesModule_Factory(t) { return new (t || FavouritesModule)(); };
FavouritesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FavouritesModule });
FavouritesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FavouritesModule, { declarations: [_favourites_component__WEBPACK_IMPORTED_MODULE_2__.FavouritesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] }); })();


/***/ })

};
;
//# sourceMappingURL=794.js.map
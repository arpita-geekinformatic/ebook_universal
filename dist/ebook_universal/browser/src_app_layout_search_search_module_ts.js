"use strict";
(self["webpackChunkebook_universal"] = self["webpackChunkebook_universal"] || []).push([["src_app_layout_search_search_module_ts"],{

/***/ 7538:
/*!********************************************************!*\
  !*** ./src/app/layout/search/search-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRoutingModule": () => (/* binding */ SearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 9710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent,
    },];
class SearchRoutingModule {
}
SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); };
SearchRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9710:
/*!***************************************************!*\
  !*** ./src/app/layout/search/search.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);









function SearchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_div_6_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.detailBook(data_r2["_id"], data_r2["bookType"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8)(3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", data_r2["bookType"].toLowerCase() == "ebook" ? "ebookBtn" : data_r2["bookType"].toLowerCase() == "audiobook" ? "audiobookBtn" : "podcastBtn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["bookType"].toLowerCase() == ctx_r0.ebookSearch ? "assets/images/openBookIcon.svg" : data_r2["bookType"].toLowerCase() == ctx_r0.audiobookSearch ? "assets/images/headphoneIcon.svg" : "assets/images/mic.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["photo"] ? ctx_r0.IMAGE_URL + data_r2["photo"] : data_r2["image"] ? ctx_r0.IMAGE_URL + data_r2["image"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r0.getRating(data_r2.rating), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "div", 18)(8, "div", 19)(9, "div", 20)(10, "div", 8)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 19)(15, "div", 20)(16, "div", 8)(17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 19)(21, "div", 20)(22, "div", 8)(23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19)(27, "div", 20)(28, "div", 8)(29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(router, route, apiService, toastr) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.toastr = toastr;
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.audiobookSearch = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookSearchType.Audiobook;
        this.ebookSearch = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookSearchType.Ebook;
        this.podcastSearch = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookSearchType.Podcast;
        this.skip = 0;
        this.limit = 10;
        this.totalRecords = 0;
        this.searchFilter = '';
        this.searchListData = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.searchFilter = params['searchFilter'] != undefined ? params['searchFilter'] : '';
            if (this.searchFilter && this.searchFilter != undefined) {
                this.searchListData = [];
                this.skip = 0;
                this.getSearchData(this.searchFilter, this.skip, this.limit);
            }
        });
    }
    //  get searched book list  //
    getSearchData(searchFilter, skip, limit) {
        this.apiService.getData(`web/bookSearch?searchFilter=${searchFilter}&skip=${skip}&limit=${limit}`).subscribe((res) => {
            this.searchListData.push(...res.data);
            this.totalRecords = res.totalRecord || 0;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
        });
    }
    //  load book on page scroll  //
    onScroll() {
        if (this.skip == 0 && this.searchListData.length < 1) {
            this.skip = 0;
        }
        if (this.searchListData.length != this.totalRecords) {
            this.skip = this.skip + 10;
            this.getSearchData(this.searchFilter, this.skip, 10);
        }
    }
    //  get book details  //
    detailBook(id, type) {
        this.router.navigate(['detail/'], { queryParams: { 'id': id, 'type': type == 'Audiobook' ? 'audiobooks' : 'ebooks' } });
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
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 9, vars: 3, consts: [[1, "contentPart"], [1, "container"], [1, "productline"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], ["class", "col-sm-6 col-md-3 col-lg-3 mb-5 five-image-row", 4, "ngFor", "ngForOf"], ["class", "contentPart", 4, "ngIf"], [1, "col-sm-6", "col-md-3", "col-lg-3", "mb-5", "five-image-row"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [3, "ngClass"], ["alt", "Book icon", 3, "src"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], [1, "ratingWrap", 3, "innerHtml"], [1, "productTitle"], [1, "d-flex", "justify-content-between", "align-items-center", "productTitleInner", "mb-4"], [1, "shimmer"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "singleProduct", "shimmer"], [1, ""]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function SearchComponent_Template_div_scrolled_5_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SearchComponent_div_6_Template, 13, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 32, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.searchListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchListData.length != ctx.totalRecords && ctx.searchListData.length != 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollDirective], styles: [".contentPart[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  width: 230px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.ebookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.audiobookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FF9D0C;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #FF9D0C;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.podcastBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #03B0AE;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #03B0AE;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 346px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 20px 20px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 15px;\n  color: #000000;\n  opacity: 0.75;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #ebebeb calc(50% - 100px), #c5c5c5 50%, #ebebeb calc(50% + 100px));\n  background-size: 0;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(200% + 200px);\n  bottom: 0;\n  background-image: inherit;\n  animation: move 2s linear infinite;\n}\n@keyframes move {\n  to {\n    transform: translateX(calc(50% + 100px));\n  }\n}\n.productTitleInner[_ngcontent-%COMP%]   h2.shimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n.singleProduct.shimmer[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n@media only screen and (max-width: 1024px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    min-height: 200px;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: inherit;\n    min-height: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNRO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBQVo7QUFnQmdCO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQWRwQjtBQWdCZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBZHBCO0FBZ0JnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFkcEI7QUFrQm9CO0VBT0ksWUFBQTtFQUNBLGFBQUE7QUF0QnhCO0FBMEJZO0VBQ0ksdUJBQUE7QUF4QmhCO0FBeUJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUF2QnBCO0FBeUJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUF2QnBCO0FBeUJnQjtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXZCcEI7QUF3Qm9CO0VBQ0ksaUJBQUE7QUF0QnhCO0FBOEJBO0VBQ0UsOEdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBM0JGO0FBNkJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBMUJGO0FBNEJBO0VBQ0U7SUFDRSx3Q0FBQTtFQXpCRjtBQUNGO0FBNEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUExQko7QUE0QkE7RUFDSSx3QkFBQTtBQXpCSjtBQTZCQTtFQUdZO0lBQ0ksV0FBQTtFQTVCZDtBQUNGO0FBaUNBO0VBTXdCO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFwQzFCO0FBQ0Y7QUE2Q0E7RUFNd0I7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0VBaEQxQjtBQUNGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50UGFydCB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzcHggM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDM0NnB4O1xuXG5cbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbi5ib29rQnRuIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMzA4MEZGO1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwODBGRjtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5lYm9va0J0biB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwODBGRjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDgwRkY7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24uYXVkaW9ib29rQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkY5RDBDO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGOUQwQztcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wb2RjYXN0QnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNCMEFFO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzQjBBRTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9kdWN0VHh0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHggMjBweDtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwucmF0aW5nV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNoaW1tZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYmViZWIgY2FsYyg1MCUgLSAxMDBweCksICNjNWM1YzUgNTAlLCAjZWJlYmViIGNhbGMoNTAlICsgMTAwcHgpKTtcbiAgYmFja2dyb3VuZC1zaXplOjA7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG4uc2hpbW1lcjo6YmVmb3JlIHtcbiAgY29udGVudDpcIlwiO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHJpZ2h0OjA7XG4gIHdpZHRoOmNhbGMoMjAwJSArIDIwMHB4KTtcbiAgYm90dG9tOjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6aW5oZXJpdDtcbiAgYW5pbWF0aW9uOm1vdmUgMnMgbGluZWFyIGluZmluaXRlOyBcbn1cbkBrZXlmcmFtZXMgbW92ZXtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoNTAlICsgMTAwcHgpKTtcbiAgfVxufVxuXG4ucHJvZHVjdFRpdGxlSW5uZXIgaDIuc2hpbW1lciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNpbmdsZVByb2R1Y3Quc2hpbW1lciB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RsaW5le1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICB9ICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1629:
/*!************************************************!*\
  !*** ./src/app/layout/search/search.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 7538);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ 9710);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_layout_search_search_module_ts.js.map
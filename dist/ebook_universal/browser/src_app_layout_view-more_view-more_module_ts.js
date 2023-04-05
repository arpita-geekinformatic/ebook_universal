"use strict";
(self["webpackChunkebook_universal"] = self["webpackChunkebook_universal"] || []).push([["src_app_layout_view-more_view-more_module_ts"],{

/***/ 7462:
/*!**************************************************************!*\
  !*** ./src/app/layout/view-more/view-more-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreRoutingModule": () => (/* binding */ ViewMoreRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _view_more_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-more.component */ 1568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
        path: '',
        component: _view_more_component__WEBPACK_IMPORTED_MODULE_0__.ViewMoreComponent,
    },];
class ViewMoreRoutingModule {
}
ViewMoreRoutingModule.ɵfac = function ViewMoreRoutingModule_Factory(t) { return new (t || ViewMoreRoutingModule)(); };
ViewMoreRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewMoreRoutingModule });
ViewMoreRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewMoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1568:
/*!*********************************************************!*\
  !*** ./src/app/layout/view-more/view-more.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreComponent": () => (/* binding */ ViewMoreComponent)
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












function ViewMoreComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewMoreComponent_div_11_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.detailBook(data_r2["_id"], data_r2["bookType"])); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", data_r2["bookType"].toLowerCase() == "ebook" ? "ebookBtn" : "audiobookBtn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["bookType"].toLowerCase() == "ebook" ? "assets/images/openBookIcon.svg" : "assets/images/headphoneIcon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2["photo"] ? ctx_r0.IMAGE_URL + data_r2["photo"] : "assets/images/smallDefaultBook.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
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
function ViewMoreComponent_div_14_Template(rf, ctx) { if (rf & 1) {
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
class ViewMoreComponent {
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
        this.category = '';
        this.updatetype = '';
        this.id = '';
        this.IMAGE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMAGE_URL;
        this.skip = 0;
        this.totalRecords = 0;
        this.showSpin = true;
        this.errorMessage = '';
        this.pageType = '';
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
        this.route.queryParams.subscribe(params => {
            this.category = params['category'] != undefined ? params['category'] : null;
            this.updatetype = params['type'] != undefined ? params['type'] : null;
            this.id = params['id'] != undefined ? params['id'] : null;
            this.pageType = params['pageType'] != undefined ? params['pageType'] : null;
            localStorage.setItem('type', this.updatetype);
            setTimeout(() => {
                if ((this.category != undefined) && (this.updatetype != undefined)) {
                    this.updateAudioBook(this.updatetype, this.category, this.skip, 8);
                }
                if ((this.id != undefined) && ((this.category != undefined) || (this.pageType == 'category'))) {
                    this.getCategoryByBook(this.id, this.skip, 8);
                }
                if ((this.id != undefined) && (this.updatetype == 'genre')) {
                    this.getBookByGenre(this.id, this.skip, 8);
                }
            }, 4000);
        });
    }
    //  get audioBook data  //
    updateAudioBook(type, category, skip, limit) {
        this.showSpin = true;
        this.tabType = type;
        var api = this.apiService.getData(`web/dataList/?type=${type}&category=${category}&skip=${skip}&limit=${limit}`);
        api.subscribe((result) => {
            this.dataList.push(...result.data);
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
            this.showSpin = false;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
            this.showSpin = false;
        });
    }
    //  get book details  //
    detailBook(id, type) {
        if (this.id != undefined) {
            this.router.navigate(['detail/'], { queryParams: { 'id': id, 'type': type == 'Audiobook' ? 'audiobook' : 'ebook' } });
        }
        else {
            this.router.navigate(['detail/'], { queryParams: { 'id': id, 'type': this.tabType } });
        }
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
    getType(event) {
        this.tabType = event;
        if (event === 'audiobooks') {
            this.dataList = [];
            this.skip = 0;
            this.router.navigate(['/view-more/'], { queryParams: { 'type': event, 'category': this.category } });
        }
        if (event === 'ebooks') {
            this.dataList = [];
            this.skip = 0;
            this.router.navigate(['/view-more/'], { queryParams: { 'type': event, 'category': this.category } });
        }
    }
    onScroll() {
        this.showSpin = true;
        if (this.skip == 0 && this.dataList.length < 1) {
            this.skip = 0;
        }
        if (this.dataList.length != this.totalRecords) {
            this.skip = this.skip + 10;
            setTimeout(() => {
                if (this.category != undefined) {
                    this.updateAudioBook(this.updatetype, this.category, this.skip, 10);
                }
                if (this.id != undefined) {
                    this.getCategoryByBook(this.id, this.skip, 10);
                }
                if (this.id != undefined && this.updatetype == 'genre') {
                    this.getBookByGenre(this.id, this.skip, 10);
                }
            }, 1000);
        }
        if ((this.totalRecords != 0) && (this.dataList.length == this.totalRecords)) {
            this.showSpin = false;
        }
    }
    getCategoryByBook(id, skip, limit) {
        this.showSpin = true;
        var api = this.apiService.getData(`web/bookByCategory/${id}?skip=${skip}&limit=${limit}`);
        api.subscribe((result) => {
            this.dataList.push(...result.data);
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
            this.showSpin = false;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
            this.showSpin = false;
        });
    }
    getBookByGenre(id, skip, limit) {
        this.showSpin = true;
        var api = this.apiService.getData(`web/bookByGenre/${id}?skip=${skip}&limit=${limit}`);
        api.subscribe((result) => {
            this.dataList.push(...result.data);
            this.totalRecords = result.totalRecord;
            this.errorMessage = result.data == undefined || result.data.length < 1 ? 'No record found !!!' : '';
            this.showSpin = false;
        }, (error) => {
            this.toastr.error(error.error.responseMessage, 'Error!');
            this.showSpin = false;
        });
    }
}
ViewMoreComponent.ɵfac = function ViewMoreComponent_Factory(t) { return new (t || ViewMoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
ViewMoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewMoreComponent, selectors: [["app-view-more"]], decls: 16, vars: 7, consts: [[3, "newItemEvent"], [1, "contentPart"], [1, "container"], [1, "productTitle"], [1, "d-flex", "justify-content-between", "align-items-center", "productTitleInner", "mb-4"], [1, "productline"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], ["class", "col-md-4 col-sm-12 mb-5 five-image-row", 4, "ngFor", "ngForOf"], ["class", "contentPart", 4, "ngIf"], [1, "col-md-4", "col-sm-12", "mb-5", "five-image-row"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [3, "ngClass"], ["alt", "Book icon", 3, "src"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], ["placement", "top", 3, "ngbTooltip"], [1, "ratingWrap", 3, "innerHtml"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "singleProduct", "shimmer"], [1, ""]], template: function ViewMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newItemEvent", function ViewMoreComponent_Template_app_header_newItemEvent_0_listener($event) { return ctx.getType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function ViewMoreComponent_Template_div_scrolled_10_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ViewMoreComponent_div_11_Template, 13, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ViewMoreComponent_div_14_Template, 29, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.category == "Recomendations" ? "Ieteikumi" : ctx.category == "Free" ? "Bezmaksas" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, ctx.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSpin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe], styles: [".contentPart[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  width: 230px;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.ebookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.audiobookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FF9D0C;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #FF9D0C;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 346px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 10px 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 15px;\n  color: #000000;\n  opacity: 0.75;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]     li {\n  margin-right: 5px;\n}\n.five-image-row[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-top: 10px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #ebebeb calc(50% - 100px), #c5c5c5 50%, #ebebeb calc(50% + 100px));\n  background-size: 0;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(200% + 200px);\n  bottom: 0;\n  background-image: inherit;\n  animation: move 2s linear infinite;\n}\n@keyframes move {\n  to {\n    transform: translateX(calc(50% + 100px));\n  }\n}\n.productTitleInner[_ngcontent-%COMP%]   h2.shimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n.singleProduct.shimmer[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-top: 10px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    min-height: 200px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: inherit;\n    min-height: inherit;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 12px 4px 12px;\n  }\n  img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctbW9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNRO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FBQVo7QUFHZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRHBCO0FBR2dCO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURwQjtBQUlvQjtFQUtJLFlBQUE7RUFDQSxhQUFBO0FBTnhCO0FBVVk7RUFDSSx1QkFBQTtBQVJoQjtBQVNnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBwQjtBQVNnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBwQjtBQVNnQjtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVBwQjtBQVFvQjtFQUNJLGlCQUFBO0FBTnhCO0FBYUE7RUFDSSxpQkFBQTtBQVZKO0FBY0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWNBO0VBQ0UsOEdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFhQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQVZGO0FBWUE7RUFDRTtJQUNFLHdDQUFBO0VBVEY7QUFDRjtBQVlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFWSjtBQVlBO0VBQ0ksd0JBQUE7QUFUSjtBQWFBO0VBQ0k7SUFDSSxVQUFBO0VBVk47QUFDRjtBQVlBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUFWTjtBQUNGO0FBYUE7RUFPd0I7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VBakIxQjtBQUNGO0FBMkJBO0VBTXdCO0lBQ0ksbUJBQUE7SUFDQSxtQkFBQTtFQTlCMUI7QUFDRjtBQXVDQTtFQUNJO0lBQ0ksVUFBQTtFQXJDTjtFQXVDRTtJQUNJLHNCQUFBO0VBckNOO0VBdUNFO0lBQ0ksV0FBQTtFQXJDTjtFQWlEOEI7SUFDSSxXQUFBO0VBL0NsQztBQUNGO0FBMERBO0VBQ0k7SUFDSSxXQUFBO0VBeEROO0FBQ0YiLCJmaWxlIjoidmlldy1tb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRQYXJ0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTAwJVxuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdElubmVyIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZWJvb2tCdG4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDgwRkY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLmF1ZGlvYm9va0J0biB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGOUQwQztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjlEMEM7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZHVjdFR4dCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4IDEycHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLnJhdGluZ1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ucHJvZHVjdFR4dCB1bC5yYXRpbmdXcmFwIDo6bmctZGVlcCBsaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgXG59XG5cbi5maXZlLWltYWdlLXJvdyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2hpbW1lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ViZWJlYiBjYWxjKDUwJSAtIDEwMHB4KSwgI2M1YzVjNSA1MCUsICNlYmViZWIgY2FsYyg1MCUgKyAxMDBweCkpO1xuICBiYWNrZ3JvdW5kLXNpemU6MDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIG92ZXJmbG93OmhpZGRlbjtcbn1cbi5zaGltbWVyOjpiZWZvcmUge1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgcmlnaHQ6MDtcbiAgd2lkdGg6Y2FsYygyMDAlICsgMjAwcHgpO1xuICBib3R0b206MDtcbiAgYmFja2dyb3VuZC1pbWFnZTppbmhlcml0O1xuICBhbmltYXRpb246bW92ZSAycyBsaW5lYXIgaW5maW5pdGU7IFxufVxuQGtleWZyYW1lcyBtb3Zle1xuICB0byB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoY2FsYyg1MCUgKyAxMDBweCkpO1xuICB9XG59XG5cbi5wcm9kdWN0VGl0bGVJbm5lciBoMi5zaGltbWVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2luZ2xlUHJvZHVjdC5zaGltbWVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG4vLyBTdGFydCBNZWRpYSBRdWVyeVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5maXZlLWltYWdlLXJvdyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuZml2ZS1pbWFnZS1yb3cge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuXG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdElubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdElubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuZml2ZS1pbWFnZS1yb3cge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAuY29udGVudFBhcnQgLnByb2R1Y3RsaW5lIC5zaW5nbGVQcm9kdWN0IC5wcm9kdWN0VHh0IHtcbiAgICAgICAgcGFkZGluZzogMTJweCA0cHggMTJweDtcbiAgICB9XG4gICAgaW1nLnN0YXJMaW5lIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgfVxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5wcm9kdWN0bGluZSB7XG4gICAgICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3RJbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgye1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLnJhdGluZ1dyYXAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3RhckxpbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5maXZlLWltYWdlLXJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6272:
/*!******************************************************!*\
  !*** ./src/app/layout/view-more/view-more.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreModule": () => (/* binding */ ViewMoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _view_more_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-more-routing.module */ 7462);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _view_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-more.component */ 1568);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class ViewMoreModule {
}
ViewMoreModule.ɵfac = function ViewMoreModule_Factory(t) { return new (t || ViewMoreModule)(); };
ViewMoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ViewMoreModule });
ViewMoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _view_more_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewMoreRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViewMoreModule, { declarations: [_view_more_component__WEBPACK_IMPORTED_MODULE_2__.ViewMoreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _view_more_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewMoreRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__.InfiniteScrollModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_layout_view-more_view-more_module_ts.js.map
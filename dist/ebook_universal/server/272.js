"use strict";
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 87462:
/*!**************************************************************!*\
  !*** ./src/app/layout/view-more/view-more-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreRoutingModule": () => (/* binding */ ViewMoreRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _view_more_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-more.component */ 21568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




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

/***/ 21568:
/*!*********************************************************!*\
  !*** ./src/app/layout/view-more/view-more.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreComponent": () => (/* binding */ ViewMoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);












function ViewMoreComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewMoreComponent_div_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.detailBook(data_r2["_id"], data_r2["bookType"])); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.tabType == "ebooks" ? "assets/images/openBookIcon.svg" : "assets/images/headphoneIcon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
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
function ViewMoreComponent_div_13_Template(rf, ctx) { if (rf & 1) {
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
        this.showSpin = false;
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
            setTimeout(() => {
                if ((this.category != undefined) && (this.updatetype != undefined)) {
                    this.updateAudioBook(this.updatetype, this.category, this.skip, 8);
                }
                if ((this.id != undefined) && (this.category != undefined)) {
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
            this.router.navigate(['detail/'], { queryParams: { 'id': id, 'type': type == 'Audiobook' ? 'audiobooks' : 'ebooks' } });
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
ViewMoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewMoreComponent, selectors: [["app-view-more"]], decls: 15, vars: 5, consts: [[3, "newItemEvent"], [1, "contentPart"], [1, "container"], [1, "productTitle"], [1, "d-flex", "justify-content-between", "align-items-center", "productTitleInner", "mb-4"], [1, "productline"], ["infiniteScroll", "", 1, "row", 3, "infiniteScrollDistance", "scrolled"], ["class", "col-md-4 col-sm-12 mb-5 five-image-row", 4, "ngFor", "ngForOf"], ["class", "contentPart", 4, "ngIf"], [1, "col-md-4", "col-sm-12", "mb-5", "five-image-row"], [1, "singleProduct", 3, "click"], [1, "singleProductInner"], [1, "bookBtn", "yellow"], ["alt", "Book icon", 3, "src"], [1, "productImage"], ["alt", "prduct Image", 3, "src"], [1, "productTxt"], ["placement", "top", 3, "ngbTooltip"], [1, "ratingWrap", 3, "innerHtml"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "singleProduct", "shimmer"], [1, ""]], template: function ViewMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newItemEvent", function ViewMoreComponent_Template_app_header_newItemEvent_0_listener($event) { return ctx.getType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function ViewMoreComponent_Template_div_scrolled_9_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ViewMoreComponent_div_10_Template, 13, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ViewMoreComponent_div_13_Template, 29, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("infiniteScrollDistance", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSpin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__.InfiniteScrollDirective], styles: [".contentPart[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 0px 3px 3px;\n  height: 100%;\n  position: relative;\n  width: 230px;\n  cursor: pointer;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   button.bookBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #3080FF;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  border: 1px solid #3080FF;\n  right: 0;\n  top: -20px;\n  z-index: 3;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 346px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n  padding: 12px 10px 12px;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 15px;\n  letter-spacing: -0.03em;\n  color: #000000;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 15px;\n  color: #000000;\n  opacity: 0.75;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: relative;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  margin-bottom: 0;\n}\n.contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]     li {\n  margin-right: 5px;\n}\n.five-image-row[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-top: 10px;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #ebebeb calc(50% - 100px), #c5c5c5 50%, #ebebeb calc(50% + 100px));\n  background-size: 0;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(200% + 200px);\n  bottom: 0;\n  background-image: inherit;\n  animation: move 2s linear infinite;\n}\n@keyframes move {\n  to {\n    transform: translateX(calc(50% + 100px));\n  }\n}\n.productTitleInner[_ngcontent-%COMP%]   h2.shimmer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n.singleProduct.shimmer[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-top: 10px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 200px;\n    min-height: 200px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: inherit;\n    min-height: inherit;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 12px 4px 12px;\n  }\n  img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .singleProductInner[_ngcontent-%COMP%]   .productImage[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   ul.ratingWrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img.starLine[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .five-image-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctbW9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNRO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FBQVo7QUFHZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRHBCO0FBSW9CO0VBS0ksWUFBQTtFQUNBLGFBQUE7QUFOeEI7QUFVWTtFQUNJLHVCQUFBO0FBUmhCO0FBU2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUHBCO0FBU2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUHBCO0FBU2dCO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBUHBCO0FBUW9CO0VBQ0ksaUJBQUE7QUFOeEI7QUFhQTtFQUNJLGlCQUFBO0FBVko7QUFjQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQVhKO0FBY0E7RUFDRSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRjtBQWFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBVkY7QUFZQTtFQUNFO0lBQ0Usd0NBQUE7RUFURjtBQUNGO0FBWUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVZKO0FBWUE7RUFDSSx3QkFBQTtBQVRKO0FBYUE7RUFDSTtJQUNJLFVBQUE7RUFWTjtBQUNGO0FBWUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQVZOO0FBQ0Y7QUFhQTtFQU93QjtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFqQjFCO0FBQ0Y7QUEyQkE7RUFNd0I7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0VBOUIxQjtBQUNGO0FBdUNBO0VBQ0k7SUFDSSxVQUFBO0VBckNOO0VBdUNFO0lBQ0ksc0JBQUE7RUFyQ047RUF1Q0U7SUFDSSxXQUFBO0VBckNOO0VBaUQ4QjtJQUNJLFdBQUE7RUEvQ2xDO0FBQ0Y7QUEwREE7RUFDSTtJQUNJLFdBQUE7RUF4RE47QUFDRiIsImZpbGUiOiJ2aWV3LW1vcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFBhcnQge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAuc2luZ2xlUHJvZHVjdCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5ib29rQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzA4MEZGO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwODBGRjtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9kdWN0VHh0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweDtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwucmF0aW5nV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5wcm9kdWN0VHh0IHVsLnJhdGluZ1dyYXAgOjpuZy1kZWVwIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBcbn1cblxuLmZpdmUtaW1hZ2Utcm93IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaGltbWVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWJlYmViIGNhbGMoNTAlIC0gMTAwcHgpLCAjYzVjNWM1IDUwJSwgI2ViZWJlYiBjYWxjKDUwJSArIDEwMHB4KSk7XG4gIGJhY2tncm91bmQtc2l6ZTowO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuLnNoaW1tZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6XCJcIjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDowO1xuICByaWdodDowO1xuICB3aWR0aDpjYWxjKDIwMCUgKyAyMDBweCk7XG4gIGJvdHRvbTowO1xuICBiYWNrZ3JvdW5kLWltYWdlOmluaGVyaXQ7XG4gIGFuaW1hdGlvbjptb3ZlIDJzIGxpbmVhciBpbmZpbml0ZTsgXG59XG5Aa2V5ZnJhbWVzIG1vdmV7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDUwJSArIDEwMHB4KSk7XG4gIH1cbn1cblxuLnByb2R1Y3RUaXRsZUlubmVyIGgyLnNoaW1tZXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaW5nbGVQcm9kdWN0LnNoaW1tZXIge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbn1cbi8vIFN0YXJ0IE1lZGlhIFF1ZXJ5XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLmZpdmUtaW1hZ2Utcm93IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5maXZlLWltYWdlLXJvdyB7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgLnNpbmdsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0SW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5maXZlLWltYWdlLXJvdyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5jb250ZW50UGFydCAucHJvZHVjdGxpbmUgLnNpbmdsZVByb2R1Y3QgLnByb2R1Y3RUeHQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDRweCAxMnB4O1xuICAgIH1cbiAgICBpbWcuc3RhckxpbmUge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICB9XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAuc2luZ2xlUHJvZHVjdElubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFR4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwucmF0aW5nV3JhcCBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdGFyTGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmZpdmUtaW1hZ2Utcm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 36272:
/*!******************************************************!*\
  !*** ./src/app/layout/view-more/view-more.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMoreModule": () => (/* binding */ ViewMoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _view_more_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-more-routing.module */ 87462);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _view_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-more.component */ 21568);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







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

};
;
//# sourceMappingURL=272.js.map
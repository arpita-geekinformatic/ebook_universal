"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 1440:
/*!********************************************************************!*\
  !*** ./src/app/layout/ebook-reader/ebook-reader-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EbookReaderRoutingModule": () => (/* binding */ EbookReaderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ebook_reader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ebook-reader.component */ 68181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _ebook_reader_component__WEBPACK_IMPORTED_MODULE_0__.EbookReaderComponent,
    },
];
class EbookReaderRoutingModule {
}
EbookReaderRoutingModule.ɵfac = function EbookReaderRoutingModule_Factory(t) { return new (t || EbookReaderRoutingModule)(); };
EbookReaderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EbookReaderRoutingModule });
EbookReaderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EbookReaderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 68181:
/*!***************************************************************!*\
  !*** ./src/app/layout/ebook-reader/ebook-reader.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EbookReaderComponent": () => (/* binding */ EbookReaderComponent)
/* harmony export */ });
/* harmony import */ var _home_gt0637_Desktop_Arpita_E_book_ebook_universal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 49837);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);









function EbookReaderComponent_carousel_3_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "slide", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("alt", "slide ", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function EbookReaderComponent_carousel_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeSlideChange", function EbookReaderComponent_carousel_3_Template_carousel_activeSlideChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.activeSlideIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EbookReaderComponent_carousel_3_slide_1_Template, 2, 2, "slide", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeSlide", ctx_r0.activeSlideIndex)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.images);
  }
}

function EbookReaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function EbookReaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EbookReaderComponent_div_5_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.prevSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EbookReaderComponent_div_5_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.nextSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.activeSlideIndex + 1, " of ", ctx_r2.totalPages, "");
  }
}

class EbookReaderComponent {
  constructor(route, _sanitizer, apiService) {
    this.route = route;
    this._sanitizer = _sanitizer;
    this.apiService = apiService;
    this.activeSlide = 0;
    this.totalPages = 0;
    this.loadIndex = 0;
    this.images = [];
    this.interval = false;
    this.activeSlideIndex = 0;
    this.showSpin = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updateid = params['id'] != undefined ? params['id'] : null;

      if (params['id'] != undefined) {
        this.detailId = params['id'];
        this.urlType = params['urlType'];
        this.chapterName = params['chapterName'];
        this.getPdfData(this.detailId, this.urlType, this.chapterName);
      }
    });
  }

  getPdfData(id, urlType, chapterName) {
    var _this = this;

    return (0,_home_gt0637_Desktop_Arpita_E_book_ebook_universal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showSpin = true;
      let result;

      if (urlType == 'bookFragment') {
        result = yield _this.apiService.getData(`web/eBook/bookFragment-pdf-data/${id}?index=${_this.loadIndex}&urlType=${urlType}&chapterName=${chapterName}`).toPromise();
      } else {
        result = yield _this.apiService.getData(`web/eBook/pdf-data/${id}?index=${_this.loadIndex}&urlType=${urlType}&chapterName=${chapterName}`).toPromise();
      }

      if (result) {
        for (let iterator of result.pdfData) {
          _this.images.push(_this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + iterator));
        }

        _this.totalPages = result.totalPages;
        _this.loadIndex = result.index;
        _this.showSpin = false;
      }
    })();
  }

  prevSlide() {
    if (this.activeSlideIndex != 0) {
      this.activeSlideIndex = this.activeSlideIndex - 1;
    }
  }

  nextSlide() {
    if (this.activeSlideIndex != this.images.length - 1) {
      this.activeSlideIndex = this.activeSlideIndex + 1;

      if (this.activeSlideIndex == 3) {
        this.loadIndex += 1; // this.getPdfData(this.detailId)
      }
    }
  }

}

EbookReaderComponent.ɵfac = function EbookReaderComponent_Factory(t) {
  return new (t || EbookReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};

EbookReaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EbookReaderComponent,
  selectors: [["app-ebook-reader"]],
  decls: 6,
  vars: 3,
  consts: [[1, "contentPart"], [1, "pdf-container", "mt-5", "container"], [3, "activeSlide", "interval", "activeSlideChange", 4, "ngIf"], ["class", "spinner-img", 4, "ngIf"], ["class", "pdf-footer", 4, "ngIf"], [3, "activeSlide", "interval", "activeSlideChange"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [2, "margin", "0 auto", "max-width", "100%", "display", "block", 3, "src", "alt"], [1, "spinner-img"], ["src", "assets/images/loading-gif.gif", "alt", "", "srcset", "", 2, "width", "70px", "height", "70px", "margin", "0 auto", "display", "block"], [1, "pdf-footer"], [1, "pdf-footer__mini"], [3, "click"], ["src", "assets/images/left.png", "alt", ""], ["src", "assets/images/right.png", "alt", ""]],
  template: function EbookReaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EbookReaderComponent_carousel_3_Template, 2, 3, "carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EbookReaderComponent_div_4_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EbookReaderComponent_div_5_Template, 8, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSpin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpin);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__.SlideComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap\");\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n  color: #fff;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n}\na[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  transition: 0.5s all ease-in-out;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  \n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  height: 500px;\n  background-color: #FFF2CC;\n  margin: 70px 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n  padding: 0 0 10% 0;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 52px;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  text-transform: capitalize;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n  padding: 18px 35px;\n  margin-right: 15px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: transparent;\n  padding: 18px 35px;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 2px solid #000;\n  border-radius: 100px;\n  background: #000;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  width: 85%;\n  display: flex;\n  justify-content: flex-end;\n}\n.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transform: rotateZ(10deg);\n  border: 20px solid #fff;\n  max-height: 590px;\n  min-height: 590px;\n}\nul.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  position: relative;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  background-image: url('arrowLeft.svg');\n  position: absolute;\n  content: \"\";\n  right: -7px;\n  width: 14px;\n  height: 9px;\n  background-size: 14px 10px;\n  transform: translateY(-50%);\n  top: 50%;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #A4353B;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n  padding: 50px 0 120px 0;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: auto;\n  padding: 0 15px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 20px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 40px 0 70px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n  top: 50%;\n}\n.offerSection[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n.offerSection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 440px;\n  background: #A4353B;\n  top: 55px;\n  bottom: 0;\n  z-index: -1;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 46px;\n  line-height: 46px;\n  color: #FFFFFF;\n  margin: 20px 0;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #FFFEFE;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 220px;\n  height: 57px;\n  background: transparent;\n  font-weight: 700;\n  transition: 0.5s all ease-in-out;\n}\n.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%] {\n  padding: 4px;\n}\nfooter.footerWrapper[_ngcontent-%COMP%] {\n  padding-bottom: 70px;\n}\n.padding100[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 18px;\n  color: #333333;\n  margin-bottom: 25px;\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 33px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 16px;\n  color: #A4353B;\n  cursor: pointer;\n}\n\n\n@media (min-width: 100px) {\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\n@media (min-width: 1500px) {\n  .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    max-width: 1440px;\n  }\n}\n@media only screen and (max-width: 1499px) {\n  .offerSection[_ngcontent-%COMP%]::after {\n    height: 400px;\n  }\n}\n@media only screen and (max-width: 1399px) {\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 350px;\n    top: 45px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 26px;\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 520px;\n    min-height: 520px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 5% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n    line-height: 44px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 420px;\n    min-height: 420px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 280px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n    margin: 12px 0;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0 40px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding: 3% 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 15px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 320px;\n    min-height: 320px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    height: 250px;\n    top: 10px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    margin: 8px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 14px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 200px;\n    height: 42px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    margin-bottom: 5px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 5px !important;\n  }\n}\n@media only screen and (max-width: 850px) {\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n    margin-top: 1.5rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%] {\n    position: inherit;\n    left: 0;\n    transform: none;\n    top: 0;\n    right: auto;\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: cover;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%] {\n    padding-bottom: 30px !important;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%] {\n    bottom: 0px;\n    justify-content: center;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    background: #A4353B;\n    padding: 30px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 36px;\n  }\n}\n.spinner-img[_ngcontent-%COMP%] {\n  height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pdf-footer[_ngcontent-%COMP%] {\n  background-color: rgb(231, 231, 231);\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n  z-index: 9999;\n}\n.pdf-footer__mini[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  font-size: 24px;\n}\n.pdf-footer__mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 20px;\n  cursor: pointer;\n}\n.pdf-footer__mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYmFsZXMuc2NzcyIsImVib29rLXJlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2SkFBQTtBQUdSO0VBQ0ksWUN1R1M7RUR0R1QsV0NzQlM7QUN2QmI7QUZJQTtFQUNJLFlDa0dTO0VEakdULFdDaUJTO0FDbEJiO0FGSUE7RUFDSSxZQzZGUztFRDVGVCxXQ1lTO0FDYmI7QUZJQTtFQUNJLFlDd0ZTO0VEdkZULFdDT1M7QUNSYjtBRklBO0VBQ0ksb0JDc0NjO0FDdkNsQjtBRklBOzs7RUFHSSxnQ0FBQTtBRURKO0FGSUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FFREo7QUZNSTtFQUVJLDRCQ1hhO0VEWWIsa0NBQUE7RUFDQSxzQkMrRlM7RUQ5RlQsYUNpQ007RURoQ04seUJBQUE7RUFDQSxjQUFBO0FFSlI7QUZNUTtFQUNJLGtCQUFBO0FFSlo7QUZPWTtFQUNJLGdCQ2NBO0VEYkEsZUM5Q1A7RUQrQ08saUJDdkNDO0VEd0NELHVCQUFBO0VBQ0EseUJDb0ZBO0VEbkZBLFdDaENIO0FDMkJiO0FGUVk7RUFDSSxnQkNNQTtFRExBLGVDckRQO0VEc0RPLGlCQzNDQztFRDRDRCwwQkM2RUM7RUQ1RUQsV0N4Q0g7QUNrQ2I7QUZTWTtFQUNJLGdCQ0pBO0VES0EsZUNoRVA7RURpRU8saUJDckRDO0VEc0RELHVCQUFBO0VBQ0EsMEJDb0VDO0VEbkVELFdDakRIO0FDMENiO0FGVVk7RUFDSSxnQkNYQTtFRFlBLGVDNUVQO0VENkVPLGlCQ2pFQztFRGtFRCxrQkNvQ0g7RURuQ0csdUJBQUE7RUFDQSxXQzNESDtFRDRERyxzQkFBQTtFQUNBLG9CQzZCRTtFRDVCRixnQkM3REg7RUQ4REcsa0JBQUE7RUFDQSxrQkFBQTtBRVJoQjtBRlNnQjtFQUNJLDZCQzlESTtFRCtESixXQ2xFUDtBQzJEYjtBRldZO0VBQ0ksZ0JDN0JBO0VEOEJBLGVDOUZQO0VEK0ZPLGlCQ25GQztFRG9GRCxrQkNrQkg7RURqQkcsdUJBQUE7RUFDQSxXQzVFSDtFRDZFRyxzQkFBQTtFQUNBLG9CQ1dFO0VEVkYsdUJDNUVRO0VENkVSLGtCQUFBO0FFVGhCO0FGVWdCO0VBQ0ksV0NuRlA7RURvRk8sc0JBQUE7RUFDQSxvQkNLRjtFREpFLGdCQ3JGUDtBQzZFYjtBRmFRO0VBQ0ksa0JDS087RURKUCxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBRVhaO0FGYVk7RUFDSSxlQ3JDRjtFRHNDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRVhoQjtBRnNCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FFbkJKO0FGb0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FFbEJSO0FGbUJRO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtBRWpCWjtBRm9CWTtFQUNJLGFBQUE7QUVsQmhCO0FGcUJRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FFbkJaO0FGcUJRO0VBQ0ksV0FBQTtBRW5CWjtBRjJCSTtFQUNJLHVCQUFBO0FFeEJSO0FGMEJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRXhCWjtBRjBCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FFekJoQjtBRjRCWTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUUzQmhCO0FGK0JRO0VBQ0ksZUFBQTtBRTdCWjtBRitCWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBRTlCaEI7QUZpQ1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBRWhDaEI7QUZvQ1E7RUFDSSxrQkFBQTtBRWxDWjtBRm9DWTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtBRWxDaEI7QUZxQ1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7QUVuQ2hCO0FGOENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FFM0NKO0FGNkNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRTNDUjtBRitDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUU3Q1o7QUZnRFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxjQUFBO0FFL0NaO0FGa0RRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7QUVqRFo7QUZvRFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FFbERaO0FGb0RZO0VBQ0ksdUNBQUE7QUVsRGhCO0FGd0RRO0VBQ0ksV0FBQTtBRXREWjtBRjRESTtFQUNJLFlBQUE7QUV6RFI7QUY4REE7RUFDSSxvQkFBQTtBRTNESjtBRjZEQTtFQUNJLGdCQUFBO0FFMURKO0FGNERBLGdEQUFBO0FBRUk7RUFDSSxXQUFBO0FFMURSO0FGOERJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRTNEUjtBRjZESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FFM0RSO0FGNkRJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFM0RSO0FGaUVBLDhDQUFBO0FBR0Esc0JBQUE7QUFDQTtFQUNJO0lBQ0ksbUJBQUE7RUVoRU47RUZrRUU7SUFDSSxtQkFBQTtFRWhFTjtBQUNGO0FGbUVBO0VBRUk7Ozs7OztJQU1JLGlCQUFBO0VFbEVOO0FBQ0Y7QUZxRUE7RUFFUTtJQUNJLGFBQUE7RUVwRVY7QUFDRjtBRndFQTtFQUdZO0lBQ0ksYUFBQTtJQUNBLFNBQUE7RUV4RWQ7RUY0RWM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VFMUVsQjtFRjZFYztJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFRTNFbEI7RUZtRmM7SUFDSSxZQUFBO0VFakZsQjtFRmtGa0I7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VFaEZ0QjtFRm1GYztJQUNJLGtDQUFBO0VFakZsQjtFRm1Ga0I7SUFDSSxhQUFBO0VFakZ0QjtFRm1Gc0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUVqRjFCO0FBQ0Y7QUZ5RkE7RUFHWTtJQUNJLGFBQUE7RUV6RmQ7RUYyRmM7SUFDSSxlQUFBO0VFekZsQjtFRjRGYztJQUNJLGtDQUFBO0VFMUZsQjtFRjRGa0I7SUFDSSxhQUFBO0VFMUZ0QjtFRjJGc0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUV6RjFCO0VGNEZzQjtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VFMUYxQjtFRitGYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRTdGbEI7RUZnR2M7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRTlGbEI7RUZpR2tCO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFRS9GdEI7RUZzR1U7SUFDSSxhQUFBO0VFcEdkO0VGd0djO0lBQ0ksZUFBQTtFRXRHbEI7RUZ5R2M7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VFdkdsQjtBQUNGO0FGNkdBO0VBQ0k7SUFDSSxtQkFBQTtFRTNHTjtFRitHVTtJQUNJLGVBQUE7RUU3R2Q7RUZnSGtCO0lBQ0kscUJBQUE7RUU5R3RCO0VGa0hjO0lBQ0ksZUFBQTtFRWhIbEI7RUZ1SFU7SUFDSSxhQUFBO0VFckhkO0VGeUhrQjtJQUNJLGFBQUE7RUV2SHRCO0VGeUhzQjtJQUNJLGVBQUE7RUV2SDFCO0VGMEhzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRXhIMUI7RUYySHNCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUV6SDFCO0VGNEhzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRTFIMUI7RUY4SGtCO0lBQ0ksWUFBQTtFRTVIdEI7RUY2SHNCO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFRTNIMUI7RUZtSVU7SUFDSSxhQUFBO0lBQ0EsU0FBQTtFRWpJZDtFRnFJYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUVuSWxCO0VGc0ljO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VFcElsQjtFRnVJYztJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFRXJJbEI7RUYySVU7SUFDSSxjQUFBO0VFeklkO0VGZ0prQjtJQUNJLHdCQUFBO0VFOUl0QjtFRmdKc0I7SUFDSSwwQkFBQTtJQUNBLDZCQUFBO0VFOUkxQjtFRmlKc0I7SUFDSSwwQkFBQTtJQUNBLDZCQUFBO0VFL0kxQjtBQUNGO0FGd0pBO0VBSWdCO0lBQ0ksdUJBQUE7RUV6SmxCO0VGMkprQjtJQUNJLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUV6SnRCO0FBQ0Y7QUZnS0E7RUFJZ0I7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUVqS2xCO0VGbUtrQjs7SUFFSSxpQkFBQTtJQUNBLE9BQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VFakt0QjtFRndLVTtJQUNJLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUV0S2Q7RUZ5S2tCO0lBQ0ksK0JBQUE7RUV2S3RCO0VGeUtzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRXZLMUI7RUYyS2tCO0lBQ0ksV0FBQTtJQUNBLHVCQUFBO0VFekt0QjtFRjBLc0I7SUFDSSxpQkFBQTtFRXhLMUI7RUYrS007SUFDSSxtQkFBQTtJQUNBLGVBQUE7RUU3S1Y7RUYrS1U7SUFDSSxhQUFBO0VFN0tkO0VGZ0xVO0lBQ0ksZ0JBQUE7RUU5S2Q7QUFDRjtBRm1MQTtFQUVRO0lBQ0ksZUFBQTtFRWxMVjtFRnFMYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRW5MbEI7RUY4THNCO0lBQ0ksc0JBQUE7RUU1TDFCO0VGOEwwQjtJQUNJLGNBQUE7RUU1TDlCO0VGdU1rQjtJQUNJLFdBQUE7RUVyTXRCO0VGMk1NO0lBQ0ksU0FBQTtFRXpNVjtFRjRNYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRTFNbEI7QUFDRjtBQXpqQkE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBMmpCSjtBQXpqQkE7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBNGpCSjtBQTFqQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQTZqQko7QUEzakJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUE4akJKO0FBM2pCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE4akJKIiwiZmlsZSI6ImVib29rLXJlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NjAwJmZhbWlseT1NdWxpc2g6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0ICcuL3ZhcmliYWxlcy5zY3NzJztcblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHlPbmU7XG4gICAgY29sb3I6ICRXaGl0ZUNvbG9yO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eU9uZTtcbiAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseUludGVyO1xufVxuXG5hLFxuLmJ0bixcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC8qIElFIHN1cHBvcnQgKi9cbn1cblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLmF1ZGlvU2VjdGlvbiB7XG4gICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL29mZmVyaW1hZ2UyLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICRiYWNrZ3JvdW5kTm9SZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogJGJhY2tncm91bmRTaXplO1xuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ1MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjJDQztcbiAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG5cbiAgICAgICAgLmF1ZGlvVGV4dFdyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwJSAwO1xuXG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDI0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06ICR0ZXh0VXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250NDY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0NTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogJHRleHRDYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0NTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQxODtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVIZWlnaHQzMnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdGV4dENhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZnJhZ21lbnRidG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250MTU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0MTZweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiAkdGV4dENlbnRlcjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1czEwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQmxhY2tDb2xvcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZFRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uZW50aXJlQnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRXZWlnaHQ3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udDE1O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogJHRleHRDZW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRCbGFja0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRUcmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDM1cHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkV2hpdGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJEJsYWNrQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXMxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRCbGFja0NvbG9yOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJHBvc2l0aW9uUmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGgxMDBQZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDIwcHggc29saWQgJFdoaXRlQ29sb3I7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuXG4vLyBCcmVhZGNydW1iIFN0YXJ0IFxudWwuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvd0xlZnQuc3ZnJyk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBCcmVhZGNydW1iIEVuZCBcblxuLy8gU3BlY2lhbCBPZmZlciBTZWN0aW9uIENTUyBTdGFydFxuLndvcmtTZWN0aW9uIHtcbiAgICAud29ya1NlY3Rpb25Jbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAxMjBweCAwO1xuXG4gICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgNzBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2tXcmFwLmljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgc3Bhbi5sZWZ0QXJyb3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBPZmZlciBFbmRcblxuXG5cbi8vIFNwZWNpYWwgT2ZmZXIgU2VjdGlvbiBDU1MgU3RhcnQgXG4ub2ZmZXJTZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTQzNTNCO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLm9mZmVyVGV4dCB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZFRkU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ub2ZmZXJCdG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlSW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnVsIC5yYXRpbmdXcmFwIHtcbiAgICBsaS5pbWcge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxufVxuXG4vLyBTcGVjaWFsIE9mZmVyIFNlY3Rpb24gQ1NTIEVuZFxuZm9vdGVyLmZvb3RlcldyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnBhZGRpbmcxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4vKiBBYm91dCB1cyBwYWdlICYgd29yayB3aXRoIHVzIHBhZ2UgQ1NTIFN0YXJ0ICovXG4uYWJvdXQtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5hYm91dC10ZXh0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgc3Bhbi5yZWFkLW1vcmUge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjQTQzNTNCO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuLyogQWJvdXQgdXMgcGFnZSAmIHdvcmsgd2l0aCB1cyBwYWdlIENTUyBFbmQgKi9cblxuXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSB7XG4gICAgLm9yZGVyLXNtLTEge1xuICAgICAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3JkZXItc20tMiB7XG4gICAgICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XG5cbiAgICAuY29udGFpbmVyLXh4bCxcbiAgICAuY29udGFpbmVyLXhsLFxuICAgIC5jb250YWluZXItbGcsXG4gICAgLmNvbnRhaW5lci1tZCxcbiAgICAuY29udGFpbmVyLXNtLFxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7XG4gICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gICAgLmNvbnRlbnRQYXJ0IHtcbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZlclRleHQge1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1ZGlvU2VjdGlvbiB7XG4gICAgICAgICAgICAuYXVkaW9TZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IDQ1NXB4O1xuICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyU2VjdGlvbiB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyVGV4dCB7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcblxuICAgICAgICAgICAgICAgIC5oZWFkaW5nVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAgICAgICAgIC5yb3cuYWxpZ24taXRlbXMtY2VudGVyIHtcblxuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGVJbWFnZVdyYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9mZmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC5ib29rQ29sbGVjdGlvbiB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0V3JhcHBlciB7XG4gICAgICAgICAgICAucHJvZHVjdGxpbmUge1xuICAgICAgICAgICAgICAgIC5zaW5nbGVQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RUeHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudFBhcnQge1xuICAgICAgICAud29ya1NlY3Rpb24ge1xuICAgICAgICAgICAgLndvcmtTZWN0aW9uSW5uZXIge1xuICAgICAgICAgICAgICAgIC5ibG9ja1dyYXAuaWNvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuLmxlZnRBcnJvdyxcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5yaWdodEFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXVkaW9TZWN0aW9uIHtcbiAgICAgICAgICAgIC5hdWRpb1NlY3Rpb25Jbm5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgICAgICAgICAgICAgLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYXVkaW9UZXh0V3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZUltYWdlV3JhcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0E0MzUzQjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGVJbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC53b3JrU2VjdGlvbiB7XG4gICAgICAgIC53b3JrU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgICAgICAgICAgLmhlYWRpbmdUaXRsZSB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50UGFydCB7XG4gICAgICAgIC5hdWRpb1NlY3Rpb24ge1xuICAgICAgICAgICAgLmF1ZGlvU2VjdGlvbklubmVyIHtcbiAgICAgICAgICAgICAgICAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hdWRpb1RleHRXcmFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5zV3JhcC5kLWZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdFdyYXBwZXIge1xuICAgICAgICAgICAgLnByb2R1Y3RsaW5lIHtcbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlclNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAub2ZmZXJUZXh0IHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvbnRTaXplIFByb3BlcnRpZXNcblxuJGZvbnQxMTogMTFweDtcbiRmb250MTI6IDEycHg7XG4kZm9udDEzOiAxM3B4O1xuJGZvbnQxNDogMTRweDtcbiRmb250MTU6IDE1cHg7XG4kZm9udDE2OiAxNnB4O1xuJGZvbnQxNzogMTdweDtcbiRmb250MTg6IDE4cHg7XG4kZm9udDI0OiAyNHB4O1xuJGZvbnQzMDogMzBweDtcbiRmb250NDY6IDQ2cHg7XG5cbi8vIExpbmUtaGVpZ2h0IFByb3BlcnRpZXNcblxuJGxpbmVIZWlnaHQxMnB4OiAxMnB4O1xuJGxpbmVIZWlnaHQxNHB4OiAxNHB4O1xuJGxpbmVIZWlnaHQxNnB4OiAxNnB4O1xuJGxpbmVIZWlnaHQyMnB4OiAyMnB4O1xuJGxpbmVIZWlnaHQyOHB4OiAyOHB4O1xuJGxpbmVIZWlnaHQzMnB4OiAzMnB4O1xuJGxpbmVIZWlnaHQ0MnB4OiA0MnB4O1xuJGxpbmVIZWlnaHQ1MnB4OiA1MnB4O1xuXG4vLyBDb2xvciBQcm9wZXJ0aWVzXG5cbiRXaGl0ZUNvbG9yOiAjZmZmO1xuJEJsYWNrQ29sb3I6ICMwMDA7XG4kTWFyb29uQ29sb3I6ICNBNDM1M0I7XG4kQ29sb3JCREJDQkQ6ICNCREJDQkQ7XG4kYmFja2dyb3VuZFRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcbiRiYWNrZ3JvdW5kTm9SZXBlYXQ6IG5vLXJlcGVhdDtcblxuLy8gbWFyZ2luIFByb3BlcnRpZXNcbiRtYXJnaW5BdXRvOiBhdXRvO1xuJG1hcmdpblplcm86IDBweDtcbiRtYXJnaW41cHg6IDVweDtcbiRtYXJnaW42cHg6IDZweDtcbiRtYXJnaW4xMHB4OiAxMHB4O1xuJG1hcmdpbjEycHg6IDEycHg7XG4kbWFyZ2luMTVweDogMTVweDtcbiRtYXJnaW4yMHB4OiAyMHB4O1xuJG1hcmdpbjI1cHg6IDI1cHg7XG4kbWFyZ2luMzVweDogMzVweDtcbiRtYXJnaW41MHB4OiA1MHB4O1xuXG4vLyBQYWRkaW5nIFByb3BlcnRpZXNcbiRwYWRkaW5nWmVybzogMHB4O1xuJHBhZGRpbmcxMHB4OiAxMHB4O1xuJHBhZGRpbmcxMnB4OiAxMnB4O1xuJHBhZGRpbmcxNXB4OiAxNXB4O1xuJHBhZGRpbmcyMHB4OiAyMHB4O1xuJHBhZGRpbmcyNHB4OiAyNHB4O1xuJHBhZGRpbmcyNXB4OiAyNXB4O1xuJHBhZGRpbmczMHB4OiAzMHB4O1xuJHBhZGRpbmczNXB4OiAzNXB4O1xuJHBhZGRpbmc0MHB4OiA0MHB4O1xuJHBhZGRpbmc1MHB4OiA1MHB4O1xuJHBhZGRpbmc2MHB4OiA2MHB4O1xuXG4vLyBmb250LWZhbWlseVxuJGZvbnRGYW1pbHlJbnRlcjogJ0ludGVyJztcblxuLy8gRm9udC13aWVoZ3QgUHJvcGVydGllc1xuXG4kZm9udFdlaWdodDMwMDogMzAwO1xuJGZvbnRXZWlnaHQ0MDA6IDQwMDtcbiRmb250V2VpZ2h0NTAwOiA1MDA7XG4kZm9udFdlaWdodDYwMDogNjAwO1xuJGZvbnRXZWlnaHQ3MDA6IDcwMDtcblxuLy8gSGVpZ2h0IFByb3BlcnRpZXNcbiRoZWlnaHRBdXRvOiBhdXRvO1xuJGhlaWdodDIwcHg6IDIwcHg7XG4kaGVpZ2h0MjRweDogMjRweDtcbiRoZWlnaHQzNHB4OiAzNHB4O1xuJGhlaWdodDQwcHg6IDQwcHg7XG4kaGVpZ2h0NDZweDogNDZweDtcbiRoZWlnaHQ1MDBweDogNTAwcHg7XG4kaGVpZ2h0MTAwdmg6IDEwMHZoO1xuJGhlaXVnaHQxMDBwZXI6IDEwMCU7XG5cbi8vIFdpZHRoIFByb3BlcnRpZXNcbiR3aWR0aEF1dG86IGF1dG87XG4kd2lkdGgyMHB4OiAyMHB4O1xuJHdpZHRoMjRweDogMjRweDtcbiR3aWR0aDMwcHg6IDMwcHg7XG4kd2lkdGgxNTBweDogMTUwcHg7XG4kd2lkdGgxMDBQZXI6IDEwMCU7XG5cbi8vIERpc3BsYXkgUHJvcGVydGllc1xuJGQtYmxvY2s6IGJsb2NrO1xuJGQtZmxleDogZmxleDtcbiRkLWlubGluZS1ibG9jazogaW5saW5lLWJsb2NrO1xuJGQtbm9uZTogbm9uZTtcblxuLy8gRmxleCBQcm9wZXJ0aWVzXG4kZmxleERpcmVjdGlvbkNvbHVtbjogY29sdW1uO1xuXG4vLyBBbGlnbiBQcm9wZXJ0aWVzXG4kYWxpZ25JdGVtc0NlbnRlcjogY2VudGVyO1xuJGp1c3RpZnlDb250ZW50Q2VudGVyOiBjZW50ZXI7XG5cbi8vIE9wYWNpdHkgUHJvcGVydGllc1xuJG9wYWNpdHlPbmU6IDE7XG4kb3BhY2l0eVR3bzogMC4yO1xuJG9wYWNpdHlPbmU6IDAuMztcbiRvcGFjaXR5Zml2ZTogMC41O1xuJG9wYWNpdHlTaXg6IDAuNjtcbiRvcGFjaXR5U2V2ZW46IDAuNztcbiRvcGFjaXR5SW5oZXJpdDogaW5oZXJpdDtcblxuXG4vLyBCb3JkZXIgUmFkaXVzIFByb3BlcnRpZXNcbiRib3JkZXJSYWRpdXM0OiA0cHg7XG4kYm9yZGVyUmFkaXVzMTI6IDEycHg7XG4kYm9yZGVyUmFkaXVzMTAwOiAxMDBweDtcblxuLy8gVGV4dC1jZW50ZXIgUHJvcGVydGllc1xuJHRleHRDZW50ZXI6IGNlbnRlcjtcblxuLy8gUG9zaXRpb25zIFByb3BlcnRpZXNcbiRwb3NpdGlvbkFic29sdXRlOiBhYnNvbHV0ZTtcbiRwb3NpdGlvblJlbGF0aXZlOiByZWxhdGl2ZTtcbiRwb3NpdGlvbkluaGVyaXQ6IGluaGVyaXQ7XG5cblxuLy8gQ3Vyc29yIFBvaW50ZXIgUHJvcGVydGllc1xuJGN1cnNvclBvaW50ZXI6IHBvaW50ZXI7XG5cbi8vIGN1c3RvbSBQaXhlbHNcbiR6ZXJvcHg6IDBweDtcbiRmaXZlcHg6IDVweDtcbiRUZW5weDogMTBweDtcbiRmaWZ0ZWVucHg6IDE1cHg7XG4kdHdlbnR5cHg6IDIwcHg7XG5cbi8vIEJhY2tncm91bmRTaXplIFByb3BlcnRpZXNcblxuJGJhY2tncm91bmRTaXplOiBjb3ZlcjtcblxuLy8gVGV4dCBDYXNlcyBQcm9wZXJ0aWVzXG4kdGV4dFVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHRDYXBpdGFsaXplOiBjYXBpdGFsaXplOyIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWJhbGVzLnNjc3MnO1xuXG4uc3Bpbm5lci1pbWcge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGRmLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSAyMzEgMjMxKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuLnBkZi1mb290ZXJfX21pbmkgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLnBkZi1mb290ZXJfX21pbmkgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGRmLWZvb3Rlcl9fbWluaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 56656:
/*!************************************************************!*\
  !*** ./src/app/layout/ebook-reader/ebook-reader.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EbookReaderModule": () => (/* binding */ EbookReaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ebook_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ebook-reader-routing.module */ 1440);
/* harmony import */ var _ebook_reader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ebook-reader.component */ 68181);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 49837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class EbookReaderModule {
}
EbookReaderModule.ɵfac = function EbookReaderModule_Factory(t) { return new (t || EbookReaderModule)(); };
EbookReaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EbookReaderModule });
EbookReaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__.CarouselModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ebook_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__.EbookReaderRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EbookReaderModule, { declarations: [_ebook_reader_component__WEBPACK_IMPORTED_MODULE_1__.EbookReaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__.CarouselModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ebook_reader_routing_module__WEBPACK_IMPORTED_MODULE_0__.EbookReaderRoutingModule] }); })();


/***/ }),

/***/ 49837:
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent),
/* harmony export */   "CarouselConfig": () => (/* binding */ CarouselConfig),
/* harmony export */   "CarouselModule": () => (/* binding */ CarouselModule),
/* harmony export */   "SlideComponent": () => (/* binding */ SlideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ 98172);





/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */

function CarouselComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_1_li_2_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.selectSlide(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r5.active === true);
  }
}

function CarouselComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_1_li_2_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
  }
}

function CarouselComponent_ng_container_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_2_button_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.selectSlide(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const slide_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r10.active === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#" + ctx_r9.currentId)("data-bs-slide-to", i_r11);
  }
}

function CarouselComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_button_2_Template, 1, 4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.indicatorsSlides());
  }
}

function CarouselComponent_a_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function CarouselComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.previousSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_5_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.checkDisabledClass("prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#" + ctx_r2.currentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBs4);
  }
}

function CarouselComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.nextSlide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.checkDisabledClass("next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#" + ctx_r3.currentId);
  }
}

const _c0 = function (a0) {
  return {
    "display": a0
  };
};

const _c1 = ["*"];

function findLastIndex(array, predicate) {
  let l = array.length;

  while (l--) {
    if (predicate(array[l], l, array)) {
      return l;
    }
  }

  return -1;
}

function chunkByNumber(array, size) {
  const out = [];
  const n = Math.ceil(array.length / size);
  let i = 0;

  while (i < n) {
    const chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
    out.push(chunk);
    i++;
  }

  return out;
}

function isNumber(value) {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

class CarouselConfig {
  constructor() {
    /* Default interval of auto changing of slides */
    this.interval = 5000;
    /* Is loop of auto changing of slides can be paused */

    this.noPause = false;
    /* Is slides can wrap from the last to the first slide */

    this.noWrap = false;
    /* Show carousel-indicators */

    this.showIndicators = true;
    /* Slides can be paused on focus */

    this.pauseOnFocus = false;
    /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */

    this.indicatorsByChunk = false;
    /* If value more then 1 — carousel works in multilist mode */

    this.itemsPerSlide = 1;
    /* If `true` — carousel shifts by one element. By default carousel shifts by number
      of visible elements (itemsPerSlide field) */

    this.singleSlideOffset = false;
  }

}

CarouselConfig.ɵfac = function CarouselConfig_Factory(t) {
  return new (t || CarouselConfig)();
};

CarouselConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CarouselConfig,
  factory: CarouselConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */


var Direction;

(function (Direction) {
  Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
  Direction[Direction["NEXT"] = 1] = "NEXT";
  Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));

let _currentId = 1;
/**
 * Base element to create carousel
 */

class CarouselComponent {
  constructor(config, ngZone, platformId) {
    this.ngZone = ngZone;
    this.platformId = platformId;
    /* If `true` — carousel will not cycle continuously and will have hard stops (prevent looping) */

    this.noWrap = false;
    /*  If `true` — will disable pausing on carousel mouse hover */

    this.noPause = false;
    /*  If `true` — carousel-indicators are visible  */

    this.showIndicators = true;
    /*  If `true` - autoplay will be stopped on focus */

    this.pauseOnFocus = false;
    /* If `true` - carousel indicators indicate slides chunks
       works ONLY if singleSlideOffset = FALSE */

    this.indicatorsByChunk = false;
    /* If value more then 1 — carousel works in multilist mode */

    this.itemsPerSlide = 1;
    /* If `true` — carousel shifts by one element. By default carousel shifts by number
       of visible elements (itemsPerSlide field) */

    this.singleSlideOffset = false;
    /** Turn on/off animation. Animation doesn't work for multilist carousel */

    this.isAnimated = false;
    /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */

    this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    /** Will be emitted when active slides has been changed in multilist mode */

    this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /* Index to start display slides from it */

    this.startFromIndex = 0;
    this._interval = 5000;
    this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.LinkedList();
    this._currentVisibleSlidesIndex = 0;
    this.isPlaying = false;
    this.destroyed = false;
    this.currentId = 0;

    this.getActive = slide => slide.active;

    this.makeSlidesConsistent = slides => {
      slides.forEach((slide, index) => slide.item.order = index);
    };

    Object.assign(this, config);
    this.currentId = _currentId++;
  }
  /** Index of currently displayed slide(started for 0) */


  set activeSlide(index) {
    if (this.multilist) {
      return;
    }

    if (isNumber(index)) {
      this.customActiveSlide = index;
    }

    if (this._slides.length && index !== this._currentActiveSlide) {
      this._select(index);
    }
  }

  get activeSlide() {
    return this._currentActiveSlide || 0;
  }
  /**
   * Delay of item cycling in milliseconds. If false, carousel won't cycle
   * automatically.
   */


  get interval() {
    return this._interval;
  }

  set interval(value) {
    this._interval = value;
    this.restartTimer();
  }

  get slides() {
    return this._slides.toArray();
  }

  get isFirstSlideVisible() {
    const indexes = this.getVisibleIndexes();

    if (!indexes || indexes instanceof Array && !indexes.length) {
      return false;
    }

    return indexes.includes(0);
  }

  get isLastSlideVisible() {
    const indexes = this.getVisibleIndexes();

    if (!indexes || indexes instanceof Array && !indexes.length) {
      return false;
    }

    return indexes.includes(this._slides.length - 1);
  }

  get isBs4() {
    return !(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.isBs3)();
  }

  get _bsVer() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.getBsVer)();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.singleSlideOffset) {
        this.indicatorsByChunk = false;
      }

      if (this.multilist) {
        this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
        this.selectInitialSlides();
      }

      if (this.customActiveSlide && !this.multilist) {
        this._select(this.customActiveSlide);
      }
    }, 0);
  }

  ngOnDestroy() {
    this.destroyed = true;
  }
  /**
   * Adds new slide. If this slide is first in collection - set it as active
   * and starts auto changing
   * @param slide
   */


  addSlide(slide) {
    this._slides.add(slide);

    if (this.multilist && this._slides.length <= this.itemsPerSlide) {
      slide.active = true;
    }

    if (!this.multilist && this.isAnimated) {
      slide.isAnimated = true;
    }

    if (!this.multilist && this._slides.length === 1) {
      this._currentActiveSlide = undefined;

      if (!this.customActiveSlide) {
        this.activeSlide = 0;
      }

      this.play();
    }

    if (this.multilist && this._slides.length > this.itemsPerSlide) {
      this.play();
    }
  }
  /**
   * Removes specified slide. If this slide is active - will roll to another
   * slide
   * @param slide
   */


  removeSlide(slide) {
    const remIndex = this._slides.indexOf(slide);

    if (this._currentActiveSlide === remIndex) {
      // removing of active slide
      let nextSlideIndex;

      if (this._slides.length > 1) {
        // if this slide last - will roll to first slide, if noWrap flag is
        // FALSE or to previous, if noWrap is TRUE in case, if this slide in
        // middle of collection, index of next slide is same to removed
        nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
      }

      this._slides.remove(remIndex); // prevents exception with changing some value after checking


      setTimeout(() => {
        this._select(nextSlideIndex);
      }, 0);
    } else {
      this._slides.remove(remIndex);

      const currentSlideIndex = this.getCurrentSlideIndex();
      setTimeout(() => {
        // after removing, need to actualize index of current active slide
        this._currentActiveSlide = currentSlideIndex;
        this.activeSlideChange.emit(this._currentActiveSlide);
      }, 0);
    }
  }

  nextSlideFromInterval(force = false) {
    this.move(Direction.NEXT, force);
  }
  /**
   * Rolling to next slide
   * @param force: {boolean} if true - will ignore noWrap flag
   */


  nextSlide(force = false) {
    if (this.isPlaying) {
      this.restartTimer();
    }

    this.move(Direction.NEXT, force);
  }
  /**
   * Rolling to previous slide
   * @param force: {boolean} if true - will ignore noWrap flag
   */


  previousSlide(force = false) {
    if (this.isPlaying) {
      this.restartTimer();
    }

    this.move(Direction.PREV, force);
  }

  getFirstVisibleIndex() {
    return this.slides.findIndex(this.getActive);
  }

  getLastVisibleIndex() {
    return findLastIndex(this.slides, this.getActive);
  }

  move(direction, force = false) {
    const firstVisibleIndex = this.getFirstVisibleIndex();
    const lastVisibleIndex = this.getLastVisibleIndex();

    if (this.noWrap) {
      if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
        return;
      }
    }

    if (!this.multilist) {
      this.activeSlide = this.findNextSlideIndex(direction, force) || 0;
    } else {
      this.moveMultilist(direction);
    }
  }
  /**
   * Swith slides by enter, space and arrows keys
   * @internal
   */


  keydownPress(event) {
    if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
      this.nextSlide();
      event.preventDefault();
      return;
    }

    if (event.keyCode === 37 || event.key === 'LeftArrow') {
      this.previousSlide();
      return;
    }

    if (event.keyCode === 39 || event.key === 'RightArrow') {
      this.nextSlide();
      return;
    }
  }
  /**
   * Play on mouse leave
   * @internal
   */


  onMouseLeave() {
    if (!this.pauseOnFocus) {
      this.play();
    }
  }
  /**
   * Play on mouse up
   * @internal
   */


  onMouseUp() {
    if (!this.pauseOnFocus) {
      this.play();
    }
  }
  /**
   * When slides on focus autoplay is stopped(optional)
   * @internal
   */


  pauseFocusIn() {
    if (this.pauseOnFocus) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }
  /**
   * When slides out of focus autoplay is started
   * @internal
   */


  pauseFocusOut() {
    this.play();
  }
  /**
   * Rolling to specified slide
   * @param index: {number} index of slide, which must be shown
   */


  selectSlide(index) {
    if (this.isPlaying) {
      this.restartTimer();
    }

    if (!this.multilist) {
      this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
    } else {
      this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
    }
  }
  /**
   * Starts a auto changing of slides
   */


  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }
  /**
   * Stops a auto changing of slides
   */


  pause() {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }
  /**
   * Finds and returns index of currently displayed slide
   */


  getCurrentSlideIndex() {
    return this._slides.findIndex(this.getActive);
  }
  /**
   * Defines, whether the specified index is last in collection
   * @param index
   */


  isLast(index) {
    return index + 1 >= this._slides.length;
  }
  /**
   * Defines, whether the specified index is first in collection
   * @param index
   */


  isFirst(index) {
    return index === 0;
  }

  indicatorsSlides() {
    return this.slides.filter((slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0);
  }

  selectInitialSlides() {
    const startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
    this.hideSlides();

    if (this.singleSlideOffset) {
      this._slidesWithIndexes = this.mapSlidesAndIndexes();

      if (this._slides.length - startIndex < this.itemsPerSlide) {
        const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);

        this._slidesWithIndexes = [...this._slidesWithIndexes, ...slidesToAppend].slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
      } else {
        this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
      }

      this._slidesWithIndexes.forEach(slide => slide.item.active = true);

      this.makeSlidesConsistent(this._slidesWithIndexes);
    } else {
      this.selectRangeByNestedIndex(startIndex);
    }

    this.slideRangeChange.emit(this.getVisibleIndexes());
  }
  /**
   * Defines next slide index, depending of direction
   * @param direction: Direction(UNKNOWN|PREV|NEXT)
   * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
   *   return undefined if next slide require wrapping
   */


  findNextSlideIndex(direction, force) {
    let nextSlideIndex = 0;

    if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
      return;
    }

    switch (direction) {
      case Direction.NEXT:
        // if this is last slide, not force, looping is disabled
        // and need to going forward - select current slide, as a next
        if (typeof this._currentActiveSlide === 'undefined') {
          nextSlideIndex = 0;
          break;
        }

        if (!this.isLast(this._currentActiveSlide)) {
          nextSlideIndex = this._currentActiveSlide + 1;
          break;
        }

        nextSlideIndex = !force && this.noWrap ? this._currentActiveSlide : 0;
        break;

      case Direction.PREV:
        // if this is first slide, not force, looping is disabled
        // and need to going backward - select current slide, as a next
        if (typeof this._currentActiveSlide === 'undefined') {
          nextSlideIndex = 0;
          break;
        }

        if (this._currentActiveSlide > 0) {
          nextSlideIndex = this._currentActiveSlide - 1;
          break;
        }

        if (!force && this.noWrap) {
          nextSlideIndex = this._currentActiveSlide;
          break;
        }

        nextSlideIndex = this._slides.length - 1;
        break;

      default:
        throw new Error('Unknown direction');
    }

    return nextSlideIndex;
  }

  mapSlidesAndIndexes() {
    return this.slides.slice().map((slide, index) => {
      return {
        index,
        item: slide
      };
    });
  }

  selectSlideRange(index) {
    if (this.isIndexInRange(index)) {
      return;
    }

    this.hideSlides();

    if (!this.singleSlideOffset) {
      this.selectRangeByNestedIndex(index);
    } else {
      const startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
      const endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
      this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
      this.makeSlidesConsistent(this._slidesWithIndexes);

      this._slidesWithIndexes.forEach(slide => slide.item.active = true);
    }

    this.slideRangeChange.emit(this.getVisibleIndexes());
  }

  selectRangeByNestedIndex(index) {
    if (!this._chunkedSlides) {
      return;
    }

    const selectedRange = this._chunkedSlides.map((slidesList, i) => {
      return {
        index: i,
        list: slidesList
      };
    }).find(slidesList => {
      return slidesList.list.find(slide => slide.index === index) !== undefined;
    });

    if (!selectedRange) {
      return;
    }

    this._currentVisibleSlidesIndex = selectedRange.index;

    this._chunkedSlides[selectedRange.index].forEach(slide => {
      slide.item.active = true;
    });
  }

  isIndexOnTheEdges(index) {
    return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
  }

  isIndexInRange(index) {
    if (this.singleSlideOffset && this._slidesWithIndexes) {
      const visibleIndexes = this._slidesWithIndexes.map(slide => slide.index);

      return visibleIndexes.indexOf(index) >= 0;
    }

    return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
  }

  hideSlides() {
    this.slides.forEach(slide => slide.active = false);
  }

  isVisibleSlideListLast() {
    if (!this._chunkedSlides) {
      return false;
    }

    return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
  }

  isVisibleSlideListFirst() {
    return this._currentVisibleSlidesIndex === 0;
  }

  moveSliderByOneItem(direction) {
    let firstVisibleIndex;
    let lastVisibleIndex;
    let indexToHide;
    let indexToShow;

    if (this.noWrap) {
      firstVisibleIndex = this.getFirstVisibleIndex();
      lastVisibleIndex = this.getLastVisibleIndex();
      indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
      indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;

      const slideToHide = this._slides.get(indexToHide);

      if (slideToHide) {
        slideToHide.active = false;
      }

      const slideToShow = this._slides.get(indexToShow);

      if (slideToShow) {
        slideToShow.active = true;
      }

      const slidesToReorder = this.mapSlidesAndIndexes().filter(slide => slide.item.active);
      this.makeSlidesConsistent(slidesToReorder);

      if (this.singleSlideOffset) {
        this._slidesWithIndexes = slidesToReorder;
      }

      this.slideRangeChange.emit(this.getVisibleIndexes());
      return;
    }

    if (!this._slidesWithIndexes || !this._slidesWithIndexes[0]) {
      return;
    }

    let index;
    firstVisibleIndex = this._slidesWithIndexes[0].index;
    lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;

    if (direction === Direction.NEXT) {
      this._slidesWithIndexes.shift();

      index = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;

      const item = this._slides.get(index);

      if (item) {
        this._slidesWithIndexes.push({
          index,
          item
        });
      }
    } else {
      this._slidesWithIndexes.pop();

      index = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;

      const item = this._slides.get(index);

      if (item) {
        this._slidesWithIndexes = [{
          index,
          item
        }, ...this._slidesWithIndexes];
      }
    }

    this.hideSlides();

    this._slidesWithIndexes.forEach(slide => slide.item.active = true);

    this.makeSlidesConsistent(this._slidesWithIndexes);
    this.slideRangeChange.emit(this._slidesWithIndexes.map(slide => slide.index));
  }

  moveMultilist(direction) {
    if (this.singleSlideOffset) {
      this.moveSliderByOneItem(direction);
    } else {
      this.hideSlides();

      if (this.noWrap) {
        this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
      } else if (direction === Direction.NEXT) {
        this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
      } else {
        if (this.isVisibleSlideListFirst()) {
          this._currentVisibleSlidesIndex = this._chunkedSlides ? this._chunkedSlides.length - 1 : 0;
        } else {
          this._currentVisibleSlidesIndex = this._currentVisibleSlidesIndex - 1;
        }
      }

      if (this._chunkedSlides) {
        this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(slide => slide.item.active = true);
      }

      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
  }

  getVisibleIndexes() {
    if (!this.singleSlideOffset && this._chunkedSlides) {
      return this._chunkedSlides[this._currentVisibleSlidesIndex].map(slide => slide.index);
    }

    if (this._slidesWithIndexes) {
      return this._slidesWithIndexes.map(slide => slide.index);
    }
  }
  /**
   * Sets a slide, which specified through index, as active
   * @param index
   */


  _select(index) {
    if (isNaN(index)) {
      this.pause();
      return;
    }

    if (!this.multilist && typeof this._currentActiveSlide !== 'undefined') {
      const currentSlide = this._slides.get(this._currentActiveSlide);

      if (typeof currentSlide !== 'undefined') {
        currentSlide.active = false;
      }
    }

    const nextSlide = this._slides.get(index);

    if (typeof nextSlide !== 'undefined') {
      this._currentActiveSlide = index;
      nextSlide.active = true;
      this.activeSlide = index;
      this.activeSlideChange.emit(index);
    }
  }
  /**
   * Starts loop of auto changing of slides
   */


  restartTimer() {
    this.resetTimer();
    const interval = +this.interval;

    if (!isNaN(interval) && interval > 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      this.currentInterval = this.ngZone.runOutsideAngular(() => {
        return window.setInterval(() => {
          const nInterval = +this.interval;
          this.ngZone.run(() => {
            if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
              this.nextSlideFromInterval();
            } else {
              this.pause();
            }
          });
        }, interval);
      });
    }
  }

  get multilist() {
    return this.itemsPerSlide > 1;
  }
  /**
   * Stops loop of auto changing of slides
   */


  resetTimer() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = void 0;
    }
  }

  checkDisabledClass(buttonType) {
    if (buttonType === 'prev') {
      return this.activeSlide === 0 && this.noWrap && !this.multilist || this.isFirstSlideVisible && this.noWrap && this.multilist;
    }

    return this.isLast(this.activeSlide) && this.noWrap && !this.multilist || this.isLastSlideVisible && this.noWrap && this.multilist;
  }

}

CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
};

CarouselComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["carousel"]],
  inputs: {
    noWrap: "noWrap",
    noPause: "noPause",
    showIndicators: "showIndicators",
    pauseOnFocus: "pauseOnFocus",
    indicatorsByChunk: "indicatorsByChunk",
    itemsPerSlide: "itemsPerSlide",
    singleSlideOffset: "singleSlideOffset",
    isAnimated: "isAnimated",
    activeSlide: "activeSlide",
    startFromIndex: "startFromIndex",
    interval: "interval"
  },
  outputs: {
    activeSlideChange: "activeSlideChange",
    slideRangeChange: "slideRangeChange"
  },
  ngContentSelectors: _c1,
  decls: 7,
  vars: 8,
  consts: [["tabindex", "0", 1, "carousel", "slide", 3, "id", "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], [4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", "aria-current", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-current", "true", 3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only visually-hidden", 4, "ngIf"], [1, "sr-only", "visually-hidden"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() {
        return ctx.pause();
      })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
        return ctx.onMouseLeave();
      })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() {
        return ctx.onMouseUp();
      })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) {
        return ctx.keydownPress($event);
      })("focusin", function CarouselComponent_Template_div_focusin_0_listener() {
        return ctx.pauseFocusIn();
      })("focusout", function CarouselComponent_Template_div_focusout_0_listener() {
        return ctx.pauseFocusOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 3, 4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_a_6_Template, 4, 3, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.currentId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.multilist ? "flex" : "block"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'carousel',
      template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     [id]=\"currentId\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ng-container *ngIf=\"!_bsVer.isBs5 && showIndicators && slides.length > 1\">\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n          [class.active]=\"slide.active === true\"\n          (click)=\"selectSlide(i)\">\n      </li>\n    </ol>\n  </ng-container>\n  <ng-container *ngIf=\"_bsVer.isBs5 && showIndicators && slides.length > 1\">\n    <div class=\"carousel-indicators\">\n      <button\n        *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\"\n        type=\"button\"\n        [attr.data-bs-target]=\"'#'+currentId\"\n        [attr.data-bs-slide-to]=\"i\" aria-current=\"true\"\n      >\n      </button>\n    </div>\n  </ng-container>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     *ngIf=\"slides.length > 1\"\n     [class.disabled]=\"checkDisabledClass('prev')\"\n     [attr.data-bs-target]=\"'#'+currentId\"\n     (click)=\"previousSlide()\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only visually-hidden\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     *ngIf=\"slides.length > 1\"\n     [class.disabled]=\"checkDisabledClass('next')\"\n     [attr.data-bs-target]=\"'#'+currentId\"\n     (click)=\"nextSlide()\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only visually-hidden\">Next</span>\n  </a>\n</div>\n"
    }]
  }], function () {
    return [{
      type: CarouselConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, {
    noWrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    noPause: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indicatorsByChunk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemsPerSlide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    singleSlideOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeSlideChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    slideRangeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeSlide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startFromIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    interval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class SlideComponent {
  constructor(carousel) {
    /** Is current slide active */
    this.active = false;
    this.itemWidth = '100%';
    this.order = 0;
    this.isAnimated = false;
    /** Wraps element by appropriate CSS classes */

    this.addClass = true;
    this.multilist = false;
    this.carousel = carousel;
  }
  /** Fires changes in container collection after adding a new slide instance */


  ngOnInit() {
    var _a;

    this.carousel.addSlide(this);
    this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    this.multilist = ((_a = this.carousel) === null || _a === void 0 ? void 0 : _a.itemsPerSlide) > 1;
  }
  /** Fires changes in container collection after removing of this slide instance */


  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }

}

SlideComponent.ɵfac = function SlideComponent_Factory(t) {
  return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent));
};

SlideComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SlideComponent,
  selectors: [["slide"]],
  hostVars: 15,
  hostBindings: function SlideComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("multilist-margin", ctx.multilist)("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
    }
  },
  inputs: {
    active: "active"
  },
  ngContentSelectors: _c1,
  decls: 2,
  vars: 2,
  consts: [[1, "item"]],
  template: function SlideComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    }
  },
  styles: [".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'slide',
      template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        '[attr.aria-hidden]': '!active',
        '[class.multilist-margin]': 'multilist'
      },
      styles: [":host.carousel-animation{transition:opacity .6s ease,visibility .6s ease;float:left}:host.carousel-animation.active{opacity:1;visibility:visible}:host.carousel-animation:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}:host.multilist-margin{margin-right:auto}:host.carousel-item{perspective:1000px}\n"]
    }]
  }], function () {
    return [{
      type: CarouselComponent
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.active']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.order']
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.carousel-animation']
    }],
    addClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.item']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.carousel-item']
    }]
  });
})();

class CarouselModule {
  static forRoot() {
    return {
      ngModule: CarouselModule,
      providers: []
    };
  }

}

CarouselModule.ɵfac = function CarouselModule_Factory(t) {
  return new (t || CarouselModule)();
};

CarouselModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CarouselModule
});
CarouselModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [SlideComponent, CarouselComponent],
      exports: [SlideComponent, CarouselComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 98172:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsVerions": () => (/* binding */ BsVerions),
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList),
/* harmony export */   "OnChange": () => (/* binding */ OnChange),
/* harmony export */   "Trigger": () => (/* binding */ Trigger),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "currentBsVersion": () => (/* binding */ currentBsVersion),
/* harmony export */   "document": () => (/* binding */ document),
/* harmony export */   "getBsVer": () => (/* binding */ getBsVer),
/* harmony export */   "isBs3": () => (/* binding */ isBs3),
/* harmony export */   "listenToTriggers": () => (/* binding */ listenToTriggers),
/* harmony export */   "listenToTriggersV2": () => (/* binding */ listenToTriggersV2),
/* harmony export */   "parseTriggers": () => (/* binding */ parseTriggers),
/* harmony export */   "registerEscClick": () => (/* binding */ registerEscClick),
/* harmony export */   "registerOutsideClick": () => (/* binding */ registerOutsideClick),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "window": () => (/* binding */ win)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */

class Trigger {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }

  isManual() {
    return this.open === 'manual' || this.close === 'manual';
  }

}

const DEFAULT_ALIASES = {
  hover: ['mouseover', 'mouseout'],
  focus: ['focusin', 'focusout']
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || '').trim();

  if (trimmedTriggers.length === 0) {
    return [];
  }

  const parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map(triggerPair => {
    const alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());

  if (manualTriggers.length > 1) {
    throw new Error('Triggers parse error: only one manual trigger is allowed');
  }

  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
  }

  return parsedTriggers;
}

function listenToTriggers(renderer, // eslint-disable-next-line @typescript-eslint/no-explicit-any
target, triggers, showFn, hideFn, toggleFn) {
  const parsedTriggers = parseTriggers(triggers);
  const listeners = [];

  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }

  parsedTriggers.forEach(trigger => {
    if (trigger.open === trigger.close) {
      listeners.push(renderer.listen(target, trigger.open, toggleFn));
      return;
    }

    listeners.push(renderer.listen(target, trigger.open, showFn));

    if (trigger.close) {
      listeners.push(renderer.listen(target, trigger.close, hideFn));
    }
  });
  return () => {
    listeners.forEach(unsubscribeFn => unsubscribeFn());
  };
}

function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target; // do nothing

  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  } // all listeners


  const listeners = []; // lazy listeners registration

  const _registerHide = [];

  const registerHide = () => {
    // add hide listeners to unregister array
    _registerHide.forEach(fn => listeners.push(fn())); // register hide events only once


    _registerHide.length = 0;
  }; // register open\close\toggle listeners


  parsedTriggers.forEach(trigger => {
    const useToggle = trigger.open === trigger.close;
    const showFn = useToggle ? options.toggle : options.show;

    if (!useToggle && trigger.close && options.hide) {
      const _hide = renderer.listen(target, trigger.close, options.hide);

      _registerHide.push(() => _hide);
    }

    if (showFn) {
      listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach(unsubscribeFn => unsubscribeFn());
  };
}

function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return renderer.listen('document', 'click', event => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }

    if (options.targets && options.targets.some(target => target.contains(event.target))) {
      return;
    }

    if (options.hide) {
      options.hide();
    }
  });
}

function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }

  return renderer.listen('document', 'keyup.esc', event => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }

    if (options.targets && options.targets.some(target => target.contains(event.target))) {
      return;
    }

    if (options.hide) {
      options.hide();
    }
  });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * JS version of browser APIs. This library can only run in the browser.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


const win = typeof window !== 'undefined' && window || {};
const document = win.document;
const location = win.location; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const gc = win.gc ? () => win.gc() : () => null;
const performance = win.performance ? win.performance : null;
const Event = win.Event;
const MouseEvent = win.MouseEvent;
const KeyboardEvent = win.KeyboardEvent;
const EventTarget = win.EventTarget;
const History = win.History;
const Location = win.Location;
const EventListener = win.EventListener;
var BsVerions;

(function (BsVerions) {
  BsVerions["isBs3"] = "bs3";
  BsVerions["isBs4"] = "bs4";
  BsVerions["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));

let guessedVersion;

function _guessBsVersion() {
  if (typeof win.document === 'undefined') {
    return 'bs4';
  }

  const spanEl = win.document.createElement('span');
  spanEl.innerText = 'testing bs version';
  spanEl.classList.add('d-none');
  spanEl.classList.add('pl-1');
  win.document.head.appendChild(spanEl);
  const rect = spanEl.getBoundingClientRect();
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;

  if (!rect || rect && rect.top !== 0) {
    win.document.head.removeChild(spanEl);
    return 'bs3';
  }

  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return 'bs4';
  }

  win.document.head.removeChild(spanEl);
  return 'bs5';
}

function setTheme(theme) {
  guessedVersion = theme;
} // todo: in ngx-bootstrap, bs4 will became a default one


function isBs3() {
  if (typeof win === 'undefined') {
    return true;
  }

  if (typeof win.__theme === 'undefined') {
    if (guessedVersion) {
      return guessedVersion === 'bs3';
    }

    guessedVersion = _guessBsVersion();
    return guessedVersion === 'bs3';
  }

  return win.__theme === 'bs3';
}

function isBs4() {
  if (isBs3()) return false;
  if (guessedVersion) return guessedVersion === 'bs4';
  guessedVersion = _guessBsVersion();
  return guessedVersion === 'bs4';
}

function isBs5() {
  if (isBs3() || isBs4()) return false;
  if (guessedVersion) return guessedVersion === 'bs5';
  guessedVersion = _guessBsVersion();
  return guessedVersion === 'bs5';
}

function getBsVer() {
  return {
    isBs3: isBs3(),
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}

function currentBsVersion() {
  const bsVer = getBsVer();
  const resVersion = Object.keys(bsVer).find(key => bsVer[key]);
  return BsVerions[resVersion];
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.asArray = []; // Array methods overriding END
  }

  get(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      return void 0;
    }

    let current = this.head;

    for (let index = 0; index < position; index++) {
      current = current === null || current === void 0 ? void 0 : current.next;
    }

    return current === null || current === void 0 ? void 0 : current.value;
  }

  add(value, position = this.length) {
    if (position < 0 || position > this.length) {
      throw new Error('Position is out of the list');
    }

    const node = {
      value,
      next: undefined,
      previous: undefined
    };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.current = node;
    } else {
      if (position === 0 && this.head) {
        // first node
        node.next = this.head;
        this.head.previous = node;
        this.head = node;
      } else if (position === this.length && this.tail) {
        // last node
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      } else {
        // node in middle
        const currentPreviousNode = this.getNode(position - 1);
        const currentNextNode = currentPreviousNode === null || currentPreviousNode === void 0 ? void 0 : currentPreviousNode.next;

        if (currentPreviousNode && currentNextNode) {
          currentPreviousNode.next = node;
          currentNextNode.previous = node;
          node.previous = currentPreviousNode;
          node.next = currentNextNode;
        }
      }
    }

    this.length++;
    this.createInternalArrayRepresentation();
  }

  remove(position = 0) {
    var _a;

    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }

    if (position === 0 && this.head) {
      // first node
      this.head = this.head.next;

      if (this.head) {
        // there is no second node
        this.head.previous = undefined;
      } else {
        // there is no second node
        this.tail = undefined;
      }
    } else if (position === this.length - 1 && ((_a = this.tail) === null || _a === void 0 ? void 0 : _a.previous)) {
      // last node
      this.tail = this.tail.previous;
      this.tail.next = undefined;
    } else {
      // middle node
      const removedNode = this.getNode(position);

      if ((removedNode === null || removedNode === void 0 ? void 0 : removedNode.next) && removedNode.previous) {
        removedNode.next.previous = removedNode.previous;
        removedNode.previous.next = removedNode.next;
      }
    }

    this.length--;
    this.createInternalArrayRepresentation();
  }

  set(position, value) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }

    const node = this.getNode(position);

    if (node) {
      node.value = value;
      this.createInternalArrayRepresentation();
    }
  }

  toArray() {
    return this.asArray;
  }

  findAll(fn) {
    let current = this.head;
    const result = [];

    if (!current) {
      return result;
    }

    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return result;
      }

      if (fn(current.value, index)) {
        result.push({
          index,
          value: current.value
        });
      }

      current = current.next;
    }

    return result;
  } // Array methods overriding start


  push(...args) {
    args.forEach(arg => {
      this.add(arg);
    });
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const last = this.tail;
    this.remove(this.length - 1);
    return last === null || last === void 0 ? void 0 : last.value;
  }

  unshift(...args) {
    args.reverse();
    args.forEach(arg => {
      this.add(arg, 0);
    });
    return this.length;
  }

  shift() {
    var _a;

    if (this.length === 0) {
      return undefined;
    }

    const lastItem = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    this.remove();
    return lastItem;
  }

  forEach(fn) {
    let current = this.head;

    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return;
      }

      fn(current.value, index);
      current = current.next;
    }
  }

  indexOf(value) {
    let current = this.head;
    let position = -1;

    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return position;
      }

      if (current.value === value) {
        position = index;
        break;
      }

      current = current.next;
    }

    return position;
  }

  some(fn) {
    let current = this.head;
    let result = false;

    while (current && !result) {
      if (fn(current.value)) {
        result = true;
        break;
      }

      current = current.next;
    }

    return result;
  }

  every(fn) {
    let current = this.head;
    let result = true;

    while (current && result) {
      if (!fn(current.value)) {
        result = false;
      }

      current = current.next;
    }

    return result;
  }

  toString() {
    return '[Linked List]';
  }

  find(fn) {
    let current = this.head;

    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return;
      }

      if (fn(current.value, index)) {
        return current.value;
      }

      current = current.next;
    }
  }

  findIndex(fn) {
    let current = this.head;

    for (let index = 0; index < this.length; index++) {
      if (!current) {
        return -1;
      }

      if (fn(current.value, index)) {
        return index;
      }

      current = current.next;
    }

    return -1;
  }

  getNode(position) {
    if (this.length === 0 || position < 0 || position >= this.length) {
      throw new Error('Position is out of the list');
    }

    let current = this.head;

    for (let index = 0; index < position; index++) {
      current = current === null || current === void 0 ? void 0 : current.next;
    }

    return current;
  }

  createInternalArrayRepresentation() {
    const outArray = [];
    let current = this.head;

    while (current) {
      outArray.push(current.value);
      current = current.next;
    }

    this.asArray = outArray;
  }

} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function OnChange() {
  const sufix = 'Change'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return function OnChangeHandler(target, propertyKey) {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[_key];
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value) {
        const prevValue = this[_key];
        this[_key] = value;

        if (prevValue !== value && this[propertyKey + sufix]) {
          this[propertyKey + sufix].emit(value);
        }
      }

    });
  };
}

class Utils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static reflow(element) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bs => bs)(element.offsetHeight);
  } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  static getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    let view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = win;
    }

    return view.getComputedStyle(elem);
  }

  static stackOverflowConfig() {
    const bsVer = currentBsVersion();
    return {
      crossorigin: bsVer !== 'bs3' ? "anonymous" : undefined,
      integrity: bsVer === 'bs5' ? 'sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' : bsVer === 'bs4' ? 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2' : undefined,
      cdnLink: bsVer === 'bs5' ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' : bsVer === 'bs4' ? 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    };
  }

}

const _messagesHash = {};

const _hideMsg = typeof console === 'undefined' || !('warn' in console);

function warnOnce(msg) {
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() || _hideMsg || msg in _messagesHash) {
    return;
  }

  _messagesHash[msg] = true;
  console.warn(msg);
}
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

};
;
//# sourceMappingURL=656.js.map
"use strict";
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 91061:
/*!**************************************************************!*\
  !*** ./src/app/layout/narrators/narrators-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NarratorsRoutingModule": () => (/* binding */ NarratorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _narrators_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./narrators.component */ 28546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _narrators_component__WEBPACK_IMPORTED_MODULE_0__.NarratorsComponent,
    },
];
class NarratorsRoutingModule {
}
NarratorsRoutingModule.ɵfac = function NarratorsRoutingModule_Factory(t) { return new (t || NarratorsRoutingModule)(); };
NarratorsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NarratorsRoutingModule });
NarratorsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NarratorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 28546:
/*!*********************************************************!*\
  !*** ./src/app/layout/narrators/narrators.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NarratorsComponent": () => (/* binding */ NarratorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);




class NarratorsComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        this.setMetaInfo();
    }
    setMetaInfo() {
        let metaTitle = 'Uzzini vairāk par Audiolasītavas audiogrāmatu stāstniekiem';
        let metaDescription = 'Mēs strādājam ar pazīstamākajiem latviešu aktieriem. Noklausieties savu iecienītāko aktieru balsis Audiolasītavas audiogrāmatās.';
        let metaUrl = window.location.href;
        this.titleService.setTitle(metaTitle);
        this.metaService.updateTag({ name: 'description', content: metaDescription });
        this.metaService.addTag({ property: 'og:title', content: metaTitle });
        this.metaService.addTag({ property: 'og:description', content: metaDescription });
        this.metaService.addTag({ property: 'og:url', content: metaUrl });
    }
}
NarratorsComponent.ɵfac = function NarratorsComponent_Factory(t) { return new (t || NarratorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta)); };
NarratorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NarratorsComponent, selectors: [["app-narrators"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function NarratorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXJyYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63295:
/*!******************************************************!*\
  !*** ./src/app/layout/narrators/narrators.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NarratorsModule": () => (/* binding */ NarratorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _narrators_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./narrators-routing.module */ 91061);
/* harmony import */ var _narrators_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./narrators.component */ 28546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class NarratorsModule {
}
NarratorsModule.ɵfac = function NarratorsModule_Factory(t) { return new (t || NarratorsModule)(); };
NarratorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NarratorsModule });
NarratorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _narrators_routing_module__WEBPACK_IMPORTED_MODULE_1__.NarratorsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NarratorsModule, { declarations: [_narrators_component__WEBPACK_IMPORTED_MODULE_2__.NarratorsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _narrators_routing_module__WEBPACK_IMPORTED_MODULE_1__.NarratorsRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=295.js.map
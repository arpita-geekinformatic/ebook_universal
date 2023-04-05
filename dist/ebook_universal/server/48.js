"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 48611:
/*!************************************************************************************!*\
  !*** ./src/app/layout/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsRoutingModule": () => (/* binding */ TermsAndConditionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.component */ 52837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsComponent,
    },
];
class TermsAndConditionsRoutingModule {
}
TermsAndConditionsRoutingModule.ɵfac = function TermsAndConditionsRoutingModule_Factory(t) { return new (t || TermsAndConditionsRoutingModule)(); };
TermsAndConditionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TermsAndConditionsRoutingModule });
TermsAndConditionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TermsAndConditionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 52837:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsComponent": () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);




class TermsAndConditionsComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        this.setMetaInfo();
    }
    setMetaInfo() {
        let metaTitle = 'Iepazīsties ar Audiolasītavas lietošanas noteikumiem';
        let metaDescription = 'Lietotāju privātā informācija ir aizsargāta.Audiolasitava ir izstrādājusi visaptverošus lietotāju noteikumus, lai pasargātu lietotājus';
        let metaUrl = window.location.href;
        this.titleService.setTitle(metaTitle);
        this.metaService.updateTag({ name: 'description', content: metaDescription });
        this.metaService.addTag({ property: 'og:title', content: metaTitle });
        this.metaService.addTag({ property: 'og:description', content: metaDescription });
        this.metaService.addTag({ property: 'og:url', content: metaUrl });
    }
}
TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) { return new (t || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta)); };
TermsAndConditionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TermsAndConditionsComponent, selectors: [["app-terms-and-conditions"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function TermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7048:
/*!****************************************************************************!*\
  !*** ./src/app/layout/terms-and-conditions/terms-and-conditions.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsModule": () => (/* binding */ TermsAndConditionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-conditions-routing.module */ 48611);
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-and-conditions.component */ 52837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class TermsAndConditionsModule {
}
TermsAndConditionsModule.ɵfac = function TermsAndConditionsModule_Factory(t) { return new (t || TermsAndConditionsModule)(); };
TermsAndConditionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TermsAndConditionsModule });
TermsAndConditionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TermsAndConditionsModule, { declarations: [_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionsRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=48.js.map
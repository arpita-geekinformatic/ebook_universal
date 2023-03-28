"use strict";
(self["webpackChunkebook_universal"] = self["webpackChunkebook_universal"] || []).push([["src_app_layout_terms-and-conditions_terms-and-conditions_module_ts"],{

/***/ 8611:
/*!************************************************************************************!*\
  !*** ./src/app/layout/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsRoutingModule": () => (/* binding */ TermsAndConditionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.component */ 2837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 2837:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsComponent": () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);



class TermsAndConditionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) { return new (t || TermsAndConditionsComponent)(); };
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-conditions-routing.module */ 8611);
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-and-conditions.component */ 2837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





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

}]);
//# sourceMappingURL=src_app_layout_terms-and-conditions_terms-and-conditions_module_ts.js.map
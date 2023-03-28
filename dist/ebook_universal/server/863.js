"use strict";
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 1454:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/cookies-preferences/cookies-preferences-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiesPreferencesRoutingModule": () => (/* binding */ CookiesPreferencesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cookies_preferences_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies-preferences.component */ 42083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cookies_preferences_component__WEBPACK_IMPORTED_MODULE_0__.CookiesPreferencesComponent,
    },
];
class CookiesPreferencesRoutingModule {
}
CookiesPreferencesRoutingModule.ɵfac = function CookiesPreferencesRoutingModule_Factory(t) { return new (t || CookiesPreferencesRoutingModule)(); };
CookiesPreferencesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CookiesPreferencesRoutingModule });
CookiesPreferencesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CookiesPreferencesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 42083:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/cookies-preferences/cookies-preferences.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiesPreferencesComponent": () => (/* binding */ CookiesPreferencesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);



class CookiesPreferencesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CookiesPreferencesComponent.ɵfac = function CookiesPreferencesComponent_Factory(t) { return new (t || CookiesPreferencesComponent)(); };
CookiesPreferencesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CookiesPreferencesComponent, selectors: [["app-cookies-preferences"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function CookiesPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb29raWVzLXByZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 73863:
/*!**************************************************************************!*\
  !*** ./src/app/layout/cookies-preferences/cookies-preferences.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiesPreferencesModule": () => (/* binding */ CookiesPreferencesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _cookies_preferences_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies-preferences-routing.module */ 1454);
/* harmony import */ var _cookies_preferences_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookies-preferences.component */ 42083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CookiesPreferencesModule {
}
CookiesPreferencesModule.ɵfac = function CookiesPreferencesModule_Factory(t) { return new (t || CookiesPreferencesModule)(); };
CookiesPreferencesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CookiesPreferencesModule });
CookiesPreferencesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _cookies_preferences_routing_module__WEBPACK_IMPORTED_MODULE_1__.CookiesPreferencesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CookiesPreferencesModule, { declarations: [_cookies_preferences_component__WEBPACK_IMPORTED_MODULE_2__.CookiesPreferencesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _cookies_preferences_routing_module__WEBPACK_IMPORTED_MODULE_1__.CookiesPreferencesRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=863.js.map
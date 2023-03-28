"use strict";
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 32154:
/*!**********************************************************************!*\
  !*** ./src/app/layout/cookie-policy/cookie-policy-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiePolicyRoutingModule": () => (/* binding */ CookiePolicyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cookie_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-policy.component */ 3302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cookie_policy_component__WEBPACK_IMPORTED_MODULE_0__.CookiePolicyComponent,
    },
];
class CookiePolicyRoutingModule {
}
CookiePolicyRoutingModule.ɵfac = function CookiePolicyRoutingModule_Factory(t) { return new (t || CookiePolicyRoutingModule)(); };
CookiePolicyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CookiePolicyRoutingModule });
CookiePolicyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CookiePolicyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3302:
/*!*****************************************************************!*\
  !*** ./src/app/layout/cookie-policy/cookie-policy.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiePolicyComponent": () => (/* binding */ CookiePolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);



class CookiePolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CookiePolicyComponent.ɵfac = function CookiePolicyComponent_Factory(t) { return new (t || CookiePolicyComponent)(); };
CookiePolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CookiePolicyComponent, selectors: [["app-cookie-policy"]], decls: 7, vars: 0, consts: [["href", "http://audiolasitava.lv/"]], template: function CookiePolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "A cookie in no way gives us access to your computer or any information about you, however we are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Most browsers allow you to reject all cookies, whilst some browsers allow you to reject just third party cookies. Note that doing this may prevent you from taking full advantage of our website. If you would like to find out more about cookies, including how to see what cookies have been set and how to manage and delete them, please visit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "http://audiolasitava.lv/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb29raWUtcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 42347:
/*!**************************************************************!*\
  !*** ./src/app/layout/cookie-policy/cookie-policy.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiePolicyModule": () => (/* binding */ CookiePolicyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-policy-routing.module */ 32154);
/* harmony import */ var _cookie_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie-policy.component */ 3302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CookiePolicyModule {
}
CookiePolicyModule.ɵfac = function CookiePolicyModule_Factory(t) { return new (t || CookiePolicyModule)(); };
CookiePolicyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CookiePolicyModule });
CookiePolicyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_1__.CookiePolicyRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CookiePolicyModule, { declarations: [_cookie_policy_component__WEBPACK_IMPORTED_MODULE_2__.CookiePolicyComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_1__.CookiePolicyRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=347.js.map
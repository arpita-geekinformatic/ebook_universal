"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 23106:
/*!****************************************************************!*\
  !*** ./src/app/layout/categories/categories-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesRoutingModule": () => (/* binding */ CategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ 77956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent,
    },
];
class CategoriesRoutingModule {
}
CategoriesRoutingModule.ɵfac = function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); };
CategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriesRoutingModule });
CategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 77956:
/*!***********************************************************!*\
  !*** ./src/app/layout/categories/categories.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);



class CategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 58647:
/*!********************************************************!*\
  !*** ./src/app/layout/categories/categories.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesModule": () => (/* binding */ CategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-routing.module */ 23106);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ 77956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CategoriesModule {
}
CategoriesModule.ɵfac = function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); };
CategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CategoriesModule, { declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriesRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=500.js.map
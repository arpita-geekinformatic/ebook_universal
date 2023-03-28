"use strict";
(self["webpackChunkebook_universal"] = self["webpackChunkebook_universal"] || []).push([["src_app_layout_publishers_publishers_module_ts"],{

/***/ 3672:
/*!****************************************************************!*\
  !*** ./src/app/layout/publishers/publishers-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishersRoutingModule": () => (/* binding */ PublishersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _publishers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publishers.component */ 6389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _publishers_component__WEBPACK_IMPORTED_MODULE_0__.PublishersComponent,
    },
];
class PublishersRoutingModule {
}
PublishersRoutingModule.ɵfac = function PublishersRoutingModule_Factory(t) { return new (t || PublishersRoutingModule)(); };
PublishersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublishersRoutingModule });
PublishersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublishersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6389:
/*!***********************************************************!*\
  !*** ./src/app/layout/publishers/publishers.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishersComponent": () => (/* binding */ PublishersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);



class PublishersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublishersComponent.ɵfac = function PublishersComponent_Factory(t) { return new (t || PublishersComponent)(); };
PublishersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublishersComponent, selectors: [["app-publishers"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function PublishersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3629:
/*!********************************************************!*\
  !*** ./src/app/layout/publishers/publishers.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishersModule": () => (/* binding */ PublishersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _publishers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publishers-routing.module */ 3672);
/* harmony import */ var _publishers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publishers.component */ 6389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class PublishersModule {
}
PublishersModule.ɵfac = function PublishersModule_Factory(t) { return new (t || PublishersModule)(); };
PublishersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublishersModule });
PublishersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _publishers_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublishersRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublishersModule, { declarations: [_publishers_component__WEBPACK_IMPORTED_MODULE_2__.PublishersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _publishers_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublishersRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_layout_publishers_publishers_module_ts.js.map
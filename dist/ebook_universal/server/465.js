"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 12912:
/*!**************************************************************!*\
  !*** ./src/app/layout/new-books/new-books-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBooksRoutingModule": () => (/* binding */ NewBooksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-books.component */ 6250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _new_books_component__WEBPACK_IMPORTED_MODULE_0__.NewBooksComponent,
    },
];
class NewBooksRoutingModule {
}
NewBooksRoutingModule.ɵfac = function NewBooksRoutingModule_Factory(t) { return new (t || NewBooksRoutingModule)(); };
NewBooksRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewBooksRoutingModule });
NewBooksRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewBooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6250:
/*!*********************************************************!*\
  !*** ./src/app/layout/new-books/new-books.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBooksComponent": () => (/* binding */ NewBooksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);



class NewBooksComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewBooksComponent.ɵfac = function NewBooksComponent_Factory(t) { return new (t || NewBooksComponent)(); };
NewBooksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewBooksComponent, selectors: [["app-new-books"]], decls: 4, vars: 0, consts: [[1, "container"], ["src", "assets/images/coming-soon-page.jpg", "alt", "", 1, "img-fluid"]], template: function NewBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYm9va3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30465:
/*!******************************************************!*\
  !*** ./src/app/layout/new-books/new-books.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBooksModule": () => (/* binding */ NewBooksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-books-routing.module */ 12912);
/* harmony import */ var _new_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-books.component */ 6250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class NewBooksModule {
}
NewBooksModule.ɵfac = function NewBooksModule_Factory(t) { return new (t || NewBooksModule)(); };
NewBooksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewBooksModule });
NewBooksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewBooksRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewBooksModule, { declarations: [_new_books_component__WEBPACK_IMPORTED_MODULE_2__.NewBooksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewBooksRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=465.js.map
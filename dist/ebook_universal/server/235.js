"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 47600:
/*!****************************************************************!*\
  !*** ./src/app/layout/newsletter/newsletter-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterRoutingModule": () => (/* binding */ NewsletterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _newsletter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter.component */ 82421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _newsletter_component__WEBPACK_IMPORTED_MODULE_0__.NewsletterComponent,
    },
];
class NewsletterRoutingModule {
}
NewsletterRoutingModule.ɵfac = function NewsletterRoutingModule_Factory(t) { return new (t || NewsletterRoutingModule)(); };
NewsletterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewsletterRoutingModule });
NewsletterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsletterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 82421:
/*!***********************************************************!*\
  !*** ./src/app/layout/newsletter/newsletter.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterComponent": () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);









function NewsletterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NewsletterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class NewsletterComponent {
    constructor(formBuilder, apiService, toastr, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
        this.submitted = false;
        this.hasError = false;
        this.hasErrorCheckbox = false;
    }
    ngOnInit() {
        this.newsletterForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.emailRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(320),
                ])
            ],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.newsletterForm.invalid) {
            return;
        }
        console.log('this.newsletterForm', this.newsletterForm.value);
        let obj = {
            'email': this.newsletterForm.value.email,
        };
        this.apiService.postData('footer/contact', obj).subscribe((result) => {
            this.toastr.success('Thank you for subscribing our newsletter.', 'Success!');
        }, (error) => {
            this.hasError = true;
            if (error.error.responseCode == 403 || error.error.responseCode == 400) {
                this.router.navigate(['/login']);
            }
            else {
                this.toastr.error(error.error.responseMessage, 'Kļūda!');
            }
        });
    }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
NewsletterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], decls: 18, vars: 6, consts: [[1, "newsletter-main"], [1, "container"], [1, "newsletter-content"], [1, "newsletter-content__inner"], [1, "modal__heading"], [1, "email-box"], ["id", "contact-form", "name", "contact-form", 1, "contact-form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "email", "name", "email", "placeholder", "E-pasta adrese", 1, "form-control", "email-box__input", 3, "ngClass"], ["type", "submit", 1, "email-box__button"], [1, "fa-paper-plane", "fa"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "PIESAKIES TAGAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pievienojieties m\u016Bsu arvien pieaugo\u0161ajai gr\u0101matu m\u012B\u013Cot\u0101ju saimei, abon\u0113jot m\u016Bsu jaunumu lapu, un sa\u0146emiet jaun\u0101k\u0101s zi\u0146as par gr\u0101mat\u0101m un podk\u0101stiem. Lab\u0101kie st\u0101sti s\u0101kas Audiolas\u012Btava.lv");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewsletterComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NewsletterComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NewsletterComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-footer");
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.newsletterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.newsletterForm.controls["email"].invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_2_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_3_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_3_0.hasError("pattern")));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 10px;\n  line-height: 1.42857143;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: inherit;\n}\n\n.newsletter-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 100px);\n  position: relative;\n}\n\n.newsletter-content__inner[_ngcontent-%COMP%] {\n  background: #993238;\n  color: #FFF;\n  width: 70%;\n  border-radius: 4px;\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n  padding: 4rem;\n  position: relative;\n}\n\n.modal__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3rem;\n  left: 39%;\n  margin-left: -7rem;\n  background: #993238;\n  padding: 3rem 12rem 0 12rem;\n  border-radius: 50%;\n}\n\n.modal__heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 2.6rem;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.email-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 40rem;\n  width: 100%;\n}\n\n.email-box__input[_ngcontent-%COMP%] {\n  color: #333333;\n  display: block;\n  width: 100%;\n  height: 4rem;\n  border-radius: 4px;\n  border: 1px solid #993238;\n  font-size: 1.4rem;\n  padding: 1rem;\n}\n\n.email-box__button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n  background: transparent;\n  font-size: 2rem;\n  position: absolute;\n  color: #993238;\n  right: 0.8rem;\n  top: 0.5rem;\n  padding: 0;\n}\n\n.email-box__button[_ngcontent-%COMP%]:hover, .email-box__button[_ngcontent-%COMP%]:focus {\n  color: #a32815;\n}\n\n.email-box[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n@media only screen and (max-width: 767px) {\n  .newsletter-main[_ngcontent-%COMP%] {\n    margin: 100px auto;\n    height: auto;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .modal[_ngcontent-%COMP%] {\n    width: 30rem;\n  }\n  .modal__icon[_ngcontent-%COMP%] {\n    margin-left: -105px;\n    padding: 3rem 6rem 0 6rem;\n    border-radius: 50%;\n  }\n  .email-box[_ngcontent-%COMP%] {\n    width: 25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNFOzs7RUFHRSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUxFO0VBQ0Usd0JBQUE7RUFFUSxnQkFBQTtFQUNSLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFRSjs7QUFORTs7RUFFRSxjQUFBO0FBU0o7O0FBUEU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSRTtFQUNJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBV047QUFDRjs7QUFURTtFQUNFO0lBQ0UsWUFBQTtFQVdKO0VBVEU7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7RUFXSjtFQVRFO0lBRUUsWUFBQTtFQVVKO0FBQ0YiLCJmaWxlIjoibmV3c2xldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB9XG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG4gIC5uZXdzbGV0dGVyLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICB9XG4gXG4gIC5uZXdzbGV0dGVyLWNvbnRlbnRfX2lubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTkzMjM4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA0cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9kYWxfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zcmVtO1xuICAgIGxlZnQ6IDM5JTtcbiAgICBtYXJnaW4tbGVmdDogLTdyZW07XG4gICAgYmFja2dyb3VuZDogIzk5MzIzODtcbiAgICBwYWRkaW5nOiAzcmVtIDEycmVtIDAgMTJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5tb2RhbF9faGVhZGluZyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgfVxuICAubW9kYWwgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmVtYWlsLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTJyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5lbWFpbC1ib3hfX2lucHV0IHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTMyMzg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuZW1haWwtYm94X19idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjOTkzMjM4O1xuICAgIHJpZ2h0OiAwLjhyZW07XG4gICAgdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuZW1haWwtYm94X19idXR0b246aG92ZXIsXG4gIC5lbWFpbC1ib3hfX2J1dHRvbjpmb2N1cyB7XG4gICAgY29sb3I6ICNhMzI4MTU7XG4gIH1cbiAgLmVtYWlsLWJveCAudGV4dC1kYW5nZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAubmV3c2xldHRlci1tYWluIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubW9kYWwge1xuICAgICAgd2lkdGg6IDMwcmVtO1xuICAgIH1cbiAgICAubW9kYWxfX2ljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMDVweDtcbiAgICAgIHBhZGRpbmc6IDNyZW0gNnJlbSAwIDZyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5lbWFpbC1ib3gge1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0xMi41cmVtO1xuICAgICAgd2lkdGg6IDI1cmVtO1xuICAgIH1cbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 11235:
/*!********************************************************!*\
  !*** ./src/app/layout/newsletter/newsletter.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterModule": () => (/* binding */ NewsletterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsletter-routing.module */ 47600);
/* harmony import */ var _newsletter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter.component */ 82421);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class NewsletterModule {
}
NewsletterModule.ɵfac = function NewsletterModule_Factory(t) { return new (t || NewsletterModule)(); };
NewsletterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewsletterModule });
NewsletterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsletterRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewsletterModule, { declarations: [_newsletter_component__WEBPACK_IMPORTED_MODULE_1__.NewsletterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsletterRoutingModule] }); })();


/***/ })

};
;
//# sourceMappingURL=235.js.map
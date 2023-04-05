"use strict";
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 76637:
/*!********************************************************************!*\
  !*** ./src/app/layout/faqs-podcast/faqs-podcast-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPodcastRoutingModule": () => (/* binding */ FaqsPodcastRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faqs_podcast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-podcast.component */ 62402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _faqs_podcast_component__WEBPACK_IMPORTED_MODULE_0__.FaqsPodcastComponent,
    },
];
class FaqsPodcastRoutingModule {
}
FaqsPodcastRoutingModule.ɵfac = function FaqsPodcastRoutingModule_Factory(t) { return new (t || FaqsPodcastRoutingModule)(); };
FaqsPodcastRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FaqsPodcastRoutingModule });
FaqsPodcastRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqsPodcastRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 62402:
/*!***************************************************************!*\
  !*** ./src/app/layout/faqs-podcast/faqs-podcast.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPodcastComponent": () => (/* binding */ FaqsPodcastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);





function FaqsPodcastComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Jums j\u0101s\u0101k ar podk\u0101sta epizodes ierakst\u012B\u0161anu. M\u0113s iesak\u0101m iepriek\u0161 sagatavot programmu un skaidri defin\u0113t t\u0101s t\u0113mu. Jo liel\u0101ka profesionalit\u0101te podkastu sagatavo\u0161an\u0101, jo liel\u0101kas izredzes g\u016Bt pan\u0101kumus. ");
} }
function FaqsPodcastComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Vispirms jums j\u0101re\u0123istr\u0113jas k\u0101 podk\u0101sta vediot\u0101jam, lai v\u0113l\u0101k aug\u0161upiel\u0101d\u0113tu savu pirmo s\u0113riju. Jaunas epizodes varat aug\u0161upiel\u0101d\u0113t jebkur\u0101 laik\u0101. ");
} }
function FaqsPodcastComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Audio ieraksti nedr\u012Bkst p\u0101rsniegt 200MB. ");
} }
function FaqsPodcastComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Audio form\u0101tam j\u0101b\u016Bt MP3 form\u0101t\u0101 ar ieteicamo bitreiti 128 kbps. Audiolas\u012Btava ir ties\u012Bga noraid\u012Bt podk\u0101stu, ja tas neatbilst minim\u0101laj\u0101m kvalit\u0101tes pras\u012Bb\u0101m. ");
} }
function FaqsPodcastComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " J\u0101, j\u016Bs varat bez maksas aug\u0161upiel\u0101d\u0113t savu podk\u0101stu. Pamata pakalpojuma hosting\u0101 ir iek\u013Cautas 3 bezmaksas epizodes m\u0113nes\u012B . Tas ir freemium pakalpojums, un Audiolas\u012Btava patur ties\u012Bbas r\u0101d\u012Bt rekl\u0101mas jebkur\u0101 podk\u0101sta p\u0101rraid\u012B\u0161anas laik\u0101. ");
} }
function FaqsPodcastComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " J\u0101, ja tas atbilst noteikumiem un nosac\u012Bjumiem. Audiolas\u012Btava ne\u013Caus public\u0113t podk\u0101stus, kas p\u0101rk\u0101pj platformas noteiktos noteikumus. ");
} }
function FaqsPodcastComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " N\u0113, tas nav oblig\u0101ti, bet m\u0113s iesak\u0101m aug\u0161upiel\u0101d\u0113t podk\u0101sta ievadu, lai piesaist\u012Btu liel\u0101ku auditoriju uzman\u012Bbu. ");
} }
function FaqsPodcastComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Ar pamata pl\u0101nu j\u016Bs varat aug\u0161upl\u0101d\u0113t 3 epizodes m\u0113nes\u012B. ");
} }
function FaqsPodcastComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Podk\u0101sta autors var p\u0101rvald\u012Bt epizodes, kuras vi\u0146\u0161 v\u0113las redz\u0113t sav\u0101 podk\u0101st\u0101. ");
} }
function FaqsPodcastComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " J\u0101. Lai to izdar\u012Btu, jums j\u0101sazin\u0101s ar mums, izmantojot sazi\u0146as veidlapu, nor\u0101dot savas vajadz\u012Bbas. Tur jums j\u0101paskaidro j\u016Bsu vajadz\u012Bbas, lai m\u0113s var\u0113tu nos\u016Bt\u012Bt jums piel\u0101gotu cenu par nepiecie\u0161amo pakalpojumu. Neaizmirstiet atst\u0101t kontakttelefona numuru, lai m\u0113s var\u0113tu ar jums sazin\u0101ties. ");
} }
function FaqsPodcastComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Izmaksas b\u016Bs atkar\u012Bgas no izmantot\u0101 hostinga jaudas, kas jums b\u016Bs nepiecie\u0161ama atkar\u012Bb\u0101 no epizo\u017Eu aug\u0161upl\u0101des bie\u017Euma. ");
} }
function FaqsPodcastComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " J\u0101, ar pamata pl\u0101nu j\u016Bs varat vienlaic\u012Bgi uztur\u0113t l\u012Bdz pat 2 podk\u0101stiem. ");
} }
function FaqsPodcastComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " N\u0113. Pa\u0161laik visi podk\u0101sti b\u016Bs bez maksas. M\u0113s str\u0101d\u0101jam, lai n\u0101kotn\u0113 j\u016Bs var\u0113tu piepras\u012Bt abon\u0113\u0161anas maksu, ja t\u0101da b\u016Bs. ");
} }
function FaqsPodcastComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " N\u0113. T\u0101 k\u0101 tas ir bezmaksas pakalpojums, kas ir atv\u0113rts sabiedr\u012Bbai, podk\u0101steriem netiks sniegta finansi\u0101la kompens\u0101cija par vi\u0146u atska\u0146ojumiem. ");
} }
function FaqsPodcastComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " J\u0101. J\u016Bs var\u0113siet redz\u0113t sava podk\u0101sta izplat\u012Bbas datus, k\u0101 ar\u012B sekot\u0101jus. ");
} }
function FaqsPodcastComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " N\u0113. Dr\u012Bz b\u016Bs akt\u012Bvs podck\u0101stu programmu import\u0113\u0161anas / eksport\u0113\u0161anas pakalpojums, izmantojot RSS. Pa\u0161laik vien\u012Bgais veids, k\u0101 uztur\u0113t podk\u0101stu akt\u012Bvu, ir manu\u0101li aug\u0161upl\u0101d\u0113t audio failus. ");
} }
function FaqsPodcastComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Visus jaunos podk\u0101stus s\u0101kot\u0146eji apstiprina platformas administrators, lai tie atbilstu vis\u0101m nor\u0101d\u0113m, kas atrun\u0101tas noteikumos un nosac\u012Bjumos. ");
} }
class FaqsPodcastComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        this.setMetaInfo();
    }
    setMetaInfo() {
        let metaTitle = 'Atrast atbildi uz visiem jautājumiem par mūsu podkāstiem';
        let metaDescription = 'Visbiežāk uzdotie jautājumi par podkāstiem ir atbildēti šajā vietnē. Klausieties, lasiet un baudiet.';
        let metaUrl = window.location.href;
        this.titleService.setTitle(metaTitle);
        this.metaService.updateTag({ name: 'description', content: metaDescription });
        this.metaService.addTag({ property: 'og:title', content: metaTitle });
        this.metaService.addTag({ property: 'og:description', content: metaDescription });
        this.metaService.addTag({ property: 'og:url', content: metaUrl });
    }
}
FaqsPodcastComponent.ɵfac = function FaqsPodcastComponent_Factory(t) { return new (t || FaqsPodcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta)); };
FaqsPodcastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FaqsPodcastComponent, selectors: [["app-faqs-podcast"]], decls: 53, vars: 0, consts: [[1, "wrapper"], [1, "container"], [1, "accordianMain"], [1, "titleHead"], [1, "row"], [1, "col-md-6"], ["acc", "ngbAccordion"], ["title", "Esmu ies\u0101c\u0113js podk\u0101stu pasaul\u0113. K\u0101 s\u0101kt?"], ["ngbPanelContent", ""], ["title", "Es v\u0113l\u0113tos uz\u0146emt savu podk\u0101stu Audiolasitav\u0101. K\u0101 es varu to p\u0101rvald\u012Bt?"], ["title", "Vai past\u0101v ierobe\u017Eojumi attiec\u012Bb\u0101 uz podk\u0101sta audio ierakstu lielumu?"], ["title", "K\u0101d\u0101 form\u0101t\u0101 man vajadz\u0113tu aug\u0161upiel\u0101d\u0113t savas podk\u0101sta epizodes?"], ["title", "Vai podk\u0101sta hostings Audiolasitav\u0101 ir bez maksas?"], ["title", "Vai es varu aug\u0161upiel\u0101d\u0113t podk\u0101stu par jebkuru t\u0113mu?"], ["title", "Vai ir nepiecie\u0161ams, lai podk\u0101sta prezent\u0101cija b\u016Btu audio form\u0101t\u0101, lai aug\u0161upiel\u0101d\u0113tu programmu?"], ["title", "Cik podk\u0101sta epizodes var b\u016Bt akt\u012Bvas vienlaic\u012Bgi?"], ["title", "K\u0101 es varu p\u0101rvald\u012Bt akt\u012Bv\u0101s epizodes sav\u0101 podk\u0101st\u0101?"], ["title", "Vai es varu palielin\u0101t akt\u012Bvo epizo\u017Eu skaitu?"], ["title", "Cik maks\u0101 \u0161is papla\u0161in\u0101tais hostinga pakalpojums?"], ["title", "Vai es varu vienlaic\u012Bgi izveidot vair\u0101kus podk\u0101stus vien\u0101 kont\u0101?"], ["title", "Vai es varu l\u016Bgt samaksu par savu podk\u0101stu?"], ["title", "Vai es varu monetiz\u0113t savus podk\u0101stus, balstoties uz sa\u0146emtajiem skat\u012Bjumiem?"], ["title", "Vai es varu redz\u0113t sava podk\u0101sta klaus\u012Bt\u0101ju skaitu?"], ["title", "Vai var import\u0113t vai eksport\u0113t podcastu, izmantojot RSS pl\u016Bsmu?"], ["title", "Es aug\u0161upl\u0101d\u0113ju savu podk\u0101stu Audiolas\u012Btav\u0101, bet nevaru to atrast t\u012Bmekl\u012B vai lietotn\u0113."], [1, "buttonClass"], ["target", "_blank", "href", "https://us21.list-manage.com/contact-form?u=6f9d1c2564ee09de428d19acd&form_id=3e0113dcbff032c6d30180432101cd70"], [1, "btn", "btn-primary", "styleChanges"]], template: function FaqsPodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Par podk\u0101stiem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "ngb-accordion", null, 6)(11, "ngb-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FaqsPodcastComponent_ng_template_12_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ngb-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FaqsPodcastComponent_ng_template_14_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ngb-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FaqsPodcastComponent_ng_template_16_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ngb-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FaqsPodcastComponent_ng_template_18_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ngb-panel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FaqsPodcastComponent_ng_template_20_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ngb-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FaqsPodcastComponent_ng_template_22_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ngb-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FaqsPodcastComponent_ng_template_24_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ngb-panel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FaqsPodcastComponent_ng_template_26_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5)(28, "ngb-accordion", null, 6)(30, "ngb-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, FaqsPodcastComponent_ng_template_31_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ngb-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FaqsPodcastComponent_ng_template_33_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ngb-panel", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, FaqsPodcastComponent_ng_template_35_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ngb-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, FaqsPodcastComponent_ng_template_37_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ngb-panel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, FaqsPodcastComponent_ng_template_39_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ngb-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, FaqsPodcastComponent_ng_template_41_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ngb-panel", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, FaqsPodcastComponent_ng_template_43_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ngb-panel", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, FaqsPodcastComponent_ng_template_45_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ngb-panel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, FaqsPodcastComponent_ng_template_47_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 25)(49, "a", 26)(50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Sazinies ar mums!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "app-footer");
    } }, dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanelContent], styles: [".titleHead[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 50px 0;\n}\n\n.buttonClass[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 30px;\n}\n\n.btn[_ngcontent-%COMP%]:first-child:hover {\n  color: #999999;\n  background-color: #79222a;\n  border-color: #79222a;\n}\n\n.styleChanges[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background-color: #79222a;\n  border: 1px solid #79222a;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: 0;\n  box-shadow: none;\n  border-top-right-radius: 0;\n}\n\n.accordianMain[_ngcontent-%COMP%]  button.accordion-button.collapsed {\n  border-top-left-radius: 0;\n  box-shadow: none;\n  border-top-right-radius: 0;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-item {\n  border-left: none !important;\n  border-right: none !important;\n  border-color: #79222a;\n  border-radius: 0 !important;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-button:not(.collapsed):focus {\n  box-shadow: none !important;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-button:not(.collapsed):hover {\n  box-shadow: none !important;\n}\n\n .accordion-button:not(.collapsed) {\n  color: #79222a !important;\n  background-color: transparent !important;\n  box-shadow: none !important;\n  border: #999999 !important;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-body {\n  font-size: 14px !important;\n}\n\n.accordianMain[_ngcontent-%COMP%] .accordion-button::after {\n  background-image: url('down-arrow.png') !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMtcG9kY2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBTUo7O0FBSkE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQU9KOztBQUxBO0VBQ0ksMkJBQUE7QUFRSjs7QUFOQTtFQUNJLDJCQUFBO0FBU0o7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQVVKOztBQVJBO0VBQ0ksMEJBQUE7QUFXSjs7QUFSQTtFQUNJLGtEQUFBO0FBV0oiLCJmaWxlIjoiZmFxcy1wb2RjYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlSGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHggMDtcbn1cbi5idXR0b25DbGFzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHg7XG59XG4uYnRuOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3OTIyMmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzkyMjJhO1xufVxuLnN0eWxlQ2hhbmdlcyB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTIyMmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5MjIyYTtcbn1cbi5hY2NvcmRpYW5NYWluOjpuZy1kZWVwLmFjY29yZGlvbi1pdGVtOmZpcnN0LW9mLXR5cGU6Om5nLWRlZXAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLmFjY29yZGlhbk1haW46Om5nLWRlZXAgYnV0dG9uLmFjY29yZGlvbi1idXR0b24uY29sbGFwc2Vke1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5hY2NvcmRpYW5NYWluOjpuZy1kZWVwLmFjY29yZGlvbi1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogIzc5MjIyYTtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4uYWNjb3JkaWFuTWFpbjo6bmctZGVlcC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKTpmb2N1c3tcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uYWNjb3JkaWFuTWFpbjo6bmctZGVlcC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKTpob3ZlcntcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xuICAgIGNvbG9yOiAjNzkyMjJhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAjOTk5OTk5ICFpbXBvcnRhbnQ7XG59XG4uYWNjb3JkaWFuTWFpbjo6bmctZGVlcC5hY2NvcmRpb24tYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY2NvcmRpYW5NYWluOjpuZy1kZWVwLmFjY29yZGlvbi1idXR0b246OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcnKSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 34052:
/*!************************************************************!*\
  !*** ./src/app/layout/faqs-podcast/faqs-podcast.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPodcastModule": () => (/* binding */ FaqsPodcastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _faqs_podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-podcast-routing.module */ 76637);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _faqs_podcast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs-podcast.component */ 62402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class FaqsPodcastModule {
}
FaqsPodcastModule.ɵfac = function FaqsPodcastModule_Factory(t) { return new (t || FaqsPodcastModule)(); };
FaqsPodcastModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FaqsPodcastModule });
FaqsPodcastModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _faqs_podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPodcastRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FaqsPodcastModule, { declarations: [_faqs_podcast_component__WEBPACK_IMPORTED_MODULE_2__.FaqsPodcastComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _faqs_podcast_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPodcastRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] }); })();


/***/ })

};
;
//# sourceMappingURL=52.js.map
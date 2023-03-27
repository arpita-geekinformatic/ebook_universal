"use strict";(self.webpackChunkangularU_testing=self.webpackChunkangularU_testing||[]).push([[22],{4022:(W,p,g)=>{g.r(p),g.d(p,{ChangePasswordModule:()=>z});var d=g(6895),P=g(4931),e=g(433),n=g(4650),l=g(5830),f=g(7185);function u(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.Errormessage," ")}}function h(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.Errormessage," ")}}function x(t,c){1&t&&(n.TgZ(0,"div",19),n._uU(1," Please enter valid password. "),n.qZA())}function m(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.passwordErrorMessage," ")}}function w(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.Errormessage," ")}}function b(t,c){1&t&&(n.TgZ(0,"div",19),n._uU(1," Please enter valid password. "),n.qZA())}function S(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.passwordErrorMessage," ")}}function k(t,c){if(1&t&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.passwordNotMatch," ")}}const I=[{path:"",component:(()=>{class t{constructor(o,i,r,a){this.formBuilder=o,this.apiService=i,this.router=r,this.toastr=a,this.passwordErrorMessage="Password is too short",this.passwordNotMatch="",this.submitted=!1,this.hasError=!1,this.passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,this.Errormessage="Required."}ngOnInit(){this.changePasswordForm=this.formBuilder.group({oldPassword:["",e.kI.compose([e.kI.required,e.kI.minLength(3),e.kI.maxLength(320)])],password:["",[e.kI.required,e.kI.pattern(this.passwordRegex),e.kI.minLength(6),e.kI.maxLength(30)]],confirmPassword:["",[e.kI.required,e.kI.pattern(this.passwordRegex),e.kI.minLength(6),e.kI.maxLength(30)]]},{validators:this.password.bind(this)})}password(o){const i=o.get("password"),r=o.get("confirmPassword");return this.passwordNotMatch=i?.value===r?.value?"":"Password don't match"}changePassword(){this.submitted=!0,this.apiService.postData("user/changePassword",{oldPassword:this.changePasswordForm.value.oldPassword,password:this.changePasswordForm.value.password}).subscribe(i=>{this.toastr.success("Password Changed.","Success!")},i=>{this.hasError=!0,this.toastr.error(i.error.responseMessage,"Error!")},()=>{this.router.navigateByUrl("/home")})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(e.qu),n.Y36(l.s),n.Y36(P.F0),n.Y36(f._W))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-change-password"]],decls:39,vars:9,consts:[[1,"loginPage"],[1,"wrapper"],[1,"container"],[1,"row"],[1,"col-12"],[1,"loginMain","m-auto"],[1,"m-auto","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","oldPassword"],[1,"passwordIcon"],["type","password","formControlName","oldPassword","id","oldPassword","placeholder","Vec\u0101 parole","name","oldPassword",1,"form-control"],["class","text-danger",4,"ngIf"],["for","pwd"],["type","password","formControlName","password","id","pwd","placeholder","Parole","name","pswd",1,"form-control"],[1,"errors"],["type","password","formControlName","confirmPassword","id","pwd","placeholder","Apstipriniet paroli","name","pswd",1,"form-control"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-primary"],[1,"text-danger"]],template:function(o,i){if(1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h1"),n._uU(8,"Main\u012bt paroli"),n.qZA()(),n.TgZ(9,"form",7),n.NdJ("ngSubmit",function(){return i.changePassword()}),n.TgZ(10,"div",8)(11,"label",9),n._uU(12,"Vec\u0101 parole:"),n.qZA(),n.TgZ(13,"div",10),n._UZ(14,"input",11),n.qZA()(),n.TgZ(15,"div"),n.YNc(16,u,2,1,"div",12),n.qZA(),n.TgZ(17,"div",8)(18,"label",13),n._uU(19,"Parole:"),n.qZA(),n.TgZ(20,"div",10),n._UZ(21,"input",14),n.qZA()(),n.TgZ(22,"div",15),n.YNc(23,h,2,1,"div",12),n.YNc(24,x,2,0,"div",12),n.YNc(25,m,2,1,"div",12),n.qZA(),n.TgZ(26,"div",8)(27,"label",13),n._uU(28,"Apstipriniet paroli:"),n.qZA(),n.TgZ(29,"div",10),n._UZ(30,"input",16),n.qZA()(),n.TgZ(31,"div",15),n.YNc(32,w,2,1,"div",12),n.YNc(33,b,2,0,"div",12),n.YNc(34,S,2,1,"div",12),n.YNc(35,k,2,1,"div",12),n.qZA(),n.TgZ(36,"div",17)(37,"button",18),n._uU(38,"Main\u012bt paroli"),n.qZA()()()()()()()()()),2&o){let r,a,M,C,s,_,O;n.xp6(9),n.Q6J("formGroup",i.changePasswordForm),n.xp6(7),n.Q6J("ngIf",i.submitted&&(null==(r=i.changePasswordForm.get("oldPassword"))?null:r.hasError("required"))),n.xp6(7),n.Q6J("ngIf",i.submitted&&(null==(a=i.changePasswordForm.get("password"))?null:a.hasError("required"))),n.xp6(1),n.Q6J("ngIf",null==(M=i.changePasswordForm.get("password"))?null:M.hasError("pattern")),n.xp6(1),n.Q6J("ngIf",null==(C=i.changePasswordForm.get("password"))?null:C.hasError("minLength")),n.xp6(7),n.Q6J("ngIf",i.submitted&&(null==(s=i.changePasswordForm.get("confirmPassword"))?null:s.hasError("required"))),n.xp6(1),n.Q6J("ngIf",null==(_=i.changePasswordForm.get("confirmPassword"))?null:_.hasError("pattern")),n.xp6(1),n.Q6J("ngIf",null==(O=i.changePasswordForm.get("password"))?null:O.hasError("minLength")),n.xp6(1),n.Q6J("ngIf",i.submitted)}},dependencies:[d.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@500;600&family=Mulish:wght@500&display=swap";[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.3;color:#fff}[_ngcontent-%COMP%]::-moz-placeholder{opacity:.3;color:#fff}[_ngcontent-%COMP%]:-ms-input-placeholder{opacity:.3;color:#fff}body[_ngcontent-%COMP%]{font-family:Inter}a[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{transition:.5s all ease-in-out}.carousel-control-prev[_ngcontent-%COMP%]{opacity:0;filter:alpha(opacity=0)}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center center;background-size:cover;height:500px;background-color:#fff2cc;margin:70px 0}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]{padding:0 0 10%}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:16px;letter-spacing:-.02em;text-transform:uppercase;color:#000}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:46px;line-height:52px;text-transform:capitalize;color:#000}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:18px;line-height:32px;letter-spacing:-.02em;text-transform:capitalize;color:#000}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]{font-weight:700;font-size:15px;line-height:16px;text-align:center;letter-spacing:-.02em;color:#fff;border:2px solid #000;border-radius:100px;background:#000;padding:18px 35px;margin-right:15px}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.fragmentbtn[_ngcontent-%COMP%]:hover{background-color:transparent;color:#000}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]{font-weight:700;font-size:15px;line-height:16px;text-align:center;letter-spacing:-.02em;color:#000;border:2px solid #000;border-radius:100px;background:transparent;padding:18px 35px}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button.entireBtn[_ngcontent-%COMP%]:hover{color:#fff;border:2px solid #000;border-radius:100px;background:#000}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]{position:relative;bottom:50px;width:85%;display:flex;justify-content:flex-end}.audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;transform:rotate(10deg);border:20px solid #fff;max-height:590px;min-height:590px}ul.breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 20px;position:relative}ul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{background-image:url(arrowLeft.5a35053b0f75abc2.svg);position:absolute;content:"";right:-7px;width:14px;height:9px;background-size:14px 10px;transform:translateY(-50%);top:50%}ul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after{display:none}ul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:12px;letter-spacing:-.02em;color:#a4353b;text-decoration:none}ul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]{padding:50px 0 120px}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]{max-width:750px;margin:auto;padding:0 15px}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:20px;text-align:center;color:#000}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:40px 0 70px;font-weight:400;font-size:16px;line-height:24px;text-align:center;color:#000}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]{padding:0 50px}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0;font-weight:600;font-size:24px;line-height:24px;text-align:center;color:#000}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:24px;text-align:center;color:#000}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]{position:relative}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%]{position:absolute;left:0;transform:translateY(-50%);top:50%}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%]{position:absolute;right:0;transform:translateY(-50%);top:50%}.offerSection[_ngcontent-%COMP%]{margin:30px 0;position:relative}.offerSection[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:440px;background:#A4353B;top:55px;bottom:0;z-index:-1}.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:16px;letter-spacing:-.02em;text-transform:uppercase;color:#fff}.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:46px;line-height:46px;color:#fff;margin:20px 0}.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:18px;line-height:32px;letter-spacing:-.02em;color:#fffefe}.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]{font-size:15px;line-height:16px;text-align:center;letter-spacing:-.02em;text-transform:uppercase;color:#fff;border-radius:100px;border:1px solid #fff;width:220px;height:57px;background:transparent;font-weight:700;transition:.5s all ease-in-out}.offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #0003}.offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}ul[_ngcontent-%COMP%]   .ratingWrap[_ngcontent-%COMP%]   li.img[_ngcontent-%COMP%]{padding:4px}footer.footerWrapper[_ngcontent-%COMP%]{padding-bottom:70px}.padding100[_ngcontent-%COMP%]{padding:100px 0}.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:40px;line-height:18px;color:#333;margin-bottom:25px}.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:21px;line-height:33px;letter-spacing:.02em;color:#000}.about-text[_ngcontent-%COMP%]   span.read-more[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:22px;line-height:16px;color:#a4353b;cursor:pointer}@media (min-width: 100px){.order-sm-1[_ngcontent-%COMP%]{order:1!important}.order-sm-2[_ngcontent-%COMP%]{order:2!important}}@media (min-width: 1500px){.container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:1440px}}@media only screen and (max-width: 1499px){.offerSection[_ngcontent-%COMP%]:after{height:400px}}@media only screen and (max-width: 1399px){.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]:after{height:350px;top:45px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;line-height:36px;margin:12px 0}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:26px;font-size:16px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]{bottom:20px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:520px;min-height:520px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]{align-items:flex-start!important}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]{padding:5% 0}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:38px;line-height:44px}}@media only screen and (max-width: 1199px){.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]{height:400px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]{align-items:flex-start!important}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]{padding:2% 0}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:36px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:22px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:36px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:22px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:420px;min-height:420px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]:after{height:280px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:36px;margin:12px 0}}@media only screen and (max-width: 991px){.about-image[_ngcontent-%COMP%]{margin-bottom:30px}.contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]{padding:80px 0}.contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0 40px}.contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap[_ngcontent-%COMP%]{padding:0 20px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]{height:300px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]{padding:3% 0}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;line-height:22px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:14px;line-height:16px;padding:12px 15px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:16px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]{bottom:20px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:320px;min-height:320px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]:after{height:250px;top:10px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;line-height:30px;margin:8px 0}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px;font-size:14px}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   button.offerBtn[_ngcontent-%COMP%]{font-size:14px;width:200px;height:42px}.contentPart[_ngcontent-%COMP%]   .background.bookCollection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:95%}.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]{padding:10px!important}.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px!important;margin-bottom:5px!important}.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .singleProduct[_ngcontent-%COMP%]   .productTxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:5px!important}}@media only screen and (max-width: 850px){.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{justify-content:center}.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:0 0 auto;width:50%;margin-top:1.5rem}}@media only screen and (max-width: 767px){.contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:15px 0}.contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.leftArrow[_ngcontent-%COMP%], .contentPart[_ngcontent-%COMP%]   .workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .blockWrap.icons[_ngcontent-%COMP%]   span.rightArrow[_ngcontent-%COMP%]{position:inherit;left:0;transform:none;top:0;right:auto;margin:10px 0}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]{height:auto;background-size:cover;padding:30px 0}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]{padding-bottom:30px!important}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:40px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]{bottom:0;justify-content:center}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .mobileImageWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px auto}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]{background:#A4353B;padding:30px 0}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]:after{display:none}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .mobileImage[_ngcontent-%COMP%]{margin-top:20px}}@media only screen and (max-width: 480px){.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]{padding:40px 0}.workSection[_ngcontent-%COMP%]   .workSectionInner[_ngcontent-%COMP%]   .headingTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;line-height:40px}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]{flex-direction:column}.contentPart[_ngcontent-%COMP%]   .audioSection[_ngcontent-%COMP%]   .audioSectionInner[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%]   .audioTextWrap[_ngcontent-%COMP%]   .btnsWrap.d-flex[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 0}.contentPart[_ngcontent-%COMP%]   .productWrapper[_ngcontent-%COMP%]   .productline[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{width:100%}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]{margin:0}.contentPart[_ngcontent-%COMP%]   .offerSection[_ngcontent-%COMP%]   .offerText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:36px}}[_ngcontent-%COMP%]::-webkit-input-placeholder{opacity:.3;color:#fff}[_ngcontent-%COMP%]:-moz-placeholder{opacity:.3;color:#fff}[_ngcontent-%COMP%]::-moz-placeholder{opacity:.3;color:#fff}[_ngcontent-%COMP%]:-ms-input-placeholder{opacity:.3;color:#fff}.loginPage[_ngcontent-%COMP%]{background:linear-gradient(180deg,#A4353B -28.09%,#000000 69.94%);display:inline-block;width:100%;height:calc(100vh - 18px);color:#fff}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]{max-width:480px;padding:40px;box-shadow:0 0 10px #a4353b33;border-radius:12px;position:absolute;width:100%;transform:translate(-50%,-50%);left:50%;top:50%}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:250px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-family:Inter;font-weight:500;margin:35px 0 15px;font-size:30px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:12px 0;display:inline-block;flex-direction:column;width:100%}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin:5px 0}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .emailIcons[_ngcontent-%COMP%]{background-image:url(emailIcon.13460457455481af.svg);background-position:15px center;background-repeat:no-repeat}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .passwordIcon[_ngcontent-%COMP%]{background-image:url(lockIcon.dce19715a0b37b6e.svg);background-position:15px center;background-repeat:no-repeat}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input#email[_ngcontent-%COMP%], .loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input#pwd[_ngcontent-%COMP%]{background-image:none!important;height:46px;border:1px solid #A4353B;background-color:transparent;font-size:14px;color:#fff;padding-left:50px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:0 0 10px #a4353b80}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{height:20px;width:20px;background:transparent;border:1px solid #fff}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked[type=checkbox]{background-image:url(tickIcon.84a47db8bc8958cb.svg)!important;background-size:20px 10px;background-color:#a4353b;background-repeat:no-repeat;background-position:center center;border-color:#a4353b}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{background:#A4353B;border:1px solid #A4353B;width:150px;font-family:Inter;font-weight:500;height:46px;margin-top:15px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]:hover{opacity:.7}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group.forgotPassword[_ngcontent-%COMP%], .loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group.forgotPassword[_ngcontent-%COMP%]   label.form-check-label[_ngcontent-%COMP%]{margin-top:0}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group.forgotPassword[_ngcontent-%COMP%]   label.form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:14px;font-weight:400}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]{margin-top:15px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a4353b;text-decoration:none}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .lowerLinks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}input#oldPassword[_ngcontent-%COMP%]{background-image:none!important;height:46px;border:1px solid #A4353B;background-color:transparent;font-size:14px;color:#fff;padding-left:50px}@media only screen and (max-width: 899px) and (min-width: 800px){.loginPage[_ngcontent-%COMP%]{height:auto;padding:50px 0}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]{max-width:480px;padding:20px;box-shadow:0 0 10px #a4353b33;border-radius:12px;position:inherit;width:100%;transform:translate(0);left:auto;top:auto}}@media only screen and (max-width: 767px) and (min-width: 480px){.loginPage[_ngcontent-%COMP%]{height:auto;padding:50px 0}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]{max-width:480px;padding:20px;box-shadow:0 0 10px #a4353b33;border-radius:12px;position:inherit;width:100%;transform:translate(0);left:auto;top:auto}}@media only screen and (max-width: 480px){.loginPage[_ngcontent-%COMP%]{height:auto}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]{max-width:100%;padding:10px;position:inherit;transform:translate(0);left:auto;top:auto}.loginPage[_ngcontent-%COMP%]   .loginMain[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{width:100%;margin-top:0}}@media screen and (max-width: 390px) and (max-height: 844px){.loginPage[_ngcontent-%COMP%]{height:100vh}}@media screen and (max-width: 414px) and (max-height: 896px){.loginPage[_ngcontent-%COMP%]{height:100vh}}']}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[P.Bz.forChild(I),P.Bz]}),t})();var T=g(4466),y=g(8669);let z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.ez,v,T.m,y.IJ,e.UX]}),t})()}}]);
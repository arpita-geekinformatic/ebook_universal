import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
  submitted = false;
  Errormessage = "Required.";
  passwordErrorMessage = "Password is too short";
  hasError: boolean = false;
  forgotPasswordForm!: FormGroup;
  forgotPasswordStatus = 'forgotPassword';
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  passwordNotMatch = "";

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private modalService: NgbModal,
    config: NgbModalConfig,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('authorization') != null) this.router.navigate(['/home']);
    }

    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.minLength(3),
        Validators.maxLength(320),
      ])
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]]
    });
    this.forgotPasswordForm = this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.minLength(3),
        Validators.maxLength(320),
      ])
      ],
      otp: ["", Validators.required],
      password: ['', [
        Validators.required,
        Validators.pattern(this.passwordRegex),
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern(this.passwordRegex),
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
    }, {
      validators: this.password.bind(this)
    })
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.postData("user/signin", this.loginForm.value).subscribe(
      (result: any) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("authorization", result.data.accessToken);
          this.toastr.success("Logged In.", "Success!");
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, "Error!");
      }
    );
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  //  forgot password email  //
  forgotPassword() {
    console.log("email sent", this.forgotPasswordForm.value)
    let obj = {
      'email': this.forgotPasswordForm.value.email
    }
    this.apiService.postData("user/forgotPassword", obj).subscribe(
      (result: any) => {
        this.toastr.success("Email sent please check.", "Success!");
        this.forgotPasswordStatus = 'otp';
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, "Error!");
      }
    );
  }

  // send otp //
  sendLink() {
    let obj = {
      email: this.forgotPasswordForm.value.email,
      otp: this.forgotPasswordForm.value.otp
    }
    this.apiService.postData("user/verifyOTP", obj).subscribe(
      (result: any) => {
        this.toastr.success("Code sent.", "Success!");
        this.forgotPasswordStatus = 'changePassword';
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, "Error!");
      }
    );
  }

  password(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password?.value === confirmPassword?.value ? this.passwordNotMatch = "" : this.passwordNotMatch = "Password don't match";
  }

  //  change password  //
  changePassword(func: any) {
    this.submitted = true;
    let obj = {
      'email': this.forgotPasswordForm.value.email,
      'password': this.forgotPasswordForm.value.password
    }
    this.apiService.postData('user/resetPassword', obj).subscribe(
      (result: any) => {
        this.toastr.success("Password Changed.", "Success!");
        func;
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, "Error!");
      }
    );
  }
}

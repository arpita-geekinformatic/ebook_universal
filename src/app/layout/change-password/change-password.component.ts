import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  passwordErrorMessage = "Password is too short";
  passwordNotMatch = "";
  submitted = false;
  hasError: boolean = false;
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  Errormessage = "Required.";
  
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ["", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(320),
      ])
      ],
      password: ['', [
        Validators.required,
        Validators.pattern(this.passwordRegex),
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern(this.passwordRegex),
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
    }, {
      validators: this.password.bind(this)
    });
  }
  password(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password?.value === confirmPassword?.value ? this.passwordNotMatch = "" : this.passwordNotMatch = "Password don't match";
  }
  changePassword(){
    this.submitted = true;
    let obj = {
      'oldPassword': this.changePasswordForm.value.oldPassword,
      'password': this.changePasswordForm.value.password
    }
    this.apiService.postData('user/changePassword', obj).subscribe(
      (result: any) => {
          this.toastr.success('Password Changed.', 'Success!');
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, 'Error!');
      },
      () => {
        this.router.navigateByUrl('/home');
      }
    );
  }
}

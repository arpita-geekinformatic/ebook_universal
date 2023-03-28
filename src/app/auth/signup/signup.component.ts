import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm!: FormGroup;
  // emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
  submitted = false;
  Errormessage = "Required.";
  passwordErrorMessage = "Password is too short";
  passwordNotMatch = "";
  hasError: boolean = false;
  hasErrorCheckbox: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    public authService: AuthService
  ) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      uname: ["", Validators.required],
      checkbox: [true, Validators.required],
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
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
    }, {
      validators: this.password.bind(this)
    });
    this.hasErrorCheckbox = this.userForm.value.checkbox;
  }
  password(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password?.value === confirmPassword?.value ? this.passwordNotMatch = "" : this.passwordNotMatch = "Password don't match";
  }
  registerUser() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let obj = {
      'name': this.userForm.value.uname,
      'email': this.userForm.value.email,
      'password': this.userForm.value.password
    }
    this.apiService.postData('user/signup', obj).subscribe(
      (result: any) => {
          this.toastr.success('Lietotājs ir veiksmīgi izveidots', 'Success!');
          this.router.navigateByUrl('/login');
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, 'Kļūda!');
      }
    );
  }

  checkValue(event: any) {
    this.hasErrorCheckbox = event.currentTarget.checked;
  }
}

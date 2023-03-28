import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {
  newsletterForm!: FormGroup;
  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
  submitted = false;
  hasError: boolean = false;
  hasErrorCheckbox: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.newsletterForm = this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.minLength(3),
        Validators.maxLength(320),
      ])
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.newsletterForm.invalid) {
      return;
    }

    console.log('this.newsletterForm', this.newsletterForm.value)
    let obj = {
      'email': this.newsletterForm.value.email,
    }
    this.apiService.postData('footer/contact', obj).subscribe(
      (result: any) => {        
        this.toastr.success('Thank you for subscribing our newsletter.', 'Success!'); 
      },
      (error) => {
        this.hasError = true;
        if (error.error.responseCode == 403 || error.error.responseCode == 400) {
          this.router.navigate(['/login'])
        }
        else{
          this.toastr.error(error.error.responseMessage, 'Kļūda!');
        }
      }
    );
  }

}

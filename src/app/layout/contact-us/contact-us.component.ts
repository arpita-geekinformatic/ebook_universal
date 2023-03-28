import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
  submitted  = false;
  hasError: boolean = false;
  hasErrorCheckbox: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,  
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.minLength(3),
        Validators.maxLength(320),
      ])
      ],
      phone: ["", Validators.required],
      subject: ["", Validators.required],
      description: ["", Validators.required],
      isConsent: [false, Validators.requiredTrue],
    });

  }
  

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    console.log('this.contactForm', this.contactForm.value)
    let obj = {
      'name': this.contactForm.value.name,
      'email': this.contactForm.value.email,
      'phone': this.contactForm.value.phone,
      'subject': this.contactForm.value.subject,
      'description': this.contactForm.value.description,
    }
    this.apiService.postData('footer/contact', obj).subscribe(
      (result: any) => {
          this.toastr.success('Lietotājs ir veiksmīgi izveidots', 'Success!');
          // this.router.navigateByUrl('/login');
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, 'Kļūda!');
      }
    );
  }
}

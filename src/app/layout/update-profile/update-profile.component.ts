import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm!: FormGroup;
  submitted = false;
  hasError: boolean = false;
  Errormessage = "Required.";
  userData: any = [];
  updateId: any = "";
  uploadedFile!: string;
  public IMAGE_URL = environment.IMAGE_URL;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.updateProfileForm = this.formBuilder.group({
      name: [""],
      email: [""],
      files: [""]
    });
    this.getUserDetail();
  }

  // /user/detail
  updateProfile() {
    this.submitted = true;
    var formData: any = new FormData();
    formData.append('files', this.updateProfileForm.value.files);
    formData.append('name', this.updateProfileForm.value.name);

    if (this.updateId) {
      this.apiService.putFileData(`user/update/${this.updateId}`, formData).subscribe(
        (result: any) => {
          localStorage.setItem("name", result.data.name);
          this.toastr.success('Profile Updated.', 'Success!');
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.hasError = true;
          this.toastr.error(error.error.responseMessage, 'Error!');
        },
      );
    }
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }

  getUserDetail() {
    this.apiService.getData('web/user/detail').subscribe(
      (result: any) => {
        if (result.responseCode === 200) {
          this.updateId = result.data._id;
          this.uploadedFile = this.IMAGE_URL + result.data.image
          this.updateProfileForm.patchValue({
            name: result.data.name,
            email: result.data.email,
            files: result.data.image,
          });
        }
      },
      (error) => {
        this.hasError = true;
        this.toastr.error(error.error.responseMessage, 'Error!');
      }
    );
  }

  //  file upload  //
  onFileUpload(event: any) {
    this.updateProfileForm['controls']['files'].setValue(event.target.files[0]);
    let files = event.target.files;
    const reader = new FileReader();
    this.uploadedFile = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.uploadedFile = reader.result as string;
    }
  }

}

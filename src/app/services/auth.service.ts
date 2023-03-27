import { Injectable } from '@angular/core';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/index';
import firebase from 'firebase/compat';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(
    private readonly router: Router,
    public afAuth: AngularFireAuth,
    private apiService: ApiService,
    private toastr: ToastrService,

  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authorization');
    if (token === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  // Sign in with Google
  GoogleAuth(type: any) {
    return this.AuthLogin(new GoogleAuthProvider(), type);
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider | GoogleAuthProvider, type: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user) {
          result.user?.getIdToken().then(getIdToken => {
            let obj = {
              token: getIdToken,
              type: 'social'
            }
            if (type == 'signUp') {
              this.registerUser(obj);
            } else {
              this.login(obj);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  registerUser(obj: any) {
    this.apiService.postData('user/signup', obj).subscribe(
      (result: any) => {
        if (result.responseCode === 200) {
          this.toastr.success("User has been created successfully.", "Success!");
        }
      },
      (error) => {
        this.toastr.error(error.error.responseMessage, 'Error!');
      },
      () => {
        this.login(obj);
      }
    );
  }

  login(obj: any) {
    this.apiService.postData("user/signin", obj).subscribe(
      (result: any) => {
        if (result.responseCode === 200) {
          localStorage.setItem("authorization", result.data.accessToken);
          localStorage.setItem("name", result.data.name);
        }
      },
      (error) => {
        this.toastr.error(error.error.responseMessage, "Error!");
      },
      () => {
        this.toastr.success("Logged In.", "Success!");
        this.router.navigate(['/home']);
      }
    );
  }
  // Sign in with Facebook
  FacebookAuth(type: any) {
    return this.facebookAuthLogin(new FacebookAuthProvider(), type);
  }
  // Auth logic to run auth providers
  facebookAuthLogin(provider: any, type: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        if (result.user) {
          result.user?.getIdToken().then(getIdToken => {
            let obj = {
              token: getIdToken,
              type: 'social'
            }
            if (type == 'signUp') {
              this.registerUser(obj);
            } else {
              this.login(obj);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
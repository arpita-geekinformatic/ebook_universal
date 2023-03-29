import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public stringSubject = new BehaviorSubject<number>(0);
  public BaseUrl = environment.BaseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getToken() {
      let token: any = localStorage.getItem("authorization")
        ? localStorage.getItem("authorization")
        : "";
      return token;
  }

  postData(url: string, data: any) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Lang": "En",
        Authorization: this.getToken(),
      }),
    };

    return this.http.post(this.BaseUrl + url, data, headers);
  }

  getData(url: string) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Lang": "En",
        Authorization: this.getToken(),
      }),
    };
    return this.http.get<any>(this.BaseUrl + url, headers);
  }

  putData(url: string, data: any) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Lang": "En",
        Authorization: this.getToken(),
      }),
    };
    return this.http.put<any>(this.BaseUrl + url, data, headers);
  }

  putFileData(url: string, data: any) {
    const headers = {
      headers: new HttpHeaders({
        Authorization: this.getToken(),
      }),
    };

    return this.http.put<any>(this.BaseUrl + url, data, headers);
  }

  passValue(data: any) {
    this.stringSubject.next(data);
  }
}

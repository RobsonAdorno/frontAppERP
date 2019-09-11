import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(crendencials: {login:string, password:string}):Observable<any> {
     return this.http
     .post(`${baseUrl.loginURI}`, crendencials, {
       responseType: 'text',
       observe: 'response',
     })
  }
}

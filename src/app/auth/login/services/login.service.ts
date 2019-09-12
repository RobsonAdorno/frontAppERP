import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../model/login.model'
import { baseUrl } from 'src/app/utils/strings.utils';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(crendencials: {email:string, password:string}):Observable<any> {
     let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyQGdtYWlsLmNvbSIsImlzcyI6ImFwaS1tb25nbyIsImlhdCI6MTU2ODMxMDQ2MH0.L2ODhD2B7pjdUmjp0xy8AMF-v8cbEXsBLfWJIhmc17g')
     return this.http
     .post(`${baseUrl.loginURI}`, crendencials)
     .pipe(
       catchError(error => {
         JSON.stringify(error)
         return throwError(error)
       })
     )
  }
}

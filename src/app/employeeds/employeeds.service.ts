import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employeeds } from './employeeds';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeedsService {

  constructor(private http:HttpClient) { }

  getEmployeeds():Observable<Employeeds[]> {
    return this.http.get<Employeeds[]>(`${'as'}`)
                .pipe(
                  catchError((error) => {
                    return throwError(error)
                  })
                )
  }
}

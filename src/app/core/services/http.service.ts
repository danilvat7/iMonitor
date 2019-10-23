import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://mockdatasuplier.azurewebsites.net/api/ReportStatus';

  // GET
  get(url: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${url}`)
      .pipe(catchError(this.handleError));
  }

  // POST
  post(url: string, data): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/${url}`, data)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

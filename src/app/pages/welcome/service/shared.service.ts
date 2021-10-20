import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SearchModel } from '../model/search.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};
@Injectable()
export class SharedService {
  schedularUrl = 'api/heroes'; // URL to web api
  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  // getSchedular(): Observable<SearchModel[]> {
  //   return this.http
  //     .get<SearchModel[]>(this.heroesUrl)
  //     .pipe(catchError(this.handleError));
  // }

  /** POST: add a new hero to the database */
  postSchedular(payload: any): Observable<SearchModel> {
    return this.http
      .post<any>(this.schedularUrl, payload, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // /** DELETE: delete the hero from the server */
  // deleteHero(id: number): Observable<{}> {
  //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //   return this.http
  //     .delete(url, httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl = 'http://localhost:3500/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.http
      .get<Category>(this.baseUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

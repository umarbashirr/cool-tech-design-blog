import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  apiURL = 'http://localhost:3500/posts';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // // Fetch Posts
  // getPosts(): Observable<Post> {
  //   return this.http
  //     .get<Post>(`${this.apiURL}`)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // // Fetch Posts by Id
  // getPostsById(id: any): Observable<Post> {
  //   return this.http
  //     .get<Post>(`${this.apiURL}/${id}`)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // addNewPost(post: Post): Observable<Post> {
  //   return this.http
  //     .post<Post>(this.apiURL, post, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}

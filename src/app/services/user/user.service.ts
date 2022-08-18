import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3500/api/v1';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addUser(user: any): Observable<any> {
    return this.http.post<User>(
      `${this.baseUrl}/auth/register`,
      user,
      this.httpOptions
    );
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/auth/login`,
      user,
      this.httpOptions
    );
  }
}

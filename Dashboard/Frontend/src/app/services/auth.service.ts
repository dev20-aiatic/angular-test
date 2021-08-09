import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap, map } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient,private errorHandlerService: ErrorHandlerService, private router: Router) {}

  register(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/register`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/login`, email, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("login"))
      );
  }


/*   login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{token:string, userId:Pick<User, "id">; }>
  {
     return this.http.post(`${this.url}/login`, { email, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.isUserLoggedIn$.next(user);
            this.router.navigate(["dashboard"]);
            return user;
        }));
  } */

}

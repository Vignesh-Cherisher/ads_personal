import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post('https://192.168.0.220:7149/api/login',
            {
                userName: username,
                password: password
            }).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 400) {
                        return throwError(()=> new Error(error.error))
                    } else {
                        console.error(error.error)
                        return throwError(()=> new Error('An unexpected error occurred'))
                    }
                })
            );
    }

    register(username: string,email:string ,password: string): Observable<any> {
        return this.http.post('https://192.168.0.217:3000/api/register',
            {
                userName:username,
                email:email,
                password:password
            }).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 400) {
                        return throwError(()=> new Error(error.error))
                    } else {
                        console.error(error.error)
                        return throwError(()=> new Error('An unexpected error occurred'))
                    }
                })
            );
    }
}

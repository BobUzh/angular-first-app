import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of, throwError } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) {}

    setToken(token: string) {
        localStorage.setItem('token', token)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    isLoggedIn() {
        return !this.getToken()
    }

    login(user: {
        email: string
        password: string
    }): Observable<string | boolean> {
        if (user.email === 'vox@mail.com') {
            this.setToken('wqwqwqwqw')

            return of(true)
        }

        return throwError(() => new Error('Failed Login'))
    }
}

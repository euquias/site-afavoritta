import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../sistema-login/login.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private injector: Injector
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const loginservice = this.injector.get(LoginService);

        if (loginservice.gettoken()) {
            const request = req.clone(
                { setHeaders: { 'Authorization': `Bearer ${loginservice.users.token}` } })
            return next.handle(request)
        } else {
            return next.handle(req)
        }


    }

} 
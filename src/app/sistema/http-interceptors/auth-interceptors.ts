import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from '../sistema-login/login.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
       private loginservice:LoginService
    ) { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.loginservice.gettokem();
        let request:HttpRequest<any> = req;

        if(token){
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            })
        }

        return next.handle(request)
        .pipe(
            catchError(this.handleError) 
        )
    }
    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.error('ocorreu um erro:', error.error.message);
        }else{
            console.error(
                `codigo de erro ${error.status},`+
                `Erro:${JSON.stringify(error.error)}`)
        }
        return throwError('Ocorreu um erro, tente novamente')
    }

} 
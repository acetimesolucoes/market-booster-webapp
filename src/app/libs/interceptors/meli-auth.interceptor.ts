import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class MeliAuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let access_token = JSON.parse(localStorage.getItem('ml-token') || '').access_token;

        const authReq = req.clone({
            headers: req.headers.set('Authorization', access_token),
        });

        return next.handle(authReq);
    }
}
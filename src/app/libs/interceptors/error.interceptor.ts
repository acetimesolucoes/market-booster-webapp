import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
        console.log('a');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);

        // switch (req.status) {
        //     case 401:
        //         this.router.navigate(['/meli/auth']);

        //     default:
        //         break;
        // }

        return next.handle(req);
    }
}
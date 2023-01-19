import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenizReq = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${localStorage.getItem('token') || "{}"}`
      }
    });
    return next.handle(tokenizReq );
    
    
  }
//   @Injectable()
// export class AddHeaderInterceptor implements HttpInterceptor {
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let headerReq = req.clone({
//       setHeaders:{
//         'X-company-name': 'Utec'
//       }
//     });
//     return next.handle(headerReq );
    
    
//   }
}

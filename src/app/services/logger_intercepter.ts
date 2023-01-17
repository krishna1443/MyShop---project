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
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //  console.log(`REQUESTED URL ${req.url}`);
    //  console.log('hiii');
    //  return next.handle(req);


    // Taping response
    return next.handle(req).pipe(
      tap( event => {
        if(event.type == HttpEventType.Response) {
          event.body.name = 'changed by interceptor';
          // console.log(event.body.name);
          
        }
      })
    );
  }
}

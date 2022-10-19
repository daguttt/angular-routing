import {
  HttpEvent,
  HttpHandler,
  // HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // * My instinctive way
    // const newHeaders = new HttpHeaders({
    //   'Student-Name': 'Daniel Gutiérrez',
    // });
    // const newReq = req.clone({ headers: newHeaders });

    // * Correct way
    // const newReq = req.clone({
    //   headers: req.headers.set('Student-Name', 'Daniel Gutiérrez'),
    // });

    // * Optimal way
    const newReq = req.clone({
      setHeaders: { 'Student-Name': 'Daneil Gutiérrez' },
    });
    return next.handle(newReq);
  }
}

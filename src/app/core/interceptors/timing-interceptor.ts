import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = Date.now();

    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response && event.url.includes('products')),
      map((event: HttpResponse<any>) => {
        const end = Date.now();

        console.log(`Request to ${event.url}, finished in ${(end - start) / 1000} seconds`);

        return event;
      })
    );
  }
}

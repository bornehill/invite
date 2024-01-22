import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpContextToken } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpCacheService } from '../core/http-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor{

  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method !== 'GET') {
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.get(req.url);

    if (cachedResponse) {
      console.log(`Returning a cached response: ${cachedResponse.url}`);
      return of(cachedResponse);
    }

    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cacheService.put(req.url, event);
          }
        })
      );
  }
}

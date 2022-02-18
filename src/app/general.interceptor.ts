import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {

  private cache: Map<string, HttpResponse<unknown>> = new Map()

  constructor(private _messageService: MessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const cachedResponse: HttpResponse<unknown> | undefined = this.cache.get(request.url);
    // if (request.method === "GET" && cachedResponse)
    //   return of(cachedResponse.clone())
    // else {
      return new Observable<HttpEvent<unknown>>((observer) => {

        next.handle(request).subscribe((res) => {
          if (res instanceof HttpResponse) {
            // if (request.method === "GET") this.cache.set(request.url, res.clone())
            observer.next(res);
          }
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof ErrorEvent || err.error.fromImport) {
            // console.log('this is client side error');
          } else {
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR!',
              life: 10000,
              detail: err.error.Message,
            });
          }
          observer.error(err);
        });
      });
    // }
  }


}

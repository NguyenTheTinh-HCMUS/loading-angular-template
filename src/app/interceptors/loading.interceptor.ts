import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';
import {tap} from 'rxjs/operators'

const urlIgnoreLoad=[]
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _spinnerService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!urlIgnoreLoad.some(url=>req.url.indexOf(url)>-1)){
      this._spinnerService.requestStarted();
      return this.handle(req,next);
    }
    return next.handle(req);
  }
  private handle(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event=>{
        if(event instanceof HttpResponse){
          this._spinnerService.requestEnded();
        }
      },
      (error: HttpErrorResponse)=>{
        this._spinnerService.resetSpinner();  
      }
      )
    );
  }
}

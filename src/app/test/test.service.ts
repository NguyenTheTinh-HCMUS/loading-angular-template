import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
    );
  }
}

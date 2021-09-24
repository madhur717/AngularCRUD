import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  masterAPIURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }

  public POST<T>(moduleUrl: string, obj: any): Observable<T> {
    return this.httpClient.post<T>(this.masterAPIURL + moduleUrl, obj);
  }

  public PUT<T>(moduleUrl: string, obj: any): Observable<T> {
    return this.httpClient.put<T>(this.masterAPIURL + moduleUrl, obj);
  }

  public DELETE<T>(moduleUrl: string): Observable<T> {
    return this.httpClient.delete<T>(this.masterAPIURL + moduleUrl);
  }

  public GET<T>(moduleUrl: string): Observable<T> {
    debugger;
    return this.httpClient.get<T>(this.masterAPIURL + moduleUrl);
  }

}

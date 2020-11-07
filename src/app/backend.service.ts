import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
    console.log(http)
   }

   makeRequest(url: string) {
    const myHeaders = new HttpHeaders()
    .set('aa', '123');

    const myParams = new HttpParams()
    .set('a', '1')
    .set('b', '2');

     return this.http.get<Response>(url, {params: myParams, headers: myHeaders});
   }
}

interface Response {
  msg: string;
}

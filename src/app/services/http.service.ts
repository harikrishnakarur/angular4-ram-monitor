import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

constructor(private http: HttpClient) { }
getData(){
    this.http.get('http://10.117.184.243:8080/freemem/1').subscribe(data => {
    console.log(data);
        });
}
}

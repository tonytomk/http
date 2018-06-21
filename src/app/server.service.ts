import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
constructor(private http: Http) {
}
storeServers(servers: any[]) {
    const header = new Headers(
        {'Content-Type': 'application/json',
        'Authorization': 'basic'}
    );
  return  this.http.post('https://hello-b0af4.firebaseio.com/data.json',
   servers,
   // {headers: header}
  );
}

updateServers(servers: any[]) {

  return  this.http.put('https://hello-b0af4.firebaseio.com/data.json',
   servers
  );
}

getServers() {
   return this.http.get('https://hello-b0af4.firebaseio.com/data.json')
      .map(
          (response: Response) => {
              const data = response.json();
              return data;
          }
      )
      .catch(
          (error: Response) => {
            console.log(error);
            return Observable.throw(error);
          }
     );
  }
  getAppName() {
    return this.http.get('https://hello-b0af4.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        });
  }
}

import { Injectable } from '@angular/core'
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { 
    this.http = http;
  }

  users(valorDigitado){
    return this.http.get(`https://api.github.com/search/users?q=${valorDigitado}`).pipe(
      map(res => res.json())
    );
  }

  getUser(valorUrlUsuario){
    return this.http.get(`https://api.github.com/users/${valorUrlUsuario}`).pipe(
      map(res => res.json())
    );
  }

  // getFollowers(){
  //   return this.http.get(`https://api.github.com/users/${valorUrlUsuario}`).pipe(
  //     map(res => res.json())
  //   );
  // }

}

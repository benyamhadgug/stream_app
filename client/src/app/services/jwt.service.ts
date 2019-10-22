import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }
  
  login(username:string, password:string) {
    console.log("before going to server: " + username + " ------- " + password);
      return this.httpClient.post<any>('http://localhost:3333/login', {"username": username, "password":password})
              .subscribe((data)=> { data.access_token} );
  }
  register(username: string, email:string, password:string, name: string, usergroup: string ) {
    console.log("before going to server: " + username + " ------- " + password);
    return this.httpClient.post<any>('http://localhost:3333/register', 
        {"email": email, "password": password, "username": username, "name": name, "usergroup": usergroup})
        .subscribe((data)=> { data.access_token} );
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}

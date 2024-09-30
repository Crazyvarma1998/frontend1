import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiurl="https://backend1-7lfs.onrender.com";
httpClient=inject(HttpClient)
  static apiurl: string;
  constructor() { }
  getUsers(){
   return this.httpClient.get(this.apiurl+'/users' );
  }
}

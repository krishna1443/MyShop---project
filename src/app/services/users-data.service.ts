import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url='https://api.spacexdata.com/v3/rockets'
  url2='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }
  
// users()
//   {
//     return this.http.get(this.url)
//   }
  
users(): Observable<any>
  {
    return this.http.get(this.url)
  }

getusers(): Observable<object>
{
  return this.http.get(this.url2)
}
  
  // city(): any{
  //     return [
  //       {
  //           id:1,
  //           name:'Maharastra'
  //       },
  //       {
  //       id:2,
  //       name:'Pune'
  //       },
  //     {
  //   id:1,
  //   name:'kolkata'
  //   },
  //   {
  //     id:1,
  //     name:'kolkata'
  //   }
  //   ]
  // }
}

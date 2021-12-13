import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgentUser } from '../_interfaces/_agentUser';
import { User } from '../_interfaces/_user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  path = 'http://localhost:3000/'


  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.path+'users',user)
  }

  getAll():Observable<User[]>{
    let abs = this.path + 'users/all'
    return this.http.get<User[]>(abs)
  }





  deleteUser(id:string){
    return this.http.delete<User>(this.path+'users/'+id)
  }

}

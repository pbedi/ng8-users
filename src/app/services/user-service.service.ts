import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../list-users/user.model';
import { Subscriber, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'https://reqres.in/';
  users: User[] = [];
  constructor(private http: HttpClient) { 
    
  }
  getData(): Observable<any> {
    return this.http.get(this.url + 'api/users?per_page=15');
  }
  setUsers(users: User[]) {
    this.users = users;
  }
  getUsers() {
    return this.users;
  }
  addUser(first_name: string, last_name: string, email: string,avatar:string){
    let user: User;
    let index: number = this.users.length;
    if(index > 0) {
    let lastUser:User = this.users[index-1];
    console.log(this.users);
    index = lastUser.id + 1;
    } else {
      index = 1;
    }
    
    user = new User(index, first_name,last_name,email , avatar);
    this.users.push(user);
  }

  deleteUser(user:User) {
    let data = JSON.stringify(user);
    
  }
}

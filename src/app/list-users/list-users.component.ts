import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user-service.service'
import { User } from './user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  users: User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    if( this.users.length === 0) {
    this.userService.getData().subscribe(data => {
      this.users = data['data'];
      this.userService.setUsers(this.users);
    });
  }
  }
  onDelete(user:User){
    
    let index = this.users.indexOf(user);  
    this.users.splice(index, 1); 
    //this.userService.deleteUser(user);
  }

}

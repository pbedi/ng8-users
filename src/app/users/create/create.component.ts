import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/list-users/user.model';
import { UserService } from 'src/app/services/user-service.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  @ViewChild('firstName', {static:true}) firstName: ElementRef;
  @ViewChild('lastName', {static:true}) lastName: ElementRef;
  @ViewChild('email', {static:true}) email: ElementRef;

  avatar: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg';
  users: User[];
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    if(this.users.length === 0) {
      this.userService.getData().subscribe(data => {
        this.users = data['data'];
        this.userService.setUsers(this.users);
      });
    }
  }

  onCreate(){
    let fName: string = this.firstName.nativeElement.value;
    let lname = this.lastName.nativeElement.value;
    let email = this.email.nativeElement.value;
    if (fName.length === 0 || lname.length === 0 || email.length === 0) {
      alert('all fields are required');
      return;
    }
    this.userService.addUser(fName, lname, email,this.avatar);
    this.route.navigateByUrl('/');
  }
}

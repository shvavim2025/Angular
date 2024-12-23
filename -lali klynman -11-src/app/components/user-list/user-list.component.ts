import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../moduls/User';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[];
  add: boolean = false;
constructor(private userService: UserService) {
  this.users = this.userService.getAllUsers();
 }
 addUser(){
    this.add=true;
 }
  
}

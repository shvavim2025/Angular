import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-lesson-8',
  standalone: true,
  imports: [],
  templateUrl: './lesson-8.component.html',
  styleUrl: './lesson-8.component.css'
})
export class Lesson8Component implements OnInit, OnDestroy{
  users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

}

import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { JsonPipe } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-lesson-11-http',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './lesson-11-http.component.html',
  styleUrl: './lesson-11-http.component.css'
})
export class Lesson11HttpComponent {
  list: any;
  constructor(private userService: UserService) {
    //this.list = this.userService.getUsers();
  }
}

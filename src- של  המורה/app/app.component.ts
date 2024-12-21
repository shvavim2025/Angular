import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuOptions } from '../models/menu-options';
import { MenuComponent } from '../components/menu/menu.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { StudentComponent } from '../components/student/student.component';
import { Student } from '../models/student';
import { Lesson4Component } from '../components/lesson-4/lesson-4.component';
import { Lesson5Component } from '../components/lesson-5/lesson-5.component';
import { Lesson6Component } from '../components/lesson-6/lesson-6.component';
import { Lesson7Component } from '../components/lesson-7/lesson-7.component';
import { Lesson8Component } from '../components/lesson-8/lesson-8.component';
import { Lesson9Component } from '../components/lesson-9/lesson-9.component';
import { Lesson11MenuComponent } from "../components/lesson-11-menu/lesson-11-menu.component";
import { Lesson11HttpComponent } from "../components/lesson-11-http/lesson-11-http.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, RegistrationComponent, StudentComponent, Lesson4Component,
    Lesson5Component, Lesson6Component, Lesson7Component, Lesson8Component, Lesson9Component, Lesson11MenuComponent, Lesson11MenuComponent, Lesson11HttpComponent],
  templateUrl: './app.component.html',
  //template : `<h1>Hello</h1>`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  allStudent : Student[] = [
    new Student(1, "Rachely", 18, "Rabbi Akiva") , 
    new Student(2, "Nachama", 25, "Yavne") , 
    new Student(3, "Lea", 14.5, "???")
  ];
  
  menuChoose : MenuOptions = 1;
  title = 'proj-2';

  CheckKeyPress(){

  }

  CheckMenu(menuId : number){

  }
}

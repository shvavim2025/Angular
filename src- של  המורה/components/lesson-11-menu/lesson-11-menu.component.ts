import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import Lesson9FormComponent from '../lesson-9-form/lesson-9-form.component';
import { Lesson9ReactiveFormComponent } from '../lesson-9-reactive-form/lesson-9-reactive-form.component';

@Component({
  selector: 'app-lesson-11-menu',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive] ,
  templateUrl: './lesson-11-menu.component.html',
  styleUrl: './lesson-11-menu.component.css'
})
export class Lesson11MenuComponent {
  
   routes: Routes = [
    { path: 'first-component', component: Lesson9FormComponent },
    { path: 'second-component', component: Lesson9ReactiveFormComponent },
  ];

}

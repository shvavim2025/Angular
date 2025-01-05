import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuOptions } from '../models/menu-options';
import { Student } from '../models/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
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

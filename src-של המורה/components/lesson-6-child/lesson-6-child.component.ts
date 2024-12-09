import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-6-child',
  standalone: true,
  imports: [],
  templateUrl: './lesson-6-child.component.html',
  styleUrl: './lesson-6-child.component.css'
})
export class Lesson6ChildComponent {
  text: string = "";

  ShowPopup(txt: string) {
    this.text = txt;
  }
}

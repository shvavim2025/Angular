import { Component, ElementRef, ViewChild } from '@angular/core';
import { Lesson5ChildComponent } from '../lesson-5-child/lesson-5-child.component';

@Component({
  selector: 'app-lesson-5',
  standalone: true,
  imports: [Lesson5ChildComponent],
  templateUrl: './lesson-5.component.html',
  styleUrl: './lesson-5.component.css'
})
export class Lesson5Component {

  @ViewChild('email')  email: ElementRef;

  save(name: string, age: string, email: string, childColor: string) {
    this.email.nativeElement.value
  }
}

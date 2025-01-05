import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson12-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson12-style.component.html',
  styleUrl: './lesson12-style.component.css'
})
export class Lesson12StyleComponent {
  active = false;
  styleExp= 'oblique'
}

import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MyCustomDirectiveDirective } from '../../directives/my-custom-directive.directive';

@Component({
  selector: 'app-lesson-7',
  standalone: true,
  imports: [NgTemplateOutlet, MyCustomDirectiveDirective],
  templateUrl: './lesson-7.component.html',
  styleUrl: './lesson-7.component.css'
})
export class Lesson7Component {

}

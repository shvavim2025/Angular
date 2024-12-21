import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Lesson6ChildComponent } from '../lesson-6-child/lesson-6-child.component';
import { Student } from '../../models/student';
import { Lesson6ChildNgContentComponent } from '../lesson-6-child-ng-content/lesson-6-child-ng-content.component';

@Component({
  selector: 'app-lesson-6',
  standalone: true,
  imports: [Lesson6ChildComponent, Lesson6ChildNgContentComponent],
  templateUrl: './lesson-6.component.html',
  styleUrl: './lesson-6.component.css'
})
export class Lesson6Component {
@ViewChild(Lesson6ChildComponent) child: Lesson6ChildComponent;
@ViewChild('p1') childP: ElementRef;
@ViewChildren(Lesson6ChildComponent) childComponents: QueryList<Lesson6ChildComponent>; 
studentList: string[] = []

Delete(){
  this.childP.nativeElement.innerText = "I changed you"
  this.child.ShowPopup("האם אתה בטוח שברצונך למחוק את התלמידה ");
  
}
}

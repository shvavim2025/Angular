import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-infromation-card',
  standalone: true,
  imports: [],
  templateUrl: './infromation-card.component.html',
  styleUrl: './infromation-card.component.css'
})
export class InfromationCardComponent {
@Output() DeleteStudent:EventEmitter<any>= new EventEmitter<any>();

DeletesureStudent(flag:boolean) {
  this.DeleteStudent.emit(flag);
}
}

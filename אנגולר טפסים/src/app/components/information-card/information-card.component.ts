import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.css'
})
export class InformationCardComponent {
  @Output() InformationCardAns: EventEmitter<any> = new EventEmitter<any>();
  DeleteStudent(toDelete:boolean): void {
    this.InformationCardAns.emit(toDelete);
  }
}

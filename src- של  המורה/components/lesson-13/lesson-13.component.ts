import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventType } from '../../models/event-type.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lesson-13',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './lesson-13.component.html',
  styleUrl: './lesson-13.component.css'
})
export class Lesson13Component implements OnInit {
  count: number;
  data$: Observable<EventType[]>;
  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    debugger
    this.eventService.getEvents();
    this.data$ = this.eventService.events$;

    this.count = 5 * 9;
  }
}

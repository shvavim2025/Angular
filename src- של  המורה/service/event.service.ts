import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventType } from '../models/event-type.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsSubject = new BehaviorSubject<EventType[]>([]);
  events$ = this.eventsSubject.asObservable();
  
 //events: EventType[];
  constructor(private http: HttpClient) { }

//  getEvents() : Observable<EventType[]>{
//   return this.http.get<EventType[]>("https://eventsapi.onrender.com/api/Events");
//  }

getEvents(){

  return this.http.get<EventType[]>("https://eventsapi.onrender.com/api/Events").subscribe(data =>{
    this.eventsSubject.next(data);
    //this.events$ = of(data);
  });

 }

 addEvent(event: EventType){
  this.http.post<EventType[]>(" ", event) 
  .subscribe(() => this.getEvents()
  );
 }
}

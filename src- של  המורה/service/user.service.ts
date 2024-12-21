import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private users = [
    new User(1, 'Alice'),
    new User(2, 'Bob')
  ];

  getUsers(): any {

    this.http.get<any>("https://eventsapi.onrender.com/api/Events").subscribe(s => {
     return s;
    });

  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

}

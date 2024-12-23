import { Injectable } from '@angular/core';
import { Position, User } from '../moduls/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users=[
    new User("public user",Position.student,"","")
  ]
  getAllUsers(): User[]{
    return this.users;
  }
  // getUserByEmail(email: string): User | undefined {
  //   return this.users.find(user => user.email === email);
  // }
  addUser(user: User): void {
    this.users.push(user);
  }
  updateUser(user: User): void {
    const index=this.users.indexOf(user);
    if(index >-1) {
      this.users[index] = user
    }
  }
  deleteUser(user: User): void {
    const index=this.users.indexOf(user);
if(index > -1)
    this.users = this.users.filter(u => u.email!== user.email);
  }
}

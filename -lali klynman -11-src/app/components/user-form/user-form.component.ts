import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Position, User } from '../../../moduls/User';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{
  addUserForm!: FormGroup;
  user! :User;
  positions:Position[] = [Position.principal, Position.teacher, Position.secretary, Position.student];
  @Output() saveUser= new EventEmitter<void>();

 constructor(private userService: UserService,private fb: FormBuilder){
  
 }
 
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name : ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      position:['',Validators.required],
      password: ['', Validators.required]
  })  }
  onSubmit(){
if(this.addUserForm.valid){
  this.user=new User(
    this.addUserForm.value.name,
    this.addUserForm.value.position,
    this.addUserForm.value.email,
    this.addUserForm.value.password
  )
  this.userService.addUser(this.user);
  this.saveUser.emit();
}

  }

}

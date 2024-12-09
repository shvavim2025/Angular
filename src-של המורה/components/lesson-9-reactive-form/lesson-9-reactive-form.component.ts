import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Init } from 'v8';

@Component({
  selector: 'app-lesson-9-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lesson-9-reactive-form.component.html',
  styleUrl: './lesson-9-reactive-form.component.css'
})
export class Lesson9ReactiveFormComponent implements OnInit {
  @Input() currentStudent: Student;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    debugger;
    let t = this.currentStudent;
     this.userForm = this.fb.group({
       username: [this.currentStudent?.firstName, Validators.required],
       age: [this.currentStudent?.age, Validators.compose( [Validators.max(120), Validators.min(0)])],
       address: [this.currentStudent?.address, Validators.required]
     });
  }

  onSubmit(){
    console.log('Submitted:', this.userForm.value);
  }
}

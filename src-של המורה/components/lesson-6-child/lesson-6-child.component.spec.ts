import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6ChildComponent } from './lesson-6-child.component';

describe('Lesson6ChildComponent', () => {
  let component: Lesson6ChildComponent;
  let fixture: ComponentFixture<Lesson6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson6ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

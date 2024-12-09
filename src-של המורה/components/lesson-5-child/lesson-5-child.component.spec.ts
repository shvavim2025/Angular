import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5ChildComponent } from './lesson-5-child.component';

describe('Lesson5ChildComponent', () => {
  let component: Lesson5ChildComponent;
  let fixture: ComponentFixture<Lesson5ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson5ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson14ChildComponent } from './lesson-14-child.component';

describe('Lesson14ChildComponent', () => {
  let component: Lesson14ChildComponent;
  let fixture: ComponentFixture<Lesson14ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson14ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson14ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

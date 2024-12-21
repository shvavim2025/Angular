import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson11HttpComponent } from './lesson-11-http.component';

describe('Lesson11HttpComponent', () => {
  let component: Lesson11HttpComponent;
  let fixture: ComponentFixture<Lesson11HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson11HttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson11HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

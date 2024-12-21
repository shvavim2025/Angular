import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson11MenuComponent } from './lesson-11-menu.component';

describe('Lesson11MenuComponent', () => {
  let component: Lesson11MenuComponent;
  let fixture: ComponentFixture<Lesson11MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson11MenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson11MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

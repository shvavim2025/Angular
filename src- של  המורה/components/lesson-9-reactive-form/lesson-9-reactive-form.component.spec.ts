import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9ReactiveFormComponent } from './lesson-9-reactive-form.component';

describe('Lesson9ReactiveFormComponent', () => {
  let component: Lesson9ReactiveFormComponent;
  let fixture: ComponentFixture<Lesson9ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson9ReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson9ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

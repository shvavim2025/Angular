import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson12StyleComponent } from './lesson12-style.component';

describe('Lesson12StyleComponent', () => {
  let component: Lesson12StyleComponent;
  let fixture: ComponentFixture<Lesson12StyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson12StyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson12StyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

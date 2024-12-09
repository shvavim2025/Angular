import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6ChildNgContentComponent } from './lesson-6-child-ng-content.component';

describe('Lesson6ChildNgContentComponent', () => {
  let component: Lesson6ChildNgContentComponent;
  let fixture: ComponentFixture<Lesson6ChildNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson6ChildNgContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson6ChildNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

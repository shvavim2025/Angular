import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListComponent } from './studenstList.component';

describe('StudentComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

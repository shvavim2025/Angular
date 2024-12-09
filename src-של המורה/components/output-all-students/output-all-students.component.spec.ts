import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputAllStudentsComponent } from './output-all-students.component';

describe('OutputAllStudentsComponent', () => {
  let component: OutputAllStudentsComponent;
  let fixture: ComponentFixture<OutputAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputAllStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

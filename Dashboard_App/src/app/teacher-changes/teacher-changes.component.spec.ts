import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherChangesComponent } from './teacher-changes.component';

describe('TeacherChangesComponent', () => {
  let component: TeacherChangesComponent;
  let fixture: ComponentFixture<TeacherChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

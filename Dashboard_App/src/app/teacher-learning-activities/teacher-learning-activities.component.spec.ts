import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLearningActivitiesComponent } from './teacher-learning-activities.component';

describe('TeacherLearningActivitiesComponent', () => {
  let component: TeacherLearningActivitiesComponent;
  let fixture: ComponentFixture<TeacherLearningActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLearningActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLearningActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

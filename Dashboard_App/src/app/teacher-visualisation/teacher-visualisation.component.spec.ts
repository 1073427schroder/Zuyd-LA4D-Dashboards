import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherVisualisationComponent } from './teacher-visualisation.component';

describe('TeacherVisualisationComponent', () => {
  let component: TeacherVisualisationComponent;
  let fixture: ComponentFixture<TeacherVisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherVisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

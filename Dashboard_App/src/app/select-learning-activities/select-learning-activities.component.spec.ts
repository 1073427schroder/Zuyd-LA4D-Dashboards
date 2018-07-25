import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLearningActivitiesComponent } from './select-learning-activities.component';

describe('SelectLearningActivitiesComponent', () => {
  let component: SelectLearningActivitiesComponent;
  let fixture: ComponentFixture<SelectLearningActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLearningActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLearningActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

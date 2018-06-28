import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackActivityFormComponent } from './feedback-activity-form.component';

describe('FeedbackActivityFormComponent', () => {
  let component: FeedbackActivityFormComponent;
  let fixture: ComponentFixture<FeedbackActivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackActivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

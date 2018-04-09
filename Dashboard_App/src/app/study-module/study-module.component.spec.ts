import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyModuleComponent } from './study-module.component';

describe('StudyModuleComponent', () => {
  let component: StudyModuleComponent;
  let fixture: ComponentFixture<StudyModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

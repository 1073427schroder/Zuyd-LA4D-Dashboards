import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenLeerActiviteitenComponent } from './studenten-leer-activiteiten.component';

describe('StudentenLeerActiviteitenComponent', () => {
  let component: StudentenLeerActiviteitenComponent;
  let fixture: ComponentFixture<StudentenLeerActiviteitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentenLeerActiviteitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentenLeerActiviteitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

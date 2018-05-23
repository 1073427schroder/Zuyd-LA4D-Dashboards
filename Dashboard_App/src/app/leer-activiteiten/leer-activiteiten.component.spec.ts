import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerActiviteitenComponent } from './leer-activiteiten.component';

describe('LeerActiviteitenComponent', () => {
  let component: LeerActiviteitenComponent;
  let fixture: ComponentFixture<LeerActiviteitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerActiviteitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerActiviteitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

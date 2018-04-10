import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatieIndicatorenComponent } from './prestatie-indicatoren.component';

describe('PrestatieIndicatorenComponent', () => {
  let component: PrestatieIndicatorenComponent;
  let fixture: ComponentFixture<PrestatieIndicatorenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestatieIndicatorenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatieIndicatorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrestatieIndicatorenComponent } from './detail-prestatie-indicatoren.component';

describe('DetailPrestatieIndicatorenComponent', () => {
  let component: DetailPrestatieIndicatorenComponent;
  let fixture: ComponentFixture<DetailPrestatieIndicatorenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPrestatieIndicatorenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrestatieIndicatorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

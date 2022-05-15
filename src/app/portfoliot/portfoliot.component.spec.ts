import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliotComponent } from './portfoliot.component';

describe('PortfoliotComponent', () => {
  let component: PortfoliotComponent;
  let fixture: ComponentFixture<PortfoliotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

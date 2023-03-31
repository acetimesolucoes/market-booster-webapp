import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoosterComponent } from './dash-booster.component';

describe('DashBoosterComponent', () => {
  let component: DashBoosterComponent;
  let fixture: ComponentFixture<DashBoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

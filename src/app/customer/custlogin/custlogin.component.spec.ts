import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustloginComponent } from './custlogin.component';

describe('CustloginComponent', () => {
  let component: CustloginComponent;
  let fixture: ComponentFixture<CustloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

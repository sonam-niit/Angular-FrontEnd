import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustComponent } from './listcust.component';

describe('ListcustComponent', () => {
  let component: ListcustComponent;
  let fixture: ComponentFixture<ListcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

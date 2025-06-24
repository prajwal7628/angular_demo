import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMonitorComponent } from './vendor-monitor.component';

describe('VendorMonitorComponent', () => {
  let component: VendorMonitorComponent;
  let fixture: ComponentFixture<VendorMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

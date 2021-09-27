import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetallePaisComponent } from './detalle-pais.component';

describe('DetallePaisComponent', () => {
  let component: DetallePaisComponent;
  let fixture: ComponentFixture<DetallePaisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

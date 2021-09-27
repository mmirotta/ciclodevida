import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleUsuarioComponent } from './detalle-usuario.component';

describe('DetalleUsuarioComponent', () => {
  let component: DetalleUsuarioComponent;
  let fixture: ComponentFixture<DetalleUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

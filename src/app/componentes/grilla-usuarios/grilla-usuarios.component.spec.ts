import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrillaUsuariosComponent } from './grilla-usuarios.component';

describe('GrillaUsuariosComponent', () => {
  let component: GrillaUsuariosComponent;
  let fixture: ComponentFixture<GrillaUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

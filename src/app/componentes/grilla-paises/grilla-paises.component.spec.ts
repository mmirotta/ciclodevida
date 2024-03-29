import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrillaPaisesComponent } from './grilla-paises.component';

describe('GrillaPaisesComponent', () => {
  let component: GrillaPaisesComponent;
  let fixture: ComponentFixture<GrillaPaisesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorUsuarioComponent } from './editor-usuario.component';

describe('EditorUsuarioComponent', () => {
  let component: EditorUsuarioComponent;
  let fixture: ComponentFixture<EditorUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

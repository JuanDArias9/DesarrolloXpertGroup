import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCalificacionComponent } from './vista-calificacion.component';

describe('VistaCalificacionComponent', () => {
  let component: VistaCalificacionComponent;
  let fixture: ComponentFixture<VistaCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

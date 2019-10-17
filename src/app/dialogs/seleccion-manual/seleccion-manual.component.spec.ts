import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionManualComponent } from './seleccion-manual.component';

describe('AportesAfectadosComponent', () => {
  let component: SeleccionManualComponent;
  let fixture: ComponentFixture<SeleccionManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

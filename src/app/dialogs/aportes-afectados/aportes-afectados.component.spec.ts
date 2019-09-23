import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AportesAfectadosComponent } from './aportes-afectados.component';

describe('AportesAfectadosComponent', () => {
  let component: AportesAfectadosComponent;
  let fixture: ComponentFixture<AportesAfectadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AportesAfectadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AportesAfectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

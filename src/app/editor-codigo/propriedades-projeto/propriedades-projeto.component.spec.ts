import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadesProjetoComponent } from './propriedades-projeto.component';

describe('PropriedadesProjetoComponent', () => {
  let component: PropriedadesProjetoComponent;
  let fixture: ComponentFixture<PropriedadesProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadesProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropriedadesProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizacaoProjetoComponent } from './personalizacao-projeto.component';

describe('PersonalizacaoProjetoComponent', () => {
  let component: PersonalizacaoProjetoComponent;
  let fixture: ComponentFixture<PersonalizacaoProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizacaoProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizacaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

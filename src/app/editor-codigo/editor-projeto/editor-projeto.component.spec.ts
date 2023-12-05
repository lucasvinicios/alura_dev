import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProjetoComponent } from './editor-projeto.component';

describe('EditorProjetoComponent', () => {
  let component: EditorProjetoComponent;
  let fixture: ComponentFixture<EditorProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

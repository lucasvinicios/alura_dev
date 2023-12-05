import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorCodigoComponent } from './editor-codigo.component';
import { PropriedadesProjetoComponent } from './propriedades-projeto/propriedades-projeto.component';
import { PersonalizacaoProjetoComponent } from './personalizacao-projeto/personalizacao-projeto.component';
import { EditorProjetoComponent } from './editor-projeto/editor-projeto.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      EditorCodigoComponent,
      PropriedadesProjetoComponent,
      PersonalizacaoProjetoComponent,
      EditorProjetoComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    EditorProjetoComponent,
    PersonalizacaoProjetoComponent
  ]
})
export class EditorCodigoModule { }

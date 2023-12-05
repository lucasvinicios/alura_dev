import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorCodigoComponent } from './editor-codigo/editor-codigo.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';

const routes: Routes = [
  {
    path: 'editor-codigo',
    component: EditorCodigoComponent
  },
  {
    path: 'comunidade',
    component: ComunidadeComponent
  },
  {
    path: '',
    redirectTo: 'editor-codigo',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadeComponent } from './comunidade.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComunidadeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ComunidadeModule {


}

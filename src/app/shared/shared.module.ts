import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    CardComponent
  ]
})
export class SharedModule { }

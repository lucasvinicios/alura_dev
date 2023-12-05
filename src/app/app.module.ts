import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { EditorCodigoModule } from './editor-codigo/editor-codigo.module';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { ComunidadeModule } from './comunidade/comunidade.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    EditorCodigoModule,
    ComunidadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

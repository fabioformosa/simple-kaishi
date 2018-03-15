import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KaishiThemeAdminlteComponent } from 'kaishi';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KaishiThemeAdminlteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

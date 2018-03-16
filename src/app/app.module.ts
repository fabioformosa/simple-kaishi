import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KaishiThemeAdminlteComponent } from 'kaishi';
import { KaishiThemeAdminlteModule  } from 'kaishi';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KaishiThemeAdminlteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

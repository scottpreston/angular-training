import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent2 }  from './app2.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule],
  declarations: [ AppComponent2 ],
  bootstrap:    [ AppComponent2 ]
})
export class AppModule2 { }

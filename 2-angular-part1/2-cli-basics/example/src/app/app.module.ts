import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroserviceService } from './heroservice.service';
import { HeroparentComponent } from './heroparent/heroparent.component';
import { HerochildComponent } from './herochild/herochild.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HighlightDirective } from './highlight.directive';

const appRoutes: Routes = [
  { path: 'heros', component: HeroparentComponent },
  { path: 'hero/:id',      component: HerodetailComponent },
  { path: 'herocreate',      component: HeroformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroparentComponent,
    HerochildComponent,
    HeroformComponent,
    HerodetailComponent,
    HighlightDirective
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArriereBoutiqueComponent} from './arriere-boutique/arriere-boutique.component';

@NgModule({
  declarations: [
    AppComponent
  ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ArriereBoutiqueComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

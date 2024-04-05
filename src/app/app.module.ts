import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArriereBoutiqueComponent} from './arriere-boutique/arriere-boutique.component';
import {VitrineComponent} from './vitrine/vitrine.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArriereBoutiqueComponent,
    VitrineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

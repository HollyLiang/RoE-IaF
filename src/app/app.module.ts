import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GridsterModule } from 'angular-gridster2';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { LayoutModule } from '../layout/layout.module';
import { MatModule } from '../shared/mat.module';
import { BuildingPage } from './building/building.page';
import { CourageMedalPage } from './courage-medal/courage-medal.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GridsterModule,
    MatModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomePage,
    BuildingPage,
    CourageMedalPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import {FeaturesComponent} from './features/features.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    HowItWorkComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

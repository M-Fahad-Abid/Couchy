import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { MainPageComponent } from './components/Main/main-page/main-page.component';
import { HeroComponent } from './components/Pages/hero/hero.component';
import { ReviewesComponent } from './components/Pages/reviewes/reviewes.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, MainPageComponent, HeroComponent, ReviewesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

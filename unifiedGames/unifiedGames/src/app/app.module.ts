import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuServiceService} from './menu-service.service';
import { FooterComponent } from './footer/footer.component';
import { ApexFpsGuideComponent } from './apex-fps-guide/apex-fps-guide.component';
import {FpsGuideService} from './fps-guide.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ApexFpsGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenuServiceService,
    FpsGuideService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

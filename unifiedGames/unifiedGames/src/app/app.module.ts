import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MenuServiceService} from './menu-service.service';
import { FooterComponent } from './footer/footer.component';
import { ApexFpsGuideComponent } from './apex-fps-guide/apex-fps-guide.component';
import {FpsGuideService} from './fps-guide.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RegisterUserService} from './register-user.service';
import {RegisterFpsCoachesService} from  './register-fps-coaches.service';
import {environment} from '../../shared/environment';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { FpsCoachingComponent } from './fps-coaching/fps-coaching.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { YourCoachComponent } from './your-coach/your-coach.component';
import { DisplayFpsCoachesComponent } from './display-fps-coaches/display-fps-coaches.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ApexFpsGuideComponent,
    LoginComponent,
    SignupComponent,
    FpsCoachingComponent,
    YourOrdersComponent,
    YourCoachComponent,
    DisplayFpsCoachesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    MenuServiceService,
    FpsGuideService,
    RegisterUserService,
    RegisterFpsCoachesService,
    LoginComponent,
    HeaderComponent,
    AuthGuard,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

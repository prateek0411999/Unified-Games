import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ApexFpsGuideComponent } from './apex-fps-guide/apex-fps-guide.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: 'ApexFps', component: ApexFpsGuideComponent},

  {path: 'Menu', component: MenuComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  
  { path: '', redirectTo: '/Menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

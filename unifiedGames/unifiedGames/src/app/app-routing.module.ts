import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ApexFpsGuideComponent } from './apex-fps-guide/apex-fps-guide.component';


const routes: Routes = [
  {path: 'ApexFps', component: ApexFpsGuideComponent},

  {path: 'Menu', component: MenuComponent},
  
  { path: '', redirectTo: '/Menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

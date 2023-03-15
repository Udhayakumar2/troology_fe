import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPortalComponent } from './components/login-portal/login-portal.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login',component:LoginPortalComponent},
  {path:'table',component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

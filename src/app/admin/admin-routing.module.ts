import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {AdminHeaderComponent} from './shared/admin-header/admin-header.component';
import { CartsComponent } from './carts/carts.component';
import { CreateproductComponent } from './createproduct/createproduct.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path : 'dashboard', component : DashboardComponent},
  {path : 'sidebar', component : SidebarComponent},
  {path : 'adminheader', component : AdminHeaderComponent},
  {path : 'carts', component :CartsComponent},
  {path : 'createproduct', component :CreateproductComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AdminRoutingModule} from './admin-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { CartsComponent } from './carts/carts.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { FormsModule  } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    AdminHeaderComponent,
    CartsComponent,
    CreateproductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
    SidebarComponent
  ]
  
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HeaderComponent } from './shared/components/header/header.component';
import {  FooterComponent } from './shared/components/footer/footer.component';
import {  HomeComponent } from './home/home.component';
import {  ShopComponent } from './shop/shop.component';
import { SpaceobservableComponent } from './spaceobservable/spaceobservable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'header', component:  HeaderComponent  },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'observable', component: SpaceobservableComponent },
  
  {
    path: 'admin',
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

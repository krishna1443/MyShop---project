import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdminModule } from "./admin/admin.module";
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SpaceobservableComponent } from './spaceobservable/spaceobservable.component';
import { LoginComponent } from './login/login.component';
import { LoggerInterceptor } from "./services/logger_intercepter";
import { TokensInterceptor } from "./services/add_header.interceptor";
// import { UsersDataService } from "./services/users-data.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    SpaceobservableComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : LoggerInterceptor, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : TokensInterceptor, multi: true}
    // {provide : HTTP_INTERCEPTORS, useClass : AddHeaderInterceptor, multi: true}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

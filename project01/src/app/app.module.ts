import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { MilkComponent } from './milk/milk.component';
import { GheeComponent } from './ghee/ghee.component';
import { CurdComponent } from './curd/curd.component';
import { PaneerComponent } from './paneer/paneer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ContatusComponent } from './contatus/contatus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
// import { Navbar1Component } from './navbar1/navbar1.component';
import { ButtermilkComponent } from './buttermilk/buttermilk.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    // AboutusComponent,
    ProductsComponent,
    MilkComponent,
    GheeComponent,
    CurdComponent,
    PaneerComponent,
    ProfileComponent,
    AboutUsComponent,
   
    ContatusComponent,
         NavbarComponent,
         RegisterComponent,
         CartComponent,
        //  Navbar1Component,
         ButtermilkComponent,
         LogoutComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

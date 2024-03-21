import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkComponent } from './milk/milk.component';
import { PaneerComponent } from './paneer/paneer.component';
import { GheeComponent } from './ghee/ghee.component';
import { CurdComponent } from './curd/curd.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth/auth.guard';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContatusComponent } from './contatus/contatus.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ButtermilkComponent } from './buttermilk/buttermilk.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"milk",component:MilkComponent},
  {path:"paneer",component:PaneerComponent},
  {path:"ghee",component:GheeComponent},
  {path:"curd",component:CurdComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contatus',component:ContatusComponent},
  // {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'logout',component:LogoutComponent},
  
  {path:'cart',component:CartComponent},
  {path:'buttermilk',component:ButtermilkComponent},
  

  {path:"profile",component:ProfileComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

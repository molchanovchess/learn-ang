import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { ChangeUsernameAutoComponent } from './components/change-username-auto/change-username-auto.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartModifiedComponent } from './components/shopping-cart-modified/shopping-cart-modified.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ThemeComponent } from './components/theme/theme.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'wish-message', component: WishMessageComponent },
  { path: 'product-item', component: ProductItemComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },  
  { path: 'change-username', component: ChangeUsernameComponent },
  { path: 'change-username-auto', component: ChangeUsernameAutoComponent },
  { path: 'sms', component: SmsAppComponent },
  { path: 'show-password', component: ShowPasswordComponent },
  { path: 'amount-range', component: AmountRangeComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'auth-user', component: AuthUserComponent },
  { path: 'shopping-cart-modified', component: ShoppingCartModifiedComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
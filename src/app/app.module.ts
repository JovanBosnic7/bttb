import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WebShopComponent } from './web-shop/web-shop.component';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'webShop', component: WebShopComponent },
  { path: 'planOrder', component: PlanOrderComponent },
  {path: 'shoppingCart', component: ShoppingCartComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    WebShopComponent,
    PlanOrderComponent,
    ShoppingCartComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

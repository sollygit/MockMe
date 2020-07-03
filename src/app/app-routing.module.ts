import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProductsComponent } from './components/products/products.component';
import { OfferComponent } from './components/offer/offer.component';
import { SuccessComponent } from './components/success/success.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'configurations', component: ConfigurationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

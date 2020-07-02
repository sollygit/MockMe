import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { AppErrorHandler } from './app-error.handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProductsComponent } from './components/products/products.component';
import { ConfigurationService } from './services/configuration.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from './components/success/success.component';
import { OfferComponent } from './components/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    TemplatesComponent,
    ConfigurationsComponent,
    NotificationsComponent,
    ProductsComponent,
    SuccessComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HeaderComponent } from './header/header.component';
import { ManagementComponent } from './management/management.component';
import { RealestateComponent } from './realestate/realestate.component';
import { ServiceComponent } from './service/service.component';
import { ProjectsComponent } from './projects/projects.component';
import { SodComponent } from './sod/sod.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { RentalComponent } from './realestate/rental/rental.component';
import { SaleComponent } from './realestate/sale/sale.component';
import { CommercialComponent } from './realestate/commercial/commercial.component';
import { PlotsComponent } from './realestate/plots/plots.component';

import { SliderModule } from 'angular-image-slider';

import { ImageViewerModule } from "ngx-image-viewer";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    PostComponent,
    NotificationsComponent,
    HeaderComponent,
    FooterComponent,
    ManagementComponent,
    RealestateComponent,
    ServiceComponent,
    ProjectsComponent,
    SodComponent,
    RentalComponent,
    SaleComponent,
    CommercialComponent,
    PlotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    ImageViewerModule.forRoot(),
    SliderModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

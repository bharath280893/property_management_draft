import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { RealestateComponent } from './realestate/realestate.component';
import { SignupComponent } from './signup/signup.component';
import { SodComponent } from './sod/sod.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'post', component:PostComponent},
  {path:'profile', component:ProfileComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'management', component:ManagementComponent},
  {path:'realestate', component:RealestateComponent},
  {path:'sod', component:SodComponent},
  {path:'projects', component:ProjectsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

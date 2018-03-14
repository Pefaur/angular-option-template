import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// User Login / Register
import { OptLoginComponent } from './user/login/login.component';
import { OptLoginV2Component } from './user/login-v2/login-v2.component';
import { OptRegisterComponent } from './user/register/register.component';
import { OptRecoverPasswordComponent } from './user/recover-password/recover-password.component';
import { OptForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { OptProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {path: 'user/login', component: OptLoginComponent, data: {title: 'Login Page'}},
  {path: 'user/login-v2', component: OptLoginV2Component, data: {title: 'Login V2 Page'}},
  {path: 'user/register', component: OptRegisterComponent, data: {title: 'Register Page'}},
  {path: 'user/recover-pasword', component: OptRecoverPasswordComponent, data: {title: 'Recover Password Page'}},
  {path: 'user/forgot-password', component: OptForgotPasswordComponent, data: {title: 'Forgot Password Page'}},
  {path: 'user/profile', component: OptProfileComponent, data: {title: 'Profile Page'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OptionTemplateRoutingModule {
}

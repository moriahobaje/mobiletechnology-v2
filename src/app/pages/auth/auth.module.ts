import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
//import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

//import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
      AuthRoutingModule,

      //RouterModule,
      //DashboardModule
    ],
    // add here any components that are part of this module
    declarations: [
      LoginComponent,
      LogoutComponent,
      RegisterComponent
    ]
})
export class AuthModule {}
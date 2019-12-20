import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { ManageUsersComponent } from "./manage-users/manage-users.component";

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
      AdminRoutingModule,
    ],
    // add here any components that are part of this module
    declarations: [
      ManageUsersComponent
    ]
})
export class AdminModule {}
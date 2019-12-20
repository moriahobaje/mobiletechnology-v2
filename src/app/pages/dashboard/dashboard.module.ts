import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './component/dashboard.component';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      DashboardRoutingModule
    ],
    // add here any components that are part of this module
    declarations: [
      DashboardComponent
    ],
    exports: [
      DashboardComponent
    ]
})
export class DashboardModule {}
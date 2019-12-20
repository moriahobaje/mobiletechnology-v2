import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { DashboardComponent } from "./component/dashboard.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "dashboard",
    children: [{ path: "", component: DashboardComponent, pathMatch: "full", canActivate: [CanActivateGuard] }]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

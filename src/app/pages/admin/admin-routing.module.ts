import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { ManageUsersComponent } from "./manage-users/manage-users.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "admin",
    children: [
      { path: "manage-users", component: ManageUsersComponent, canActivate: [CanActivateGuard], /*data: { requiresAdmin: true }*/ },
      { path: "**", redirectTo: "manage-users" }
    ],
    data: { requiresAdmin: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

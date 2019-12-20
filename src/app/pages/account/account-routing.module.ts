import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { ProfileComponent } from "./profile/profile.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "account",
    children: [
      { path: "profile", component: ProfileComponent, canActivate: [CanActivateGuard], /*data: { requiresAdmin: true }*/ },
      { path: "**", redirectTo: "profile" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "auth",
    children: [
      { path: "login", component: LoginComponent, canActivate: [CanActivateGuard], data: { guestRoute: true } },
      { path: "register", component: RegisterComponent, canActivate: [CanActivateGuard], data: { guestRoute: true } },
      { path: "logout", component: LogoutComponent, canActivate: [CanActivateGuard] },
      { path: "**", redirectTo: "login" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

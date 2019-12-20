import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth/auth.service";

import { User } from "../../../models/user.class";

@Component({
  selector: "my-app-pages-auth-logout",
  template: " " // empty space
})
export class LogoutComponent {
  constructor(private auth: AuthService, private router: Router) {
    this.auth.doLogout();
    this.router.navigate(["/auth/login"]);
  }
}

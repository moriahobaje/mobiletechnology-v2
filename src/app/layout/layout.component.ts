//our root app component
import { Component } from "@angular/core";

import { User } from "../models/user.class";

import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent {

  private isAuthenticated = false;
  private theUser: User = null;

  constructor(private auth: AuthService) {

    this.auth.userHasLoggedIn.subscribe(
      (theUser: User) => {
        this.isAuthenticated = true;
        this.theUser = theUser;
      }
    );

    this.auth.userHasLoggedOut.subscribe(
      () => {
        this.isAuthenticated = false;
        this.theUser = null;
      }
    );

    

  }
}

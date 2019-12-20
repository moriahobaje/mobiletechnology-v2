import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "../../../services/account/account.service";

import { User } from "../../../models/user.class";

@Component({
  selector: "my-app-pages-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  user: User = null;

  constructor(private account: AccountService, private router: Router) {
    this.user = new User();

    this.user.FirstName = this.account.theUser.FirstName;
    this.user.LastName = this.account.theUser.LastName;
    this.user.Address = this.account.theUser.Address;
  }

  doSubmit() {
    this.account.updateProfile(this.user);

    alert("Profile updated!");
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "../../../services/account/account.service";

import { User } from "../../../models/user.class";

@Component({
  selector: "my-app-pages-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  user: User = null;

  constructor(
    private account: AccountService, 
    private router: Router
  ) {

    this.user = this.account.theUser;

  }
}

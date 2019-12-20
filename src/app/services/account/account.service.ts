import { Injectable } from "@angular/core";

import { AuthService } from "../auth/auth.service";

import { User } from "../../models/user.class";

// read more about localStorage here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

@Injectable({
  providedIn: "root"
})
export class AccountService {

  constructor(private auth: AuthService) {
  }

  get theUser() {
    return this.auth.theUser;
  }

  updateProfile(user: User) {

    this.auth.theUser.FirstName = user.FirstName;
    this.auth.theUser.LastName = user.LastName;
    this.auth.theUser.Address = user.Address;

    this.auth.updateTheUserStorage();
    this.auth.updateUsersStorage();

  }
}

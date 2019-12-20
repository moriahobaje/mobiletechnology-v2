import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth/auth.service";

import { User } from "../../../models/user.class";

@Component({
  selector: "my-app-pages-auth-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  private user: User = new User();
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {
    //
  }

  doSubmit() {
    if (!this.user.passwordsMatch()) {
      this.errorMessage = 'Passwords must match! Please try again.';

      setTimeout(() => {
        this.errorMessage = '';
      }, 2500); // after 2500ms run the code within the curly brackets

      return;
    }

    const result = this.auth.doRegistration(this.user);

    if (result === false) {
      this.errorMessage = 'Email already exists! Please try again.';

      setTimeout(() => {
        this.errorMessage = '';
      }, 2500); // after 2500ms run the code within the curly brackets
      
      return;
    }

    this.auth.doLogin(this.user);
    this.router.navigate(['/dashboard']);
  }
}

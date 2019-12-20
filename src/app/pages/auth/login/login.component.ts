import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth/auth.service";

import { User } from "../../../models/user.class";

@Component({
  selector: "my-app-pages-auth-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user: User = new User();
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {

    const result = this.auth.doLogin(this.user);

    if (result) {

      if (result === 'disabled') {

          this.errorMessage = 'Account disabled.';

          setTimeout(() => {
            this.errorMessage = '';
          }, 2500); // after 2500ms run the code within the curly brackets

      } else  {

        this.router.navigate(['/dashboard']);

      }

    } else {

      this.errorMessage = 'Wrong credentials. Please try again.';

      setTimeout(() => {
        this.errorMessage = '';
      }, 2500); // after 2500ms run the code within the curly brackets
    }
  }
}

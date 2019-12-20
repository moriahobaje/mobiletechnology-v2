import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { User } from "../../models/user.class";

// read more about localStorage here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// angular firebase library: https://github.com/angular/angularfire

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public users: User[] = []; // all use accounts on the app

  public theUser: User = null; // the current authenticated user account

  public userHasLoggedIn: Subject<User> = new Subject();
  public userHasLoggedOut: Subject<void> = new Subject();

  constructor() {
    // if the storage has never had a users entry before, then create it now
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }

    // if the storage has never had a theUser entry before, then create it now
    if (!localStorage.getItem("theUser")) {
      localStorage.setItem("theUser", JSON.stringify(null));
    }

    // take out the users array from storage and treat it as an array of Users
    const usersStorage = JSON.parse(localStorage.getItem("users")) as User[];

    // for each user in storage ...
    usersStorage.forEach(user => {
      // create a new user, copy over it the values from the storage user, then add the result to the users array - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      this.users.push(Object.assign(new User(), user));

      // the above is needed because the storage user does not contain the get/set properties (Email, Password, Name, etc.), it only conains the private attributes (email, firstName, lastName, password, etc.) and the properties are needed throughout the code
    });

    // take out the user object from storage and treat it as a User
    const theUserStorage = JSON.parse(localStorage.getItem("theUser")) as User;

    // same explanation as above, the storage object has lost its properties when it went in
    // also check if the storage value is null first by using the ternary operator - read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    this.theUser = theUserStorage
      ? Object.assign(new User(), theUserStorage)
      : null; // leave it as null if storage does not have a user

    // adds a delay to the below code so i runs a the end of the entire Angular startup sequence
    setTimeout(() => {
      if (this.theUser) {
        // notify observers
        this.userHasLoggedIn.next(this.theUser);
      } else {
        // notify observers
        this.userHasLoggedOut.next();
      }
    });
  }

  // returns false if the email is already taken
  doRegistration(user: User): boolean {
    const userExists = this.users.filter(userToCheck => {
      return userToCheck.Email === user.Email;
    })[0]; // will be undefined if the email is not already taken

    if (userExists) {
      return false;
    }

    // dev purposes
    if (this.users.length === 0) {
      user.Role = 'admin';
    } else {
      user.Role = 'user';
    }

    this.users.push(user);

    // update the storage by replacing the old array with the newly updated one
    this.updateUsersStorage();

    return true;
  }

  // returns false if user could not be found or incorrect password
  doLogin(user: User) {
    // filter the array of users by only keeping those that match both the email and password of the user we want to doLogin
    // then, as the result is an array of 0 or more elements, then we try to access position 0, which will be undefined if we haven't found the user, or will contain the user object otherwise
    const theUser = this.users.filter(userToCheck => {
      return (
        userToCheck.Email === user.Email &&
        userToCheck.Password === user.Password
      );
    })[0];

    // if we find the user i.e. the result is not undefined, then ...
    if (theUser !== undefined) {

      if (!theUser.Enabled) {

        return 'disabled';

      }

      // remember the current user details
      this.theUser = theUser;

      // notify observers
      this.userHasLoggedIn.next(theUser);

      // update the storage by replacing the old user value with the new one
      this.updateTheUserStorage();

      return true;
    }

    // something went wrong, see above
    return false;
  }

  get isAuthenticated(): boolean {
    return this.theUser !== null;
  }

  doLogout() {
    // clear the user
    this.theUser = null;

    // notify observers
    this.userHasLoggedOut.next();

    // update the storage
    this.updateTheUserStorage();

    // all OK
    return true;
  }

  updateUsersStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  updateTheUserStorage() {
    localStorage.setItem("theUser", JSON.stringify(this.theUser));
  }
}

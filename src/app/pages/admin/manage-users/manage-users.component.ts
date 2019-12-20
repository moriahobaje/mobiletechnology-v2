import { Component } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';

import { User } from '../../../models/user.class';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: [ './manage-users.component.css' ]
})
export class ManageUsersComponent {

  searchResults: User[] = [];

  users: User[] = [];
  theUser: User = null

  constructor(
    private auth: AuthService
  ) {
    this.theUser = this.auth.theUser;
    this.users = this.auth.users;
    this.searchResults = this.users;
  }

  setStatus(user: User, status: boolean) {
    user.Enabled = status;
    this.auth.updateUsersStorage();
  }

  search($event) {
    const filter = $event.target.value;
    
    if (!filter) {
      this.searchResults = this.users;
      return;
    }

    const keywords = filter.split(' ');
    this.searchResults = [];

    this.users.forEach(user => {

      let matchesFound = 0;

      keywords.forEach(keyword => {

        keyword = keyword.toLocaleLowerCase();
        let matchedOnce = false;

        for (const property in user) {
          
          const rawValue = user[this.capitaliseFirstLetter(property)];

          if (typeof rawValue !== 'string') {
            continue;
          }

          const value = rawValue.toLocaleLowerCase();

          if (value.includes(keyword) && !matchedOnce) {
            matchedOnce = true;
            matchesFound++;
          }

        }
      });

      // at least one keywords matched
      if (matchesFound > 0) {
        this.searchResults.push(user);
      }
    });
  }

  capitaliseFirstLetter(str: string) {
    /*str[0] = str[0].toLocaleUpperCase();
    return str;*/
    return str[0].toLocaleUpperCase() + str.substr(1);
  }
}
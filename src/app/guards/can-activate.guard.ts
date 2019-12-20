import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "../services/auth/auth.service";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

@Injectable({
  providedIn: "root"
})
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // this method is automatically used by the Router to decide if a certain route is allowed to load
  // for the Router to do that, the canActivate property must be specified for each route that is to be protected in this manner - please see the various Routing modules in the App, they have been configured to work in this manner
  // the method will allow a component to load if the user is logged in and they are not accessing a guest route
  // oherwise, they will be redirected to either login (for guest users) or dashboard (for authenticated users)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean> | Promise<boolean> {

    // check if guest route (they do no require authentication)
    // this has been defined in some of the routing modules, like AuthRoutingModule
    if (route.routeConfig.data && route.routeConfig.data.guestRoute) {

      // allow component to load if user is not logged in
      if (!this.auth.isAuthenticated) {
        // allow the component to load
        return true;
      }

      // othewise, send them to dashboard
      return this.router.parseUrl("/dashboard");
    }

    // the user is logged in
    if (this.auth.isAuthenticated) {

      // check route data parameters, check for requiresAdmin to be true
      if (route.routeConfig.data && route.routeConfig.data.requiresAdmin === true) {

        // allow component to load if user is not logged in
        if (this.auth.theUser.Role === 'admin') {

          // allow the component to load
          return true;

        }

        // othewise, send them to dashboard
        return this.router.parseUrl("/dashboard");
      }

      // allow the component to load
      return true;
    }
      
    // redirect to login
    return this.router.parseUrl("/auth/login");
  }
}

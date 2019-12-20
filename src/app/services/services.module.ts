import { NgModule } from "@angular/core";

import { AccountService } from "./account/account.service";
import { AuthService } from "./auth/auth.service";

const SERVICES = [AuthService, AccountService];

@NgModule({
  imports: [],
  providers: [...SERVICES]
})
export class ServicesModule {}

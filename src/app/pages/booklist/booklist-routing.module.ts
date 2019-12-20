import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { ReadingListComponent } from "./reading-list/readinglist.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "booklist",
    children: [{ path: "", component: ReadingListComponent, pathMatch: "full", canActivate: [CanActivateGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooklistRoutingModule {}

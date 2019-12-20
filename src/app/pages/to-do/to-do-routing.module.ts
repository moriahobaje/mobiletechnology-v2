import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CanActivateGuard } from "../../guards/can-activate.guard";

import { ToDoListComponent } from "./to-do-list/to-do-list.component";

// read more about guards here: https://angular.io/guide/router#milestone-5-route-guards

const routes: Routes = [
  {
    path: "to-do",
    children: [{ path: "", component: ToDoListComponent, pathMatch: "full", canActivate: [CanActivateGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ToDoRoutingModule } from './to-do-routing.module';

import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
      ToDoRoutingModule
    ],
    // add here any components that are part of this module
    declarations: [
      ToDoListComponent
    ],
    exports: [
      ToDoListComponent
    ]
})
export class ToDoModule {}
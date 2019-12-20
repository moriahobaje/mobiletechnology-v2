import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesComponent } from './component/courses.component';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
      CoursesRoutingModule
    ],
    // add here any components that are part of this module
    declarations: [
      CoursesComponent
    ],
    exports: [
      CoursesComponent
    ]
})
export class CoursesModule {}
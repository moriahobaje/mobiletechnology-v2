import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BooklistRoutingModule } from './booklist-routing.module';

import { ReadingListComponent } from './reading-list/readinglist.component';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
      BooklistRoutingModule
    ],
    // add here any components that are part of this module
    declarations: [
      ReadingListComponent
    ],
    exports: [
      ReadingListComponent
    ]
})
export class BooklistModule {}
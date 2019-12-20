import { Component } from '@angular/core';

import { iToDoItem } from '../interfaces/to-do-item.interface';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do-list.component.html',
  styleUrls: [ './to-do-list.component.css' ]
})
export class ToDoListComponent {

  searchResults: iToDoItem[] = [];

  toDoItems: iToDoItem[] = [
    {
      title: 'Shopping',
      content: 'Buy Milk',
      createdAt: new Date()
    },
    {
      title: 'Car',
      content: 'Take to MOT',
      createdAt: new Date()
    }
  ];

  toDoItem: iToDoItem = {
    title: '',
    content: '',
    createdAt: null
  };

  constructor() {
    if (!localStorage.getItem("toDoItems")) {
      localStorage.setItem("toDoItems", JSON.stringify( [] ) );
    }

    // load items from storage
    this.toDoItems = JSON.parse(localStorage.getItem("toDoItems")) as iToDoItem[];

    this.searchResults = this.toDoItems;
  }

  onSubmit(): void {

    let item: iToDoItem = 
      {
        title: this.toDoItem.title,
        content: this.toDoItem.content,
        createdAt: new Date()
      };

    this.toDoItems.push(item);

    this.toDoItem.title = '';
    this.toDoItem.content = '';

    // save items to storage
    localStorage.setItem("toDoItems", JSON.stringify(this.toDoItems));

  }

  deleteToDoItem(item: iToDoItem, id: number) {

    // this.toDoItems.splice(id, 1);

    this.toDoItems = this.toDoItems.filter(toDoItem => item !== toDoItem);

    // save items to storage
    localStorage.setItem("toDoItems", JSON.stringify(this.toDoItems));
    
  }

  search($event) {
    const filter = $event.target.value;
    
    if (!filter) {
      this.searchResults = this.toDoItems;
      return;
    }

    const keywords = filter.split(' ');
    this.searchResults = [];

    this.toDoItems.forEach(toDoItem => {

      let matchesFound = 0;

      keywords.forEach(keyword => {

        keyword = keyword.toLocaleLowerCase();
        let matchedOnce = false;

        for (const property in toDoItem) {

          const value = toDoItem[property].toLocaleLowerCase();


          if (value.includes(keyword) && !matchedOnce) {
            matchedOnce = true;
            matchesFound++;
            break;
          }

        }

      });

      // all keywords matched
      if (matchesFound === keywords.length) {
        this.searchResults.push(toDoItem);
      }

      // at least one keyword matched
      else if (matchesFound > 0) {
        this.searchResults.push(toDoItem);
      }
    });
  }
}
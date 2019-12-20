import { Component, OnInit } from '@angular/core';

import { Books } from './booklist/interface/book.interface'



@Component({
  selector: 'app-booklist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadingListComponent {
  searchResults: Books[] = []; 

  books: Books = {
    title: "",
    author: "",
    ISBN: ""
  };
 
 constructor (){
   if (!localStorage.getItem("books")){
     localStorage.setItem("books",JSON.stringify([]));
 }

  this.books = JSON.parse(localStorage.getItem("books")) as Books[];
  this.searchResults = this.books;
 }

 onSubmit(): void {

    let item: Books = 
      {
        title: this.books.title,
        author: this.books.author,
        ISBN: this.books.ISBN
      };

    this.books.push(item);

    this.books.title = '';
    this.books.content = '';

    // save items to storage
    localStorage.setItem("books", JSON.stringify(this.books));

  }

  deleteToDoItem(item: Books, id: number) {

    // this.toDoItems.splice(id, 1);

    this.books = this.books.filter(toDoItem => item !== toDoItem);

    // save items to storage
    localStorage.setItem("books", JSON.stringify(this.books));
    
  }
}

  
  
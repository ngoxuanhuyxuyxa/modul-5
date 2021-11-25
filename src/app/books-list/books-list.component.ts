import { Component, OnInit } from '@angular/core';
import {BooksService} from '../service/books.service';
import {Book} from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.findAll().subscribe(data => {
      this.books = data;
    });
  }

}

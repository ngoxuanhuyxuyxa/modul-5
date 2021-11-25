import { Component, OnInit } from '@angular/core';
import {BooksService} from '../service/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {

  constructor(private booksService: BooksService,
              private router: Router) {}

  ngOnInit() {
  }

  createBook(book) {
    this.booksService.createBook(book.value).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}

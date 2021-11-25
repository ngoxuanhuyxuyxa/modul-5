import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BooksService} from '../service/books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent implements OnInit {

  book: Book;
  id: number;

  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.id = +paraMap.get('id');
      this.booksService.findById(this.id).subscribe(data => {
        this.book = data;
      });
    });
  }

  ngOnInit() {
  }

  deleteBook() {
    this.booksService.deleteBook(this.id).subscribe(() => {
      this.router.navigateByUrl('/books');
    })
  }
}

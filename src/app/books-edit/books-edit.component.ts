import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BooksService} from '../service/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
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

  update(ngFormCreate: NgForm) {
    this.booksService.editBook(ngFormCreate.value, this.id).subscribe(() =>{
      this.router.navigateByUrl('/books');
    });
  }
}

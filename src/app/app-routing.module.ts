import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksCreateComponent} from './books-create/books-create.component';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksDeleteComponent} from './books-delete/books-delete.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  {
    path: 'books',
    component: BooksListComponent,
  },
  {
    path: 'books/create',
    component: BooksCreateComponent,
  },
  {
    path: 'books/edit/:id',
    component: BooksEditComponent,
  },
  {
    path: 'books/delete/:id',
    component: BooksDeleteComponent,
  },{
    path: 'books/view/:id',
    component: ViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}

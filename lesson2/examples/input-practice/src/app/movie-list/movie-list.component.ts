import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      if (!this.movies.includes(newTitle)){
      this.movies.push(newTitle);
      }
   }

   addMovie2(newTitle: string) {
      let movieExists = this.movies.find(element => {
         return element.toLowerCase() === newTitle.toLowerCase();
      });
      if (!movieExists) {
         this.movies.push(newTitle);
      }
   }
}
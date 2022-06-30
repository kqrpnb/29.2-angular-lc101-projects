import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Armageddon', 'Oceans 11', 'The Bourne Identity', 'Marcel the Shell With Shoes On'];

   constructor() { }

   ngOnInit() {
   }

}

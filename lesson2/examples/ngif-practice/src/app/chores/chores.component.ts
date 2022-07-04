import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   // chores = ['Clean kitchen', 'Buy fireworks', 'Empty dishwasher', 'Complete LaunchCode assignments', 'Buy groceries'];
   // chores = ['Empty dishwasher', 'Complete LaunchCode assignments'];
   chores = [];
   // finishedChores = ['Clean kitchen', 'Buy fireworks', 'Empty dishwasher', 'Complete LaunchCode assignments', 'Buy groceries'];
   finishedChores = ['Clean kitchen', 'Buy fireworks'];
   // finishedChores = ['Buy fireworks'];

   // targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2ucLqOB9vX2BH6IY10fCwzNxOiwxInbM5w&usqp=CAU';

   constructor() { }

   ngOnInit() {
   }

}

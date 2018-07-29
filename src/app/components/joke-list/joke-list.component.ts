import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

class Joke{
	setup: string;
	punchline: string;
	hide: boolean;

	constructor(setup: string, punchline: string){
		this.setup = setup;
		this.punchline = punchline;
		this.hide = true;
	}

}

//let joke = new joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)");

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: [`
	.card{
		background: green;
	}
  `],
  encapsulation: ViewEncapsulation.Emulated
})

export class JokeListComponent implements OnInit {

	@Input ('title') title:string;

  jokes: Joke[] =[];
	data: Joke[];

  constructor() {
		this.jokes = [
		new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
		new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
		new Joke("A kid threw a lump of cheddar at me",  "I thought ‘That’s not very mature’")
		]
   }
   getColor(country){
     switch (country){
       case 'UK': 
       return 'red';
       case 'HK':
       return 'green';
       case 'USA':
       return 'blue';
       default :
       return 'pink'
     }
   }
	 
	 people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  ngOnInit() {
		this.data = this.jokes;
  }

  toggle(Joke) {
		Joke.hide = !Joke.hide;
	}
	addJoke() {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = []
  }
}


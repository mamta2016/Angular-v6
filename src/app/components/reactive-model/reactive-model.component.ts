import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-reactive-model',
  templateUrl: './reactive-model.component.html',
  styleUrls: ['./reactive-model.component.css']
})
export class ReactiveModelComponent implements OnInit {

  searchField: FormControl; 
  searches: string[] = []; 
  constructor() { }


  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe(term => {
          this.searches.push(term);
        });
  }

}

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-http-with-promise',
  templateUrl: './http-with-promise.component.html',
  styleUrls: ['./http-with-promise.component.css']
})
export class HttpWithPromiseComponent implements OnInit {

  public loading: boolean = false;
  constructor(private itunes:SearchService,public router: Router,public route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      if(params.term){
        this.doSearch(params['term']);
      }
    });
  }

  ngOnInit() {
  }

  onSearch(term:string){
    this.router.navigate(['promise', {term: term}]);
  }
  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( () => this.loading = false);
  }

  canDeactivate() {
    return this.itunes.results.length > 0;
  }
}

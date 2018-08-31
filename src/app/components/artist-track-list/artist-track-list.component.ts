import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {

  constructor(private itunes:SearchService,public router: Router,public route: ActivatedRoute) { 
    this.route.parent.params.subscribe(params => {
      console.log(params);
      // if(params.term){
      //   this.doSearch(params['term']);
      // }
    });
  }

  ngOnInit() {
  }

}

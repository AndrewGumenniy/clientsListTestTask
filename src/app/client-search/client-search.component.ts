import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  constructor(private searchSv: SearchService) { }

  ngOnInit() {
  }

  search(term: any): void {
    this.searchSv.sendMessage(term);
  }
}

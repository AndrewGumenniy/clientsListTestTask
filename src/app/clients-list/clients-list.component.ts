import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsListDataService } from '../shared/clients-list-data.service';
import { Client } from '../shared/client.model';
import { SearchService } from '../shared/search.service';
import { Subscription } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit, OnDestroy {
  clients: Client[];
  selectedClient: Client;
  message: any;
  subscription: Subscription;

  constructor(private clientsDataSv: ClientsListDataService,
  private searchSv: SearchService
  ) {
    this.subscription = this.searchSv.getMessage()
    .subscribe(message => { this.message = message; });
   }

  ngOnInit() {
    this.getClients();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getClients() {
    this.clientsDataSv.getClients()
    .subscribe(clients => this.clients = clients);
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

}

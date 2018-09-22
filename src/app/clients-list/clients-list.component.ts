import { Component, OnInit } from '@angular/core';
import { ClientsListDataService } from '../shared/clients-list-data.service';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;

  constructor(private clientsDataSv: ClientsListDataService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientsDataSv.getClients()
    .subscribe(clients => this.clients = clients);
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

}

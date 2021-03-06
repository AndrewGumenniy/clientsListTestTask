import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../shared/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() selectedClient: Client;

  constructor() { }

  ngOnInit() {
  }

}

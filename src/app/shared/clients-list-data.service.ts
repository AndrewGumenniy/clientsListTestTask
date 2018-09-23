import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Client } from './client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientsListDataService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get('https://ng-clients-app.firebaseio.com/clients.json')
      .pipe(map(
        (clients: Client[]) => {
          const transformedData = Object.keys(clients).map(key => clients[key]);
          return transformedData.map(function(client: any) {
            return {
              firstName: client.general.firstName,
              lastName: client.general.lastName,
              avatar: client.general.avatar,
              company: client.job.company,
              jobPosition: client.job.title,
              email: client.contact.email,
              phone: client.contact.phone,
              street: client.address.street,
              city: client.address.city,
              zipCode: client.address.zipCode,
              country: client.address.country
            };
        });
      })
    );
  }
}

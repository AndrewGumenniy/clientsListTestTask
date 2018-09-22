import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientItemComponent } from './clients-list/client-item/client-item.component';
import { ClientDetailComponent } from './clients-list/client-detail/client-detail.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientsListDataService } from './shared/clients-list-data.service';
import { AppMaterialModule } from './app-material.module';
import { SearchFilterPipe } from './shared/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientSearchComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [ClientsListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

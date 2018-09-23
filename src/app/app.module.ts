import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientItemComponent } from './clients-list/client-item/client-item.component';
import { ClientDetailComponent } from './clients-list/client-detail/client-detail.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientsListDataService } from './shared/clients-list-data.service';
import { SearchService } from './shared/search.service';
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
  providers: [ClientsListDataService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

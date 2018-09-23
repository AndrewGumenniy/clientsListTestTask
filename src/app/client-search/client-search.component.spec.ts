import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { ClientSearchComponent } from './client-search.component';

describe('ClientSearchComponent', () => {
    let comp: ClientSearchComponent;
    let fixture: ComponentFixture<ClientSearchComponent>;

    beforeEach(() => {
        const searchServiceStub = {
            sendMessage: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ ClientSearchComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: SearchService, useValue: searchServiceStub }
            ]
        });
        fixture = TestBed.createComponent(ClientSearchComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});

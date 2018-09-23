import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientDetailComponent } from './client-detail.component';

describe('ClientDetailComponent', () => {
    let comp: ClientDetailComponent;
    let fixture: ComponentFixture<ClientDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ClientDetailComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(ClientDetailComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});

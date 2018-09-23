import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientItemComponent } from './client-item.component';

describe('ClientItemComponent', () => {
    let comp: ClientItemComponent;
    let fixture: ComponentFixture<ClientItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ClientItemComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(ClientItemComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});

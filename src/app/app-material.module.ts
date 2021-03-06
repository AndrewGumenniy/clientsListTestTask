import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: []
})
export class AppMaterialModule { }

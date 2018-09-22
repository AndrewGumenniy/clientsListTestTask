import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatListModule,
    MatInputModule
  ],
  declarations: []
})
export class AppMaterialModule { }

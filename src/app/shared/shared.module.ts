import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule { }

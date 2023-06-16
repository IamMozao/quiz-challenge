import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [SimpleLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class LayoutModule { }

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-layout',
  styleUrls: ['./simple-layout.component.scss'],
  template: `
    <app-header></app-header>
    <div class="page-wrapper">
      <router-outlet></router-outlet>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleLayoutComponent {}

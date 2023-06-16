import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles:['.mat-toolbar{ background: transparent; margin-bottom: -64px;}'],
  template: `
  <mat-toolbar>
    <button mat-icon-button aria-label="Quiz Logo Icon">
      <mat-icon >psychology_alt</mat-icon>
    </button>
    <span>Quiz Application UI</span>
  </mat-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }

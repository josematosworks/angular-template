import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-topbar-widget',
  templateUrl: './topbar-widget.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarWidgetComponent {
  constructor(public router: Router) {}
}

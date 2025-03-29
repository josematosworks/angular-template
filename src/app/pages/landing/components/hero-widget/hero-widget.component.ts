import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-hero-widget',
  templateUrl: './hero-widget.component.html',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HeroWidgetComponent {
  // Component implementation
}

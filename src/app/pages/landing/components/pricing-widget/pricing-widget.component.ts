import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-pricing-widget',
  templateUrl: './pricing-widget.component.html',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    RippleModule,
    NgOptimizedImage,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PricingWidgetComponent {
  // This class implements the pricing widget component
}

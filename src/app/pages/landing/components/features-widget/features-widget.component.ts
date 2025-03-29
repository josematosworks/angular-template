import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features-widget',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features-widget.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class FeaturesWidgetComponent {
  // This component displays the features section
}

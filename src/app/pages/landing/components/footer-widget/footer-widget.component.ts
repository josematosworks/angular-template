import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-widget',
  templateUrl: './footer-widget.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterWidgetComponent {
  constructor(public router: Router) {}

  /**
   * Navigates to a specific link based on the provided route
   * This is used for keyboard and mouse accessibility
   * @param route The route identifier to navigate to
   */
  navigateToLink(route: string): void {
    // In a real application, this would navigate to actual routes
    // For now, we'll just log the navigation attempt
    console.log(`Navigating to: ${route}`);

    // Example of how this would work with real routes:
    // this.router.navigate(['/pages', route]);
  }
}

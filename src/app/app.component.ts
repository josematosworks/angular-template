import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-template';

  /**
   * List of technologies used in this template
   */
  technologies = [
    'Angular',
    'TypeScript',
    'RxJS',
    'Tailwind CSS',
    'ESLint',
    'Prettier',
    'Jest',
    'Cypress',
    'NgRx',
    'Angular Signals',
  ];
}

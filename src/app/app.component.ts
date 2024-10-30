import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 i18n class="mb-8 text-3xl font-bold text-center text-black">
          Angular Template
        </h2>
        <div
          class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-16"
        >
          @for (tech of technologies; track tech.title) {
            <div>
              <div
                class="relative flex items-center justify-center mx-auto"
              ></div>
              <h3 i18n class="mt-8 text-lg font-semibold text-black">
                {{ tech.title }}
              </h3>
              <p i18n class="mt-4 text-base text-gray-600">
                {{ tech.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AppComponent {
  title = 'angular-template';

  technologies = [
    {
      title: 'Angular 18.2.0',
      description:
        'Modern frontend framework for building scalable applications',
    },
    {
      title: 'RxJS',
      description: 'Reactive programming for async data streams',
    },
    {
      title: 'TypeScript',
      description: 'Strongly typed programming language',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
    },
    {
      title: 'Nx',
      description: 'Monorepo management tool',
    },
    {
      title: 'Jest',
      description: 'Testing framework for unit tests',
    },
    {
      title: 'Playwright',
      description: 'End-to-end testing automation',
      iconColor: 'text-green-600',
    },
    {
      title: 'ESLint',
      description: 'Linting and code quality tool',
    },
    {
      title: 'Zone.js',
      description: 'Manages asynchronous operations',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Angular CDK',
      description: 'Component Development Kit',
      iconColor: 'text-red-600',
    },
    {
      title: 'Prettier',
      description: 'Code formatter for consistency',
    },
    {
      title: 'Nx Cloud',
      description: 'Distributed computing and caching',
      iconColor: 'text-blue-700',
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
                [innerHTML]="tech.icon"
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
  technologies: {
    title: string;
    description: string;
    iconColor: string;
    icon: SafeHtml;
  }[] = [];

  constructor(public sanitizer: DomSanitizer) {
    this.technologies = [
      {
        title: 'Angular 18.2.0',
        description:
          'Modern frontend framework for building scalable applications',
        iconColor: 'text-red-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="40" height="40">
          <!-- Angular SVG Icon -->
          <path fill="#DD0031" d="M120 0L0 62.704v124.592L120 240l120-52.704V62.704L120 0z"/>
          <path fill="#C3002F" d="M120 19.77l96.892 42.647H23.108L120 19.77zM0 62.704l120 52.704 120-52.704V177.296l-120 52.704L0 177.296V62.704z"/>
        </svg>
      `),
      },
      {
        title: 'RxJS',
        description: 'Reactive programming for async data streams',
        iconColor: 'text-purple-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- RxJS SVG Icon -->
          <circle cx="50" cy="50" r="45" stroke="#E65100" stroke-width="10" fill="none"/>
          <path d="M25 50 L75 50" stroke="#E65100" stroke-width="10" stroke-linecap="round"/>
        </svg>
      `),
      },
      {
        title: 'TypeScript',
        description: 'Strongly typed programming language',
        iconColor: 'text-blue-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- TypeScript SVG Icon -->
          <path fill="#3178C6" d="M50 0L0 100h100L50 0z"/>
          <path fill="#FFFFFF" d="M50 0L0 100h100L50 0z"/>
        </svg>
      `),
      },
      {
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
        iconColor: 'text-teal-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Tailwind CSS SVG Icon -->
          <path fill="#38B2AC" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Nx',
        description: 'Monorepo management tool',
        iconColor: 'text-orange-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Nx SVG Icon -->
          <path fill="#F76B1C" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Jest',
        description: 'Testing framework for unit tests',
        iconColor: 'text-red-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Jest SVG Icon -->
          <path fill="#C21325" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Playwright',
        description: 'End-to-end testing automation',
        iconColor: 'text-green-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Playwright SVG Icon -->
          <path fill="#4CAF50" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'ESLint',
        description: 'Linting and code quality tool',
        iconColor: 'text-yellow-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- ESLint SVG Icon -->
          <path fill="#F7DF1E" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Zone.js',
        description: 'Manages asynchronous operations',
        iconColor: 'text-orange-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Zone.js SVG Icon -->
          <path fill="#FFA726" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Angular CDK',
        description: 'Component Development Kit',
        iconColor: 'text-red-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Angular CDK SVG Icon -->
          <path fill="#DD0031" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Prettier',
        description: 'Code formatter for consistency',
        iconColor: 'text-yellow-600',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Prettier SVG Icon -->
          <path fill="#F7DF1E" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
      {
        title: 'Nx Cloud',
        description: 'Distributed computing and caching',
        iconColor: 'text-blue-700',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
          <!-- Nx Cloud SVG Icon -->
          <path fill="#38B2AC" d="M0 0h100v100H0z"/>
          <path fill="#FFFFFF" d="M0 0h100v100H0z"/>
        </svg>
      `),
      },
    ];
  }
}

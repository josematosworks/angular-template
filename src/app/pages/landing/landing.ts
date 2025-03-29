import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FeaturesWidgetComponent } from './components/features-widget/features-widget.component';
import { FooterWidgetComponent } from './components/footer-widget/footer-widget.component';
import { HeroWidgetComponent } from './components/hero-widget/hero-widget.component';
import { HighlightsWidgetComponent } from './components/highlights-widget/highlights-widget.component';
import { PricingWidgetComponent } from './components/pricing-widget/pricing-widget.component';
import { TopbarWidgetComponent } from './components/topbar-widget/topbar-widget.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule,
    TopbarWidgetComponent,
    HeroWidgetComponent,
    FeaturesWidgetComponent,
    HighlightsWidgetComponent,
    PricingWidgetComponent,
    FooterWidgetComponent,
    RippleModule,
    StyleClassModule,
    ButtonModule,
    DividerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './landing.scss',
  template: `
    <div class="bg-surface-0 dark:bg-surface-900">
      <div id="home" class="landing-wrapper overflow-hidden">
        <app-topbar-widget
          class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static"
        />
        <app-hero-widget />
        <app-features-widget />
        <app-highlights-widget />
        <app-pricing-widget />
        <app-footer-widget />
      </div>
    </div>
  `,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class LandingComponent {
  // This class implements the landing page component
}

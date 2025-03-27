import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { buildButtonStyleClass } from './button.styles';
import {
  ButtonIconPosition,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './button.types';

/**
 * Button component based on PrimeNG Button
 * Provides a consistent button styling across the application
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Button type (button, submit, reset)
   */
  readonly type = input<ButtonType>('button');

  /**
   * Button label text
   */
  readonly label = input<string>('');

  /**
   * Button icon (PrimeNG icon name)
   */
  readonly icon = input<string>('');

  /**
   * Position of the icon
   */
  readonly iconPosition = input<ButtonIconPosition>('left');

  /**
   * Button variant
   */
  readonly variant = input<ButtonVariant>('primary');

  /**
   * Button size
   */
  readonly size = input<ButtonSize>('medium');

  /**
   * Whether the button is disabled
   */
  readonly disabled = input<boolean>(false);

  /**
   * Whether the button is in loading state
   */
  readonly loading = input<boolean>(false);

  /**
   * Whether the button is full width
   */
  readonly fullWidth = input<boolean>(false);

  /**
   * Badge text to display
   */
  readonly badge = input<string>('');

  /**
   * Badge CSS class
   */
  readonly badgeClass = input<string>('');

  /**
   * ARIA label for accessibility
   */
  readonly ariaLabel = input<string>('');

  /**
   * Additional CSS classes
   */
  readonly additionalClass = input<string>('');

  /**
   * Click event emitter
   */
  readonly buttonClick = output<Event>();

  /**
   * Get the combined style class based on variant, size, and other properties
   */
  readonly styleClass = computed<string>(() => {
    return buildButtonStyleClass(
      this.variant(),
      this.size(),
      this.fullWidth(),
      this.additionalClass(),
    );
  });

  /**
   * Handle button click event
   */
  handleClick(event: Event): void {
    if (!this.disabled() && !this.loading()) {
      this.buttonClick.emit(event);
    }
  }
}

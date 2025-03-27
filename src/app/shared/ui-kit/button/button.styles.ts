import { ButtonSize, ButtonVariant } from './button.types';

/**
 * Generates style classes for button variants
 * @param variant Button variant
 * @returns CSS class string for the variant
 */
export function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'p-button-primary';
    case 'secondary':
      return 'p-button-secondary';
    case 'success':
      return 'p-button-success';
    case 'info':
      return 'p-button-info';
    case 'warning':
      return 'p-button-warning';
    case 'danger':
      return 'p-button-danger';
    case 'text':
      return 'p-button-text';
    default:
      return '';
  }
}

/**
 * Generates style classes for button sizes
 * @param size Button size
 * @returns CSS class string for the size
 */
export function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return 'p-button-sm';
    case 'large':
      return 'p-button-lg';
    default:
      return '';
  }
}

/**
 * Builds the complete style class string for a button
 * @param variant Button variant
 * @param size Button size
 * @param fullWidth Whether the button is full width
 * @param additionalClass Additional CSS classes
 * @returns Complete CSS class string
 */
export function buildButtonStyleClass(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  additionalClass: string,
): string {
  const classes: string[] = [];

  // Add variant class
  const variantClass = getVariantClasses(variant);
  if (variantClass) {
    classes.push(variantClass);
  }

  // Add size class
  const sizeClass = getSizeClasses(size);
  if (sizeClass) {
    classes.push(sizeClass);
  }

  // Add full width class
  if (fullWidth) {
    classes.push('w-full');
  }

  // Add additional classes
  if (additionalClass) {
    classes.push(additionalClass);
  }

  return classes.join(' ');
}

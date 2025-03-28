import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

/**
 * Button component stories
 *
 * This showcases all possible options and combinations of the button component.
 */
const meta: Meta<ButtonComponent> = {
  title: 'UI Kit/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'text',
      ],
      description: 'Button visual style variant',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: 'ButtonType' },
        defaultValue: { summary: 'button' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text label',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'Icon class (e.g., "pi pi-check")',
      table: {
        type: { summary: 'string' },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the label',
      table: {
        type: { summary: 'ButtonIconPosition' },
        defaultValue: { summary: 'left' },
      },
    },
    badge: {
      control: 'text',
      description: 'Badge text to display on the button',
      table: {
        type: { summary: 'string' },
      },
    },
    badgeClass: {
      control: 'text',
      description: 'CSS class for the badge',
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the button',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    additionalClass: {
      control: 'text',
      description: 'Additional CSS classes to apply to the button',
      table: {
        type: { summary: 'string' },
      },
    },
    buttonClick: {
      action: 'clicked',
      description: 'Event emitted when the button is clicked',
      table: {
        type: { summary: 'EventEmitter<Event>' },
      },
    },
  },
  args: {
    // Default values for all stories
    variant: 'primary',
    size: 'medium',
    type: 'button',
    label: 'Button',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconPosition: 'left',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A reusable button component based on PrimeNG Button with various styling options and features.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

/**
 * Default button with primary variant
 */
export const Default: Story = {
  args: {},
};

/**
 * Button variants showcase
 */
export const Variants: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button variant="primary" label="Primary"></app-button>
          <app-button variant="secondary" label="Secondary"></app-button>
          <app-button variant="success" label="Success"></app-button>
          <app-button variant="info" label="Info"></app-button>
          <app-button variant="warning" label="Warning"></app-button>
          <app-button variant="danger" label="Danger"></app-button>
          <app-button variant="text" label="Text"></app-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants.',
      },
    },
  },
};

/**
 * Button sizes showcase
 */
export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: row; align-items: center; gap: 0.5rem;">
          <app-button size="small" label="Small"></app-button>
          <app-button size="medium" label="Medium"></app-button>
          <app-button size="large" label="Large"></app-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Available button sizes: small, medium, and large.',
      },
    },
  },
};

/**
 * Buttons with icons
 */
export const WithIcons: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button label="Save" icon="pi pi-save"></app-button>
          <app-button label="Delete" icon="pi pi-trash" variant="danger"></app-button>
          <app-button label="Search" icon="pi pi-search" variant="info"></app-button>
        </div>
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button label="Next" icon="pi pi-arrow-right" iconPosition="right"></app-button>
          <app-button label="Upload" icon="pi pi-upload" iconPosition="right" variant="success"></app-button>
        </div>
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button icon="pi pi-check" ariaLabel="Confirm"></app-button>
          <app-button icon="pi pi-times" variant="danger" ariaLabel="Cancel"></app-button>
          <app-button icon="pi pi-refresh" variant="info" ariaLabel="Refresh"></app-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Buttons with icons in different positions and icon-only buttons with aria labels.',
      },
    },
  },
};

/**
 * Buttons with badges
 */
export const WithBadges: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button label="Notifications" icon="pi pi-bell" badge="5"></app-button>
          <app-button label="Messages" icon="pi pi-envelope" badge="12" variant="info"></app-button>
          <app-button label="Alerts" icon="pi pi-exclamation-triangle" badge="3" variant="warning"></app-button>
        </div>
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button icon="pi pi-bell" badge="8" ariaLabel="Notifications"></app-button>
          <app-button icon="pi pi-envelope" badge="24" variant="info" ariaLabel="Messages"></app-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with notification badges.',
      },
    },
  },
};

/**
 * Disabled and loading states
 */
export const States: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button label="Disabled" disabled="true"></app-button>
          <app-button label="Disabled" variant="danger" disabled="true"></app-button>
          <app-button label="Disabled" variant="success" disabled="true"></app-button>
        </div>
        <div style="display: flex; flex-direction: row; gap: 0.5rem;">
          <app-button label="Loading" loading="true"></app-button>
          <app-button label="Loading" variant="info" loading="true"></app-button>
          <app-button label="Loading" icon="pi pi-save" loading="true"></app-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons in disabled and loading states.',
      },
    },
  },
};

/**
 * Full width buttons
 */
export const FullWidth: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 28rem;">
        <app-button label="Full Width Primary" fullWidth="true"></app-button>
        <app-button label="Full Width Success" variant="success" fullWidth="true"></app-button>
        <app-button label="Full Width Danger" variant="danger" fullWidth="true"></app-button>
        <app-button label="Full Width with Icon" icon="pi pi-check" fullWidth="true"></app-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons that take the full width of their container.',
      },
    },
  },
};

/**
 * Button types (submit, reset, button)
 */
export const ButtonTypes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form style="display: flex; flex-direction: row; gap: 0.5rem;">
        <app-button label="Submit" type="submit"></app-button>
        <app-button label="Reset" type="reset" variant="secondary"></app-button>
        <app-button label="Button" type="button" variant="info"></app-button>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different HTML button types: submit, reset, and button.',
      },
    },
  },
};

/**
 * Custom styling with additional classes
 */
export const CustomStyling: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <app-button
          label="Custom Style 1"
          additionalClass="custom-shadow"
        ></app-button>
        <app-button
          label="Custom Style 2"
          additionalClass="custom-rounded"
          variant="success"
        ></app-button>
        <app-button
          label="Custom Style 3"
          additionalClass="custom-border"
          variant="secondary"
        ></app-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Buttons with custom styling applied through additionalClass property.',
      },
    },
  },
};

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    label: 'Playground Button',
    variant: 'primary',
    size: 'medium',
    icon: 'pi pi-check',
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different button configurations.',
      },
    },
  },
};

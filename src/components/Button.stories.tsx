import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

/**
 * Button Component Documentation
 * * This story demonstrates the various states and variants of the Button component.
 * It is built to be accessible, performant, and consistent with the Design System.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // Automatically generates documentation page
  tags: ['autodocs'],
  // Defines the controls and documentation for each prop
  argTypes: {
    variant: {
      control: 'select',
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      description: 'The vertical and horizontal padding scale',
    },
    isLoading: {
      control: 'boolean',
      description: 'Disables the button and shows a loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents user interaction',
    },
    onClick: { 
      description: 'Event handler called when the button is clicked',
    },
  },
  // Use fn() to spy on the onClick event and show it in the Actions panel
  args: { 
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary action button for the main call-to-action in a view.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
    size: 'md',
  },
};

/**
 * Secondary button for less prominent actions.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

/**
 * Danger variant for destructive actions (e.g., Delete, Remove).
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Destructive Action',
  },
};

/**
 * Ghost variant for subtle actions or navigation items.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Action',
  },
};

/**
 * Loading state showing the spinner and preventing double submissions.
 */
export const Loading: Story = {
  args: {
    children: 'Processing...',
    isLoading: true,
  },
};

/**
 * Large button for high-emphasis areas like Hero sections.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

/**
 * Small button for compact layouts or toolbars.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};
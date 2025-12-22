import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Button Component Documentation
 * This story demonstrates the various states and variants of the primary Button component.
 * Focused on Accessibility and Design System consistency.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      description: 'The physical size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is interactive or not',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/** * Default state for the primary action in the UI. 
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    size: 'md',
  },
};

/** * Used for secondary or alternative actions. 
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/** * Specifically for destructive actions like delete or remove. 
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Action',
  },
};

/** * Subtle buttons used for navigation or less prominent actions. 
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

/** * Demonstrates the button state during asynchronous operations. 
 */
export const Loading: Story = {
  args: {
    children: 'Wait a moment',
    isLoading: true,
  },
};

/** * Large scale button for Hero sections or Call to Actions. 
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

/** * Small scale button for tight UI spaces. 
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};
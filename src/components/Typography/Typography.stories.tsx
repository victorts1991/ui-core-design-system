import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'p', 'span', 'label', 'div'],
      description: 'The HTML element to render',
    },
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'p', 'label', 'span'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['font-light', 'font-normal', 'font-medium', 'font-bold'],
    },
    className: {
      control: 'text',
      description: 'Extra CSS classes for custom styling',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p',
  },
};

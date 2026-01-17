import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';

describe('Typography Component', () => {
  it('should render as a paragraph by default', () => {
    render(<Typography>Default Text</Typography>);
    const element = screen.getByText('Default Text');
    expect(element.tagName).toBe('P');
  });

  it('should render as the tag passed in the "as" prop', () => {
    render(<Typography as="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element.tagName).toBe('H1');
  });

  it('should apply the correct variant classes', () => {
    render(<Typography variant="h2">Variant H2</Typography>);
    const element = screen.getByText('Variant H2');
    expect(element.className).toContain('text-3xl');
    expect(element.className).toContain('font-semibold');
  });

  it('should apply weight and align classes correctly', () => {
    render(
      <Typography weight="font-bold" align="center">
        Bold Center
      </Typography>
    );
    const element = screen.getByText('Bold Center');
    expect(element.className).toContain('font-bold');
    expect(element.className).toContain('text-center');
  });
});
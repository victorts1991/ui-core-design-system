import { ReactNode, ElementType, ComponentPropsWithoutRef, ReactElement } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge tailwind classes safely
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Visual variants mapping. 
 * Added 'block w-full' to ensure text-alignment works correctly by occupying full width.
 */
const typographyVariants = {
  h1: 'text-4xl font-bold tracking-tight lg:text-5xl block w-full',
  h2: 'text-3xl font-semibold tracking-tight block w-full',
  h3: 'text-2xl font-semibold tracking-tight block w-full',
  p: 'text-base leading-7 block w-full',
  label: 'text-sm font-medium leading-none inline-block',
  span: 'text-sm leading-none inline-block',
};

/**
 * Explicit size mapping to prevent Tailwind CSS from purging dynamic classes.
 */
const typographySizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

/**
 * Font weight mapping based on design tokens.
 */
const typographyWeights = {
  'font-light': 'font-light',
  'font-normal': 'font-normal',
  'font-medium': 'font-medium',
  'font-bold': 'font-bold',
};

/**
 * Text alignment mapping. 
 * Requires the element to have 'block' or 'inline-block' with width to be visible.
 */
const typographyAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

interface BaseTypographyProps {
  variant?: keyof typeof typographyVariants;
  size?: keyof typeof typographySizes;
  weight?: keyof typeof typographyWeights;
  align?: keyof typeof typographyAlign;
  children: ReactNode;
  className?: string;
}

/**
 * Polymorphic props definition.
 */
export type TypographyProps<T extends ElementType> = BaseTypographyProps & { as?: T } & 
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTypographyProps | 'as'>;

/**
 * Typography component: A flexible, polymorphic component for all text styles.
 * Simplified version without forwardRef for architectural consistency.
 */
export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'p',
  size,
  weight,
  align = 'left',
  children,
  className,
  ...props
}: TypographyProps<T>): ReactElement => {
  const Component = as || 'p';

  const classes = cn(
    // Base classes for alignment support
    'block w-full',
    // Variant styles
    typographyVariants[variant as keyof typeof typographyVariants],
    // Optional scale overrides
    size && typographySizes[size],
    weight && typographyWeights[weight as keyof typeof typographyWeights],
    // Alignment applied last to ensure override
    typographyAlign[align as keyof typeof typographyAlign],
    // Custom external classes
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
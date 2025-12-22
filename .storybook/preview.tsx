import type { Preview } from "@storybook/react";

/**
 * Import global CSS to ensure Tailwind CSS 4 utility classes 
 * are available inside the Storybook iframe.
 */
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    /**
     * Actions Configuration
     * Automatically maps any prop starting with 'on' followed by a capital letter
     * (like onClick, onChange) to the Storybook Actions panel.
     */
    actions: { argTypesRegex: "^on[A-Z].*" },

    /**
     * Controls Configuration
     * Provides an interactive UI for users to play with component props.
     */
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    /**
     * Layout Configuration
     * Centers the component in the canvas for better visualization.
     */
    layout: 'centered',

    /**
     * Backgrounds Configuration
     * Useful for testing accessibility and contrast in different themes.
     */
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' }, // Slate-900 from Tailwind
      ],
    },
  },
};

export default preview;
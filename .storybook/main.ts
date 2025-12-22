import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Add this block to inject the Tailwind plugin into Storybook's internal Vite
  viteFinal: async (config) => {
    config.plugins?.push(tailwindcss());
    return config;
  },
};
export default config;
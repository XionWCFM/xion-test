import type { Config } from 'tailwindcss';
import { XION_STYLE } from '@xionhub/token';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: XION_STYLE,
  plugins: [],
};
export default config;

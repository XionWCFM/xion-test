import type { Config } from 'tailwindcss';
import { XION_STYLE } from '@xionhub/token';
import { transform } from 'next/dist/build/swc';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...XION_STYLE,
    extend: {
      keyframes: {
        'landing-letter': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(10px)' } },
        'landing-dod': { '0%, 100%': { transform: 'translateY(10px)' }, '50%': { transform: 'translateY(0)' } },
      },
      animation: {
        'landing-letter': 'landing-letter 2.2s ease-in-out infinite',
        'landing-dod': 'landing-dod 2.2s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};
export default config;

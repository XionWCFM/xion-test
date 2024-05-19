import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './button';

const meta = {
  title: 'XionDesignSystem/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'hello world',
  },
};

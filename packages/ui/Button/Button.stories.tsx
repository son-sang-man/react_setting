import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },

  parameters: {
    docs: {
      description: {
        component: '공통 버튼 컴포넌트입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '버튼',
    variant: 'secondary',
  },
};

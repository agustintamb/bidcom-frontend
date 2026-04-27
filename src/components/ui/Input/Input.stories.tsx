import { Mail, Search, Eye } from 'lucide-react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: { placeholder: 'Escribí algo...' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { placeholder: '¿Qué estás buscando?' },
}

export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'ejemplo@email.com', type: 'email' },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'ejemplo@email.com',
    leftIcon: <Mail size={16} />,
  },
}

export const WithRightIcon: Story = {
  args: {
    placeholder: '¿Qué estás buscando?',
    rightIcon: <Search size={16} />,
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'Contraseña',
    placeholder: 'Tu contraseña',
    leftIcon: <Mail size={16} />,
    rightIcon: <Eye size={16} />,
    type: 'password',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'ejemplo@email.com',
    defaultValue: 'no-es-email',
    error: 'El email ingresado no es válido',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Nombre de usuario',
    placeholder: 'tu_usuario',
    hint: 'Solo letras minúsculas, números y guiones bajos',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    defaultValue: 'Valor fijo',
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input inputSize="sm" placeholder="Small" label="Small" />
      <Input inputSize="md" placeholder="Medium" label="Medium" />
      <Input inputSize="lg" placeholder="Large" label="Large" />
    </div>
  ),
}

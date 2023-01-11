import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus laboriosam praesentium, sit expedita odio quae amet suscipit iusto voluptas quaerat assumenda excepturi eaque! Exercitationem consequuntur voluptates ab non ipsa!'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: 'inline-radio'
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}

export const Testando: StoryObj<TextProps> = {
  args: {
      children: 'Testando CI',
      as: 'h1'
  }
}
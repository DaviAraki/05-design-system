import { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@daviaraki-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Testando o elemento Text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}

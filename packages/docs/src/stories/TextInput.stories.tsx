import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ls-ignite-ui/react'

export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text>Email Address</Text>
                    {Story()}
                </Box>
            )
        }
    ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your email address...'
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com.br/'
    }
}

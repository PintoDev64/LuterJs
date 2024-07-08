import type { Meta, StoryObj } from "@storybook/react"
import List from "."

const meta: Meta<typeof List> = {
    title: "Componentes/List",
    component: List,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
    }
}
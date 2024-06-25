import type { Meta, StoryObj } from "@storybook/react"  
import Button from "."

const meta: Meta<typeof Button> = {
    title: "Componentes/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        props: {
            children: "XDDD",
            onClick: () => console.log("hola"),
        },
        style: "small"
    }
}
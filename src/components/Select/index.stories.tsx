import type { Meta, StoryObj } from "@storybook/react"
import Select from "."

const meta: Meta<typeof Select> = {
    title: "Componentes/Select",
    component: Select,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        native: false,
        data: ["Hola", "Hola2"],
        onChange<T>(value: T) {
            console.log(value);
        }
    }
}
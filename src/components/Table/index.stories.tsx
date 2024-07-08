import type { Meta, StoryObj } from "@storybook/react"
import Table from "."

const meta: Meta<typeof Table> = {
    title: "Componentes/Table",
    component: Table,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: undefined,
        className: undefined,
        caption: undefined,
        native: false,
        data: [
            {
                EXAMPLE: "Ejemplo",
                XD: "Risa",
                NewFill: 1
            },
            {
                EXAMPLE: "Tristesa",
                XD: "Felicidaddhasgdhjasgjdfshdhfjsdgfhjgsdj",
                NewFill: 2
            },
            {
                EXAMPLE: "Tristesa",
                XD: "Felicidad",
                NewFill: 3
            }
        ]
    }
}
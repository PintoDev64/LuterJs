import type { Meta, StoryObj } from "@storybook/react"
import Table from "."
import THead from "./components/thead"

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
        children: <THead />
    }
}
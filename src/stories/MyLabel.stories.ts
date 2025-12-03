import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
    size: "normal",
  },
};

export const Secondary: Story = {
  args: {
    color: "text-secondary",
    label: "Secondary label",
  },
};

export const CustomColor: Story = {
  args: {
    fontColor: "#333",
    label: "Custom color label",
  },
};

export const CustomBackground: Story = {
  args: {
    label: "Custom background label",
    fontColor: "white",
    backgroundColor: "#333",
  },
};

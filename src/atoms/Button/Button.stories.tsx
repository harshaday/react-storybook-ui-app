// Component
import Button, { ButtonProps } from "atoms/Button/Button";

// Definitions
import { Story, Meta } from "@storybook/react";


// Template for component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Different versions
export const Primary = Template.bind({});
Primary.args = {
	text: "Click me",
	onClick: () => {},
	invertColors: false
};

// Storybook
const ButtonStorybook: Meta = {
	title: "Atoms/Button",
	component: Button
};

// Export
export default ButtonStorybook;

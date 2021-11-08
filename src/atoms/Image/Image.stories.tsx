import React from "react";
import { ComponentStory, ComponentMeta, Meta } from "@storybook/react";

import StoryImage from "./Image";
// import { Icon } from '../Icon/Icon';

const ImageStory: Meta = {
  title: "Atoms/Image",
  component: StoryImage,
};

// Export

export default ImageStory;

const Template: ComponentStory<typeof StoryImage> = (args: any) => (
  <StoryImage {...args} />
);

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  url: "https://source.unsplash.com/collection/190727/300x300",
  width: "300",
  height: "200",
};

import React from "react";

import { ComponentStory, Meta } from "@storybook/react";
import StoryCard from "./Card";

const CardStory: Meta = {
  title: "Molecules/Card",
  component: StoryCard,
};

// Export

export default CardStory;

const Template: ComponentStory<typeof StoryCard> = (args) => (
  <StoryCard {...args} />
);

export const SkyPackage = Template.bind({});
SkyPackage.args = {
  imageUrl: "https://source.unsplash.com/collection/190727/700x400",
  title: "Entertainment",
  buttonText: "Delete Post",
  cardType: "SimpleCard",
  width: "280px",
  height: "330px",
};

export const CardInDetail = Template.bind({});
CardInDetail.args = {
  imageUrl: "https://source.unsplash.com/collection/190727/700x400",
  title: "Entertainment",
  cardBody: [
    "Exclusive top series from Sky and HBO",
    "Large selection of complete series and documentation available on demand at any time",
    "New Sky Originals every month",
  ],
  cardType: "cardInDetail",
  buttonText: "Back to Sky Packages",
};

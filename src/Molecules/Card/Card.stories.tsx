import React from 'react';

import { ComponentStory,Meta } from '@storybook/react'
 import StoryCard from './Card'

const CardStory: Meta = {
    title: "Molecules/Card",
    component: StoryCard,
    argTypes:{
        onclick:{action: 'clicked'}
    }
  };
  
  // Export
  
  export default CardStory;

  const Template: ComponentStory<typeof StoryCard> = (args) => <StoryCard {...args} />;

export const PostsCard = Template.bind({});
PostsCard.args = {
    imageUrl: 'https://source.unsplash.com/collection/190727/700x400',
    title:'qui est esse',
    buttonText:'Delete Post',
    cardType:'postsCard'
};

export const PostsDetail = Template.bind({});
PostsDetail.args = {
    imageUrl: 'https://source.unsplash.com/collection/190727/700x400',
    title:'qui est esse',
    cardBody:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    cardType:'postDetail'
};
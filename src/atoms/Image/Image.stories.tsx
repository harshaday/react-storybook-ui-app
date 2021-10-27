import React from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';

import Image from './Image';
// import { Icon } from '../Icon/Icon';

const ImageStory: Meta = {
  title: "Atoms/Image",
  component: Image
};

// Export

export default ImageStory;

const Template: ComponentStory<typeof Image> = (args:any) => <Image {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
    url: 'https://source.unsplash.com/collection/190727/300x300',
    width:'300',
    height: '200'
};

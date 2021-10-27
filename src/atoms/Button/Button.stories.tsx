import React from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';

import Button from './Button';
// import { Icon } from '../Icon/Icon';

const ButtonStorybook: Meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes:{
    onclick:{action: 'clicked'}
}
};

// Export

export default ButtonStorybook;

const Template: ComponentStory<typeof Button> = (args:any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  onClick: () => {
    console.log("click");
    
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  label:' Please wait',
  stateModifier: 'loading'
}

export const PostsButton = Template.bind({});
PostsButton.args = {
  label:'See All Posts',
  backgroundColor: '#e94c5b',
  color: '#fff',
}
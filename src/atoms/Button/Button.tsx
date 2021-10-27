import React from 'react';
// import { Icon } from '../Icon/Icon';
import { StorybookButton } from './Button.styled';
// import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  color?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;

  stateModifier?:string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  stateModifier,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <StorybookButton
      type="button"
      data-testid="storyButton"
      className={[`storybook-button--${size}`, mode,`storybook-button--${stateModifier}`].join(' ')}
      style={{ backgroundColor,color }}
      {...props}
    >
      {/* {
      stateModifier==='loading' && <Icon data-testid="storyIcon" iconName="fa-circle-notch" size="lg" animation="pulse" />} */}
      {label}
    </StorybookButton>
  );
};

export default Button;
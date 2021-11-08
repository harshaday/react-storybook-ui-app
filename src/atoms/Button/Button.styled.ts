import styled from "styled-components";

export const StorybookButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  /* margin-bottom: 2px; */

  &.storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
  &.storybook-button--loading {
    background-color: #38b34c;
    color: white;
  }
`;

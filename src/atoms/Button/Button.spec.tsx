import {  render, screen } from "@testing-library/react";

import { LoadingButton, Primary, Secondary } from './Button.stories';
import Button from './Button';

describe("Button story",()=> {
    it("rendered Button",() => {
        const { getByTestId } = render(<Button label="Button" />);
        const button = getByTestId("storyButton");
        expect(button).toBeTruthy();
    });

    it("rendering primary button",() => {
        render(<Primary label="Button" {...Primary.args} />);
        expect(screen.getByRole("button")).toHaveTextContent("Button");
    });

    it("rendering secondary button",() => {
        render(<Secondary label="Button" {...Secondary.args} />);
        expect(screen.getByRole("button")).toHaveTextContent("Button");
    });

    it("rendering loading button",() => {
        // render(<LoadingButton {...LoadingButton.args} />);
        // expect(screen.getByRole("button")).toHaveTextContent("Please wait");
        const { getByTestId } = render(<LoadingButton label=" Please wait" {...LoadingButton.args} />);
        const loadingButton = getByTestId("storyButton");
        const storyIcon = getByTestId('storyIcon');
        expect(loadingButton).toContainElement(storyIcon);
    })
})
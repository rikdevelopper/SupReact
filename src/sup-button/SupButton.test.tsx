import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SupButton from "./SupButton";

describe('Frontend testing exo 1', () => {

    test('should call mock function on click', () => {
        const handleClick = jest.fn(() => console.log('Test click!'));
        const btnTxt = 'Click Me!';
        render(<SupButton onBtnClick={handleClick} text={btnTxt}/>);
        const button = screen.getByTestId('testBtn');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('Should display text passed', () => {
        const handleClick = jest.fn();
        const btnTxt = 'Click Me!';
        render(<SupButton onBtnClick={handleClick} text={btnTxt}/>);
        const button = screen.getByText(/Click Me!/i);
        expect(button).toBeInTheDocument();
    });
});


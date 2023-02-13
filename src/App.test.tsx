import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('should render button', () => {
    render(<App/>);
    const button = screen.getByTestId('testBtn');
    expect(button).toBeInTheDocument();
});

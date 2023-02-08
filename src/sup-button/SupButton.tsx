import React from 'react';

interface ButtonProperties {
    text: string;
    onBtnClick: () => void;
}

function SupButton({onBtnClick, text}: ButtonProperties): JSX.Element {
    return (<button onClick={onBtnClick} data-testid="testBtn">{text}</button>);
}

export default SupButton;

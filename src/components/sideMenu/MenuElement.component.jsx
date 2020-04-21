import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img `
    height:24px;
    width:48px;
    margin: 0px 20px 0px 20px;
`;

const SpanStyle = styled.span `
    font-size: large;
    font-weight: bold;
`;

const DivStyle = styled.div `
    width: 99%;
    height: 48px;
    background-color: ${props => props.active ? props.theme.colors.forestGreen : 'transparent'};
    border-radius: 0 24px 24px 0;
    margin: 10px 0px;
    outline: none;

    display: flex;
    flex-direction: row;
    align-items: center;

    :hover, :focus {
        background-color: ${props => props.active ? props.theme.colors.forestGreen : props.theme.colors.highlight};
    }
`;

function MenuElement({options, active, index, handler}) {
    const {image, text,} = options;
    return (
        <DivStyle active={active} tabIndex='0' onClick={handler(index)}>
            <ImageStyle src={image}/>
            <SpanStyle> {text}  </SpanStyle>
        </DivStyle>
    );
}

export default MenuElement;
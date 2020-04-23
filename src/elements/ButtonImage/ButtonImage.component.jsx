import React from 'react';
import styled from 'styled-components';

const ButtonStyle =  styled.button `
    margin: ${props => props.margin};
    height: ${props => props.size};
    width: ${props => props.size};
    background: transparent;
    border: none;
    border-radius: 50%;
    outline: none;
    font-size: 22px;
    color: ${props => props.theme.colors.capeCod};

    :hover, :focus {
        background-color: ${props => props.theme.colors.highlight};
    }
`;

const ImageStyle = styled.img `
    height:24px;
    width:24px;
`;

function ButtonImage ({altText, imageRoute, handdler, size, margin}) {
    return (
    <ButtonStyle onClick={handdler} size={size} margin={margin}>
        <ImageStyle src={imageRoute} alt={altText}/>
    </ButtonStyle>
    );
}

export default ButtonImage;

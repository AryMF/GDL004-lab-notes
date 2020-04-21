import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import SearchBar from './SearchBar.component.js';

const HeaderStyle = styled.header `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 64px;
    border-bottom: 1px solid ${props => props.theme.colors.highlight};
    display: flex;
    flex-direction: row !important;
    align-items: center;
`;

const DivStyle = styled.div `
    display: flex;
    flex: ${props => props.Flex};
    flex-direction: ${props => props.Direction};
    justify-content: ${props => props.Justify};
    align-items: ${props => props.Align};
`;

const ImageStyle = styled.img `
    height:44px;
    width:44px;
    margin: 0px 10px;
`;

const H3Style = styled.h3 `
    margin: 0px 5px;
`;

function HeaderBar(params) {
    return (
        <HeaderStyle>
            <DivStyle Flex='1' Direction='row' Justify='flex-start' Align='center'>
                <ButtonImage 
                    altText='Sample'
                    imageRoute={require('../../assets/icons/burguerMenu.svg')}
                    handdler={() => {alert('Hacer algo.')}}
                    size='46px'
                    margin='0px 15px'
                />
                <ImageStyle src={require('../../assets/images/logoicon.ico')}/>
                <H3Style> memento </H3Style>
            </DivStyle>
            <SearchBar/>
            <DivStyle Flex='1' Direction='row' Justify='flex-end' Align='center'>
                <ButtonImage 
                    altText='Sample'
                    imageRoute={require('../../assets/icons/reload.svg')}
                    handdler={() => {alert('Hacer algo.')}}
                    size='46px'
                    margin='0px 10px'
                />
                <ButtonImage 
                    altText='Sample'
                    imageRoute={require('../../assets/icons/grid.svg')}
                    handdler={() => {alert('Hacer algo.')}}
                    size='46px'
                    margin='0px 10px'
                />
                <ButtonImage 
                    altText='Sample'
                    imageRoute={require('../../assets/icons/config.svg')}
                    handdler={() => {alert('Hacer algo.')}}
                    size='46px'
                    margin='0px 10px'
                />
                <ButtonImage 
                    altText='Sample'
                    imageRoute={require('../../assets/images/avatar.png')}
                    handdler={() => {alert('Hacer algo.')}}
                    size='46px'
                    margin='0px 10px'
                />
            </DivStyle>
        </HeaderStyle>
    );
} 

export default HeaderBar;
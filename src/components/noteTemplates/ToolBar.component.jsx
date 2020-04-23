import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../../../elements/ButtonImage/ButtonImage.component';

const ToolBarStyle = styled.div `
    background-color: transparent;
    width: calc( 100% - 1px);
    height: 48px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: center;
`;

function ToolBar({toolBarDisplay, toolBarButtons}){
    //const { options, archive, image, edit } = toolBarButtons;
    return (
        <ToolBarStyle>
            <ButtonImage 
                altText='Options'
                imageRoute={require('../../../assets/icons/options.svg')}
                handdler={() => {alert('Hacer algo.')}}
                size='40px'
                margin='0px 5px'
            />
            <ButtonImage 
                altText='Archive'
                imageRoute={require('../../../assets/icons/archive.svg')}
                handdler={() => {alert('Hacer algo.')}}
                size='40px'
                margin='0px 5px'
            />
            <ButtonImage 
                altText='Add image'
                imageRoute={require('../../../assets/icons/image.svg')}
                handdler={() => {alert('Hacer algo.')}}
                size='40px'
                margin='0px 5px'
            />
            <ButtonImage 
                altText='Change color'
                imageRoute={require('../../../assets/icons/edit.svg')}
                handdler={() => {alert('Hacer algo.')}}
                size='40px'
                margin='0px 5px'
            />
        </ToolBarStyle>
    );
}

export default ToolBar;
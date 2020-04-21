import styled from 'styled-components';

export default styled.p `
    margin: 0px;
    
    :before {
        content: '';
        display: inline-block;
        width: 120px;
        height: 1px;
        background: ${props => props.theme.colors.capeCod};
        position: relative;
        letf: 0;
        top: 0%;
    }

    :after {
        content: '';
        display: inline-block;
        width: 120px;
        height: 1px;
        background: ${props => props.theme.colors.capeCod};
        position: relative;
        letf: 0;
        top: 0px;
    }
`;
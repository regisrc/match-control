import styled from 'styled-components';

interface IIconContainerColorControl {
    color: string;
    active: boolean;
}

export const Container = styled.div<IIconContainerColorControl>`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.active ? props.color : props.theme.colors.primaryWhite};  
    border-radius: 50%;

    :hover { 
        cursor: pointer;
        opacity: 90%;
    }
`;

export const Icon = styled.img`
    height: 32px;    
`
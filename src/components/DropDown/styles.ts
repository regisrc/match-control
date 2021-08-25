import styled from 'styled-components';

interface IDropDown {
    height: string;
    isActive: boolean;
}

export const Container = styled.div<IDropDown>`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primaryDark};

    width: 95%;
    height: ${props => props.height};

    padding: 20px;
    margin-bottom: ${props => props.isActive ? "0px" : "10px"};

    cursor: pointer;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.img`
    height: 32px;    

    @media (max-width: 720px) {
        height: 24px;
    }
`

interface IContentEnabled {
    isActive: boolean;
}

export const Content = styled.div<IContentEnabled>`  
    display: ${props => props.isActive ? "flex" : "none"};
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primaryGray};
    padding: 10px;

    width: 95%;
    margin-bottom: 10px;
`;
import styled from 'styled-components';

interface ICompleteDivControl {
    width: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row; 

    align-items: center;
    justify-content: space-between;

    height: 60px;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    padding: 5px;

    background-color: ${props => props.theme.colors.primaryDark};
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.primaryWhite}
`;

export const CompleteDiv = styled.div<ICompleteDivControl>`
    width: ${props => props.width};

    @media (max-width: 720px) {
        width: 0px;
    }
`;
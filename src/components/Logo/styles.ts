import styled from 'styled-components';

export const LogoImage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 0;
    opacity: 70%;

    :hover {
        opacity: 100%;
    }
`;
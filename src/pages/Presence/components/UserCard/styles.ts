import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primaryDark};
  width: 100%;
  height: 64px;

  padding: 10px;
`;

export const PhotoArea = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    img + div {
        margin: 0px 15px;
    }
`;

export const Photo = styled.img`
    border-radius: 50%;

    height: 48px;
`;

export const NameArea = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center; 
`;

export const Name = styled.p`
    color: ${props => props.theme.colors.primaryYellow};
`;

export const ControlArea = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    div {
        margin: 0px 15px;
    }
`;
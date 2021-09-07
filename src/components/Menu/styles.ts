import styled from 'styled-components';

export const Container = styled.div`
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  position: fixed;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 120px;
  height: 38px;
  margin: 10px 0px;
  border-radius: 3px;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryYellow};
  color: ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;

  :hover {
    opacity: 90%;
  }

  :disabled {
    cursor: default;
    opacity: 100%;
    background-color: ${(props) => props.theme.colors.primaryGray};
  }
`;  
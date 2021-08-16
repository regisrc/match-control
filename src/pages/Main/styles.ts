import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 60px;
  padding: 20px 0px;

  align-items: center;
  justify-content: center;

  div + div {
      margin: 5px 0px;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 38px;
  margin: 10px 0px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryGreen};
  color: ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;

  :hover {
    opacity: 90%;
  }
`;
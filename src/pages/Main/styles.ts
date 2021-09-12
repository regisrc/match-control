import styled from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';

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
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

  :hover {
    opacity: 90%;
  }

  :disabled {
    cursor: default;
    opacity: 100%;
    background-color: ${(props) => props.theme.colors.primaryGray};
  }
`;

export const MaterialButton = styled(ButtonMaterial)`
  :hover {
    && {
      border-color: rgba(255, 255, 255, 0.8); 
    }

    .MuiButton-label { 
      color: rgba(255, 255, 255, 0.8);
    }
  }

  && {
    border-color: rgba(255, 255, 255, 1);
  }

  .MuiButton-label { 
    color: rgba(255, 255, 255, 1);
  }
`;
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import { lighten } from "polished"

export const StaticButtonContainer = styled.div`
  transform: translate(50%, -50%);
  top: 90%;
  right: 10%;
  position: fixed;

  @media (max-width: 720px) {
    top: 90%;
    right: 20%;
  }
`

export const FabButton = styled(Fab)`
  && {
    background-color: ${props => props.theme.colors.primaryYellow};
    border-radius: 50%;
    color: ${props => props.theme.colors.primaryDark};

    :hover {
      background-color: ${props => lighten(0.2, props.theme.colors.primaryYellow)}
    }
  }
`
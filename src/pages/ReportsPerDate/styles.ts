import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 60px;
  padding: 20px 0px;

  align-items: center;
  justify-content: center;
`;

export const ExpansionPanelStyled = styled(Accordion)`
  width: 95%;

  .MuiAccordionSummary-root {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

export const ExpansionPanelSummaryStyled = styled(AccordionSummary)`
`;

export const ExpansionPanelDetailsStyled = styled(AccordionDetails)`
  background-color: ${props => props.theme.colors.primaryGray}
`;

export const ExpandMoreIconStyled = styled(ExpandMoreIcon)`
  color: ${props => props.theme.colors.primaryYellow}
`;
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 80px;
  padding: 20px;

  

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  align-items: baseline;

  flex-wrap: wrap;

  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 60px;
  margin: 10px;
  border: 1px solid ${(props) => darken(0.23, props.theme.colors.primaryYellow)};
  background-color: ${(props) => props.theme.colors.primaryYellow};
  cursor: pointer;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

  :hover {
    background-color: ${(props) => lighten(0.05, props.theme.colors.primaryYellow)};
  }

  @media (max-width: 720px) {
    width: 95%;
  }
`;

export const Icon : OverridableComponent<SvgIconTypeMap> = styled(SvgIcon)`
  color: ${(props) => props.theme.colors.primaryDark};

  && {
    width: 32px;
    height: 32px;
    size: 32px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: normal;

  margin-left: 5px;
`;
import styled from 'styled-components';
import { lighten } from 'polished';
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primaryDark};
  width: 95%;
  height: 64px;
  padding: 0px 10px;

  :hover {
    background-color: ${props => lighten(0.1, props.theme.colors.primaryDark)};
    cursor: pointer;
  }
`;

export const PhotoArea = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 100%;

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

export const IconBlockArea = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center; 
`;

export const Icon : OverridableComponent<SvgIconTypeMap> = styled(SvgIcon)`
  color: ${(props) => props.theme.colors.primaryYellow};

  && {
    width: 32px;
    height: 32px;
    size: 32px;

    :hover {
        color: ${props => lighten(0.1, props.theme.colors.primaryYellow)};
    }
  }
`;
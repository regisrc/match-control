import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
`;

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const NameArea = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center; 

    p + b { 
      margin: 0px 5px;
    }
`;

export const Value = styled.p`
    color: ${props => props.theme.colors.primaryYellow};
`;

interface IIconColor {
  color: string;
}

export const IconContainer = styled.div<IIconColor>`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.color};  
    border-radius: 50%;

    :hover { 
        cursor: pointer;
        opacity: 90%;
    }
`;

export const Icon = styled.img`
    height: 32px;    

    @media (max-width: 720px) {
        height: 24px;
    }
`

export const Line = styled.hr`
  margin: 8px 0px;
  opacity: 10%;
`;

export const LineDiv = styled.div`
  width: 100%;
`;

interface IConquestAreaProp {
  color: string;
}

export const ConquestArea = styled.div<IConquestAreaProp>`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center; 

    width: 100%;
    height: 24px;

    border-radius: 10px;

    background-color: ${props => props.color};

    box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.2),
        inset 0 -2px 1px rgba(0, 0, 0, 0.2);
`;

const shift = keyframes`
  to {
    background-position: 60px 100%;
  }
`;

interface INextAreaProp {
  color: string;
  size: string;
}

export const NextArea = styled.div<INextAreaProp>`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center; 

    width: ${props => props.size};
    height: 24px;
    
    border-radius: 10px;

    background-color: ${props => props.color};

    transform: scale(1);
    transition: 0.8s;

    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(
        45deg,
        transparent 25%,
        ${props => lighten(0.1, props.color)} 25%,
        ${props => lighten(0.1, props.color)} 30%,
        transparent 30%,
        transparent 35%,
        ${props => lighten(0.1, props.color)} 35%,
        ${props => lighten(0.1, props.color)} 70%,
        transparent 70%
      );
      animation: ${shift} 2s linear infinite;
      background-size: 60px 100%;
      box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.2),
        inset 0 -2px 1px rgba(0, 0, 0, 0.2);
      }
`;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center; 

    width: 100%;
`;

export const ProgressTitle = styled.h3`
font-weight: normal;
`
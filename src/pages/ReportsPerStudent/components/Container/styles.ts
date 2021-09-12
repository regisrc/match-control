import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 10px 0px;

  align-items: center;
  justify-content: center;
`;

export const NameArea = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center; 
`;

export const UserArea = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center; 

    margin-left: 10px;
`;

interface IConquestAreaProp {
  color: string;
}

export const ConquestArea = styled.div<IConquestAreaProp>`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center; 

    width: 170px;
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

export const Value = styled.p`
    color: ${props => props.theme.colors.primaryYellow};
`;

interface IReportsPerStudents {
  backgroundColor: string;
}

export const PhotoNicknameContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 70px;
`;

export const PhotoContainer = styled.div<IReportsPerStudents>`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    height: 64px;
    width: 64px;

    background-color: ${props => props.backgroundColor};
`;

export const Photo = styled.img`
    border-radius: 50%;

    height: 48px;
    width: 48px;

    object-fit: cover;
`;

export const Bold = styled.b`
  margin: 0px 5px;
`;

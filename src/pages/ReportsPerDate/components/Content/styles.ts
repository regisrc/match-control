import styled from 'styled-components';

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
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primaryYellow};
  padding: 10px;
  border-radius: 5px;

  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.primaryDark}
`

export const Date = styled.p`
  color: ${props => props.theme.colors.primaryDark}
`
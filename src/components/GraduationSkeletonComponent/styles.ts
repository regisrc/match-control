import styled from "styled-components";

export const ContainerWrapper = styled.div`
  margin-top: 100px;

  display: flex;
  
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const Container = styled.div`
  height: 55px;
  width: 100%;

  display: flex;

  justify-content: space-around;
  align-items: center;
  
  @media(max-width: 800px) {
    height: auto;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;

  height: 100%;

  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  padding: 10px;

  background-color: white;

  margin-bottom: 10px;

  width: 150px;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
    color: ${(props) => props.theme.colors.primaryDark};
`;

export const InfoContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  height: 100%;

  @media(max-width: 800px) {
    width: 100%;
  }

  margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};

  width: 100%;
  height: 100%;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const InfoValuesContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  height: 100%;

  display: flex;

  background-color: ${(props) => props.color};

  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.h4`
    color: ${(props) => props.theme.colors.primaryDark};
`;

export const InfoValue = styled.h4`
    color: ${(props) => props.theme.colors.primaryDark};
`;

export const ObsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 200px;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const ObsValuesContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  margin-bottom: 1px;
  width: 100%;

  background-color: ${(props) => props.color};

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const ObsTitle = styled.h4`
    color: ${(props) => props.theme.colors.primaryDark};
`;

export const ObsValue = styled.h4`
    color: ${(props) => props.theme.colors.primaryDark};
`;

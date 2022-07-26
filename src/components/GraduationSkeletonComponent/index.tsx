import {
  Container,
  TitleContainer,
  Title,
  InfoContainer,
  InfoWrapper,
  InfoValuesContainer,
  InfoTitle,
  InfoValue,
  ObsValuesContainer,
  ObsWrapper,
  ObsTitle,
  ObsValue,
  ContainerWrapper,
} from "./styles";

const GraduationSkeletonComponent = (data: any) => {
  return (
    <ContainerWrapper>
      <Container>
        <TitleContainer>
          <Title>Nome:</Title>
        </TitleContainer>
        <InfoContainer>
          <InfoWrapper>
            <InfoValuesContainer>
              <InfoTitle>{data?.data?.data.student.name}</InfoTitle>
            </InfoValuesContainer>
          </InfoWrapper>
        </InfoContainer>
        <InfoContainer>
          <InfoWrapper>
            <InfoValuesContainer>
              <InfoTitle>Adulto</InfoTitle>
            </InfoValuesContainer>
          </InfoWrapper>
        </InfoContainer>
        <InfoContainer>
          <InfoWrapper>
            <InfoValuesContainer>
              <InfoTitle>Mais infos...</InfoTitle>
            </InfoValuesContainer>
          </InfoWrapper>
        </InfoContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default GraduationSkeletonComponent;

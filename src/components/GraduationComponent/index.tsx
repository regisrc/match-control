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

const GraduationComponent = (data: any) => {
  console.table(data)

  const selectColor = (color: any) => {
    if (color === "Branca") return "#FFF";
    if (color === "Azul") return "#1890ba";
  }

  return (
    <ContainerWrapper>
      
      {data?.data?.data?.entries?.map((values: any, index: number) => (
        <Container>
          <TitleContainer color={selectColor(values.belt)}>
            <Title>{values.belt}</Title>
          </TitleContainer>
          <InfoContainer>
              <InfoWrapper >
                <InfoValuesContainer color={selectColor(values.belt)}>
                  <InfoTitle>{"Grau"}</InfoTitle>
                </InfoValuesContainer>
                <InfoValuesContainer color={selectColor(values.belt)}>
                  <InfoValue>{values.degree}</InfoValue>
                </InfoValuesContainer>
              </InfoWrapper>
          </InfoContainer>
          <InfoContainer>
              <InfoWrapper>
                <InfoValuesContainer color={selectColor(values.belt)}>
                  <InfoTitle>{"Data"}</InfoTitle>
                </InfoValuesContainer>
                <InfoValuesContainer color={selectColor(values.belt)}>
                  <InfoValue>{"2022-02-02"}</InfoValue>
                </InfoValuesContainer>
              </InfoWrapper>
          </InfoContainer>
          <InfoContainer>
            <ObsWrapper>
              <ObsValuesContainer color={selectColor(values.belt)}>
                <ObsTitle>{"Observação"}</ObsTitle>
              </ObsValuesContainer>
              <ObsValuesContainer color={selectColor(values.belt)}>
                <ObsValue>{data?.data?.data?.observations}</ObsValue>
              </ObsValuesContainer>
            </ObsWrapper>
          </InfoContainer>
        </Container>
      ))}
    </ContainerWrapper>
  );
};

export default GraduationComponent;

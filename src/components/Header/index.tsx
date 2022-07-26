import { Container, TitleDiv, Title, UserName, CompleteDiv } from "./styles";

import ReturnButton from "../ReturnButton";
import Image from "../../assets/logo-vo2.png";

import { IHeaderSettings } from "../../models/interfaces";

const Header = ({ title, isReturnActive, path }: IHeaderSettings) => {
  const userName = JSON.parse(sessionStorage.getItem('oidc.user:https://app.thematchcontrol.com.br:8443/realms/tmc/.well-known/openid-configuration:tmc-app-client') ?? "{}").profile.name;

  return (
    <Container>
      {isReturnActive ? (
        <ReturnButton path={path} />
      ) : (
        <CompleteDiv width="59px" />
      )}
      <TitleDiv>
        <Title>{title}</Title>
        <UserName>{userName}</UserName>
      </TitleDiv>
      <CompleteDiv width="59px" />
    </Container>
  );
};

export default Header;

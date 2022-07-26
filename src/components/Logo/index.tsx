import { LogoImage } from "./styles";
import Logo1 from "../../assets/logo-vo2.png";
import Tenant3 from "../../assets/tenant3.png";
import Tenant4 from "../../assets/tenant4.jpeg";
import Tenant5 from "../../assets/tenant5.png";
import Tenant6 from "../../assets/tenant6.png";
import Tenant7 from "../../assets/tenant7.jpeg";
import Tenant8 from "../../assets/tenant8.png";
import Tenant9 from "../../assets/tenant9.png";
import Tenant11 from "../../assets/tenant11.jpeg";
import Tenant14 from "../../assets/tenant14.jpeg";

const Logo = () => {
  const tenant = JSON.parse(sessionStorage.getItem('oidc.user:https://app.thematchcontrol.com.br:8443/realms/tmc/.well-known/openid-configuration:tmc-app-client') ?? "{}").profile.tenant;
  var logoControl = [
    {
      "src": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Logo1,
      "width": "64px",
      "height": "34.6px"
    },
    {
      "src": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant3,
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant4,
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant5,
      "width": "62px",
      "height": "64px"
    },
    {
      "src": Tenant6,
      "width": "56px",
      "height": "64px"
    },
    {
      "src": Tenant7,
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant8,
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant9,
      "width": "164px",
      "height": "48px"
    },
    {
      "src": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant11,
      "width": "73px",
      "height": "83px"
    },
    {
      "src": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
      "width": "64px",
      "height": "64px"
    },
    {
      "src": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
      "width": "64px",
      "height": "64px"
    },
    {
      "src": Tenant14,
      "width": "64px",
      "height": "64px"
    },
  ]

  return (
    <div>
      <LogoImage width={logoControl[tenant]?.width} height={logoControl[tenant]?.height} src={logoControl[tenant]?.src}/>
    </div>
  );
};

export default Logo;

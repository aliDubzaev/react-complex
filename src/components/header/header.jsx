import "./header.css";
import headerLogo from "./img/header-logo1.png";

function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <img src={headerLogo} alt="Логотип" className="logo" />
        <div className="partnerText">
          <div>Официальный партнер</div>
          <div>АО «КККК»</div>
        </div>
      </div>
      <div className="headerRight">
        <div className="phone">+7 495 845 19 34</div>
        <div className="workTime">· работаем</div>
      </div>
    </header>
  );
}

export default Header;

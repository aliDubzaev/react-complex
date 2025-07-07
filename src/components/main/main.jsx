import "./main.css";
import mainLogo from "./img/main-logo.png";
import mainImg from './img/main1.png';
import mainAward from './img/main-award.svg';


function Main() {
  return (
    <section className="main">
      <div className="mainLogo">
        <img src={mainLogo} alt="Логотип" />
      </div>
      <div className="mainText">
        <h1>Жить в зелёном оазисе в статусном районе Москвы</h1>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
      </div>
      <div className="mainImage">
        <img src={mainImg} alt="Жилой комплекс" />
        <div className="rightUp">
          <div className="mainAward">
            <img src={mainAward} alt="Победитель" />
          </div>
          <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <div className="centerBottom">
          <div className="queue">1 очередь <span>2022</span></div>
          <div className="queue">1 очередь <span>2023</span></div>
        </div>
      </div>
    </section>
  );
}

export default Main;

import "./features.css";
import oneGrid from "./img/features_1.png";
import twoGrid from "./img/features_2.png";
import threeGrid from "./img/features_3.png";
import fourGrid from "./img/features_4.png";

function Features () {
  return (
    <section className="features">
      <div className="photoGrid">
        <div className="photoCard">
          <img src={oneGrid} alt="20 гектаров" />
            <div className="textBlock">
              <h5>20 гектаров</h5>
              <p>территории ЖК - это как полтора Зарядья</p>
            </div>    
        </div>
        <div className="photoCard">
          <img src={twoGrid} alt="15 корпусов" />
            <div className="textBlock">
              <h5>15 корпусов</h5>
              <p>по 12-14 этажей, просторная застройка</p>
            </div>
        </div>
        <div className="photoCard">
          <img src={threeGrid} alt="Парк" />
            <div className="textBlock">
              <h5>7 гектаров</h5>
              <p>приватного парка для жителей ЖК</p> 
            </div>      
        </div>
        <div className="photoCard">
          <img src={fourGrid} alt="Набережная" />
            <div className="textBlock">
              <h5>2 километра</h5>
              <p>набережной реки Раменка вдоль ЖК</p> 
            </div>    
        </div>
      </div>
    </section>
  )
}

export default Features
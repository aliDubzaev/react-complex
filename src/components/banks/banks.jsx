import React from "react";
import "./banks.css";

import banks from "./img/logos.png";

function Banks() {
  return (
  <section className="bankSection">
    <h1>Самые выгодные условия <br /> кредитования от 20 банков</h1>
    <div>
      <img src={banks} alt="" />
    </div>
  </section>
  )
}

export default Banks;


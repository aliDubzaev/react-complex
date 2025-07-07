
import React from "react";
import Form from "./form";
import styles from "./Modal.module.css";

function ModalFlat({ headerText, closeModal }) {
  return (
    <div className={styles.modShadow} onClick={closeModal}>
      <div className={styles.modalContainer} 
      onClick={(e) => e.stopPropagation()}
      style={{ borderRadius: "12px" }}>
        <div className={styles.textContainer}
        style={{ borderRadius: "12px", maxWidth: "500px" }}>
          <h5>Узнайте стоимость {headerText}</h5>
          <p className={styles.textP}>
            Получите расчет ипотеки от нашего ипотечного брокера прямо сейчас</p>
          <hr />
          <Form buttonText="Узнать стоимость" />
        </div>
      </div>
    </div>

  )
}

export default ModalFlat;
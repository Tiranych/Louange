import React from "react";

import Box from "./Box";

import * as styles from './Slide.module.css';

const Slide = () => {
    return (
        <div className={styles.slide}>
            <Box index={1} text={"Кремль"} />
            <Box index={2} text={"Особняк на Рублево-Успенском шоссе"} />
            <Box index={3} text={"Вилла в Дубае"} />
            <Box index={4} text={"Дом в коттеджном поселке Миллениум"} />
            <Box index={5} text={"Офис на ул. Садовая"} />
            <Box index={6} text={"Салон красоты"} />
            <Box index={7} text={"Квартира на ул. Староволынская"} />
            <Box index={8} text={"Дом в коттеджном поселке Щелковское шоссе"} />
            <Box index={9} text={"Дом в коттеджном поселке Новоглоголево"} />
        </div>
    )
}

export default Slide;
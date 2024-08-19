import React from "react";

import Title from "../../../global/Title";
import ProjectSlider from './slider/ProjectSlider';

import * as styles from './ProjectsList.module.css';

const ProjectsList = () => {
    return (
        <section className={styles.section}>
            <Title>Проекты</Title>
            <p className={styles.text}>
                Наши проекты — это истории о преображении обычных пространств в уникальные выражения стиля и комфорта.
                Мы работаем с самыми разными стилями и предпочтениями, чтобы воплотить ваши мечты в реальность
            </p>
            <ProjectSlider />
        </section>
    )
}

export default ProjectsList;
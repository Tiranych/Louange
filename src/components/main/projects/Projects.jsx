import React from 'react';
import * as styles from './Projects.module.css';
import Container from '../../global/Container';
import Title from '../../global/Title';
import Button from '../../global/Button';
import ProjectsSwiper from './projectsSwiper/ProjectsSwiper';

const Projects = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title>Проекты</Title>
                <div className={styles.box}>
                    <p>
                        Наша команда превращает пространства в настоящие иконы стиля и уюта. 
                        Каждый проект уникален и имеет свою историю, с которой вы можете ознакомиться, прежде чем создать собственную.
                    </p>
                    <Button />
                </div>
                <ProjectsSwiper />
            </Container>
        </section>
    )
}

export default Projects;
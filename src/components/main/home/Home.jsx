import React from 'react';
import Container from '../../global/Container.jsx';
import ServiceList from './serviceList/ServiceList.jsx';
import WhyLouange from './whyLouange/WhyLouange.jsx';
import ProjectsList from './projectsList/ProjectsList.jsx';
import OtherProjects from './otherProjects/OtherProjects.jsx';
import Fabrics from './fabrics/Fabrics.jsx';
import ContactUs from '../../global/ContactUs.jsx';
import Partners from '../../global/partners/Partners.jsx';
import * as styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.section}>
            <Container>
                <ServiceList />
                <WhyLouange />
                <ProjectsList />
                <OtherProjects />
                <Fabrics />
                <ContactUs />
                <Partners />
            </Container>
        </section>
    )
}

export default Home;
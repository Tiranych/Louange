import React from 'react';
import Container from '../../global/Container';
import ServiceList from './serviceList/ServiceList';
import WhyLouange from './whyLouange/WhyLouange';
import ProjectsList from './projectsList/ProjectsList';
import OtherProjects from './otherProjects/OtherProjects';
import Fabrics from './fabrics/Fabrics';
import ContactUs from '../../global/ContactUs';
import Partners from '../../global/partners/Partners';
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
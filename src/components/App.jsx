import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as styles from './App.module.css';
import Footer from './footer/Footer.jsx';
import Container from './global/Container.jsx';
import Header from './header/Header.jsx';
import About from './main/about/About.jsx';
import Agreement from './main/agreement/Agreement.jsx';
import Catalog from './main/catalog/Catalog.jsx';
import Contacts from './main/contacts/Contacts.jsx';
import Home from './main/home/Home.jsx';
import Projects from './main/projects/Projects.jsx';
import Services from './main/services/Services.jsx';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header />
                <main className={styles.main}>
                    <Container>
                        <Routes>
                            <Route index element={<Home />}></Route>
                            <Route path='contacts' element={<Contacts />}></Route>
                            <Route path='catalog' element={<Catalog />}></Route>
                            <Route path='about' element={<About />}></Route>
                            <Route path='services' element={<Services />}></Route>
                            <Route path='projects' element={<Projects />}></Route>
                            <Route path='agreement' element={<Agreement />}></Route>
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as styles from './App.module.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import About from './components/main/about/About.jsx';
import Catalog from './components/main/catalog/Catalog.jsx';
import CatalogItem from './components/main/catalog/catalogItem/CatalogItem.jsx'
import Contacts from './components/main/contacts/Contacts.jsx';
import Home from './components/main/home/Home.jsx';
import Privacy from './components/main/privacy-policy/Privacy-policy.jsx';
import Projects from './components/main/projects/Projects.jsx';
import Project from './components/main/projects/project/Project.jsx';
import Services from './components/main/services/Services.jsx';
import WindowDecor from './components/main/services/window-decor/WindowDecor.jsx';
import Product from './components/main/catalog/catalogItem/product/Product.jsx';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path='contacts' element={<Contacts />}></Route>
                        <Route path='catalog' element={<Catalog />}></Route>
                        <Route path='catalog/entry' element={<CatalogItem />}></Route>
                        <Route path='catalog/entry/product' element={<Product />}></Route>
                        <Route path='about' element={<About />}></Route>
                        <Route path='services' element={<Services />}></Route>
                        <Route path='projects' element={<Projects />}></Route>
                        <Route path='projects/project' element={<Project />}></Route>
                        <Route path='privacy-policy' element={<Privacy />}></Route>
                        <Route path='services/window-decor' element={<WindowDecor />}></Route>
                        <Route path='services/upholstery' element={<WindowDecor />}></Route>
                        <Route path='services/bed-linen' element={<WindowDecor />}></Route>
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
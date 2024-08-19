import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";

import * as styles from './App.module.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/main/about/About';
import Catalog from './components/main/catalog/Catalog';
import CatalogItem from './components/main/catalog/catalogItem/CatalogItem'
import Contacts from './components/main/contacts/Contacts';
import Home from './components/main/home/Home';
import Privacy from './components/main/privacy-policy/Privacy-policy';
import Projects from './components/main/projects/Projects';
import Project from './components/main/projects/project/Project';
import Services from './components/main/services/Services';
import WindowDecor from './components/main/services/window-decor/WindowDecor';
import Product from './components/main/catalog/catalogItem/product/Product';

import {ROUTES} from './components/global/routes';

const App = () => {

    return (
        <>
            <HashRouter>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path={ROUTES.CONTACTS} element={<Contacts />}></Route>
                        <Route path={ROUTES.CATALOG} element={<Catalog />}></Route>
                        <Route path={ROUTES.ENTRY} element={<CatalogItem />}></Route>
                        <Route path={ROUTES.PRODUCT} element={<Product />}></Route>
                        <Route path={ROUTES.ABOUT} element={<About />}></Route>
                        <Route path={ROUTES.SERVICES} element={<Services />}></Route>
                        <Route path={ROUTES.PROJECTS} element={<Projects />}></Route>
                        <Route path={ROUTES.PROJECT} element={<Project />}></Route>
                        <Route path={ROUTES.PRIVACY_POLICY} element={<Privacy />}></Route>
                        <Route path={ROUTES.WINDOW_DECOR} element={<WindowDecor />}></Route>
                        <Route path={ROUTES.UPHOLSTERY} element={<WindowDecor />}></Route>
                        <Route path={ROUTES.BED_LINEN} element={<WindowDecor />}></Route>
                    </Routes>
                </main>
                <Footer />
            </HashRouter>
        </>
    )
}

export default App;
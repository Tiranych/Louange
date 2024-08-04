import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./components/global/styles/fonts.css";
import "./components/global/styles/reset.css";
import * as styles from './index.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className={styles.wrapper}>
        <App />
    </div>
);
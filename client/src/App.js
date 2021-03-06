import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
        </Router>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { AuthProvider } from './controller/Auth';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>, 
    document.getElementById('root')
);
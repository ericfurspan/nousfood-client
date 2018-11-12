import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './components/app';

// normal sync mode
ReactDOM.render(
    <Provider store={store}>
        <Router>  
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
/*
// concurrent(async) mode
ReactDOM.createRoot(document.getElementById('root'))
        .render(<Provider store={store}>
                <Router>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </Router>
                </Provider>)
*/
registerServiceWorker();




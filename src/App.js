import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import Router from "./components/Router";

const store = configureStore();

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                </Router>
               </Provider>

        );
    }
}



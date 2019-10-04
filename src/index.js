import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculadora';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculadora React - Diego Francisco</h1>
        <div className=".center">
            <Calculadora />
        </div>
    </div>
, document.getElementById('root'));

serviceWorker.unregister();

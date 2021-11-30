import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BrowserRouter from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById("root"));

/* ReactDOM.render(
    <Router basename='/react-tetris'>
        <Routes>
            <Route exact path='/' component={App} />
        </Routes>
    </Router>, 
    document.getElementById('root')
); */

ReactDOM.render((
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
 ),
 document.getElementById('root')
);
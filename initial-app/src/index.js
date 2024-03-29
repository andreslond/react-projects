import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './componentes/useState/Counter';
import ComplexCounter from './componentes/complexState/ComplexCounter';
import SimplerCounter from './componentes/arrayStates/SimplerCounter';
import RenderCollection from './componentes/renderCollections/RenderCollection';
import Wrapper from './componentes/renderCollections/Wrapper';
import { UserList } from './componentes/fetch&Filter/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SimplerCounter />
    <Wrapper />
    <UserList />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

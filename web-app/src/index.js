import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from '../src/pages/cadastro/Video';
import CadastroCategoria from '../src/pages/cadastro/Categoria';

function NotFound(){
  return(
    <div>Ops! 404!</div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> 
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />    
      <Route component={NotFound} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


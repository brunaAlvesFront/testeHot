import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import {Formulario, Lista, ListaGeral} from './Produtos';
import {FormLogin} from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// eslint-disable-next-line



const BasicExample = () => (
  <Router>
    <div>

      <nav className="navbar navbar-default headerPrincipal">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img src="./image/logo.png"/></a>
          </div>
          <ul className="nav navbar-nav">
           
        <li>
          <Link to="/MeusProdutos">Meus Produtos</Link>
        </li>
        <li>
          <Link to="/CadProdutos">Cadastro de produtos</Link>
        </li>
         <li>
          <Link to="/Produtos">Todos os Produtos</Link>
        </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={Login} />
      <Route path="/CadProdutos" component={CadProdutos} />
      <Route path="/MeusProdutos" component={MeusProdutos} />
      <Route path="/Produtos" component={Produtos} />
    </div>
  </Router>
);

const MeusProdutos = () => (
  <div>
    <Lista/>
  </div>
);

const Produtos = () => (
  <div>
    <ListaGeral/>
  </div>
);

const CadProdutos = () => (
  <div>
    <Formulario/>
  </div>
);

const Login = () => (
  <div>
     <FormLogin/>
  </div>
);

export default BasicExample;


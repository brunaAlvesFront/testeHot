import React, { Component } from 'react';

export class FormLogin extends Component {
  render() {
      return (
       
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center red bolder"><br/>LOGIN - Mercado Hotmart</h2>
            <h4 className="text-center black bolder">O melhor mercadinho do mundo  :<span className="red">D</span>&nbsp; ! </h4>
            <div className="wrapper">
              <form className="form-signin">       
                <h4 className="form-signin-heading">Entrar</h4>
                <input type="text" className="form-control loginform" name="username" placeholder="Usuário/E-mail" required="" autofocus="" />
                <input type="password" className="form-control loginform" name="password" placeholder="Senha" required=""/>      
               
                <button className="btn btn-lg btn-entrar btn-block" type="submit">Entrar</button>   
              </form>
            </div>
          </div>
        </div>
      </div>

      );
  }
}
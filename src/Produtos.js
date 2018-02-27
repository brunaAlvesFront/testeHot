import React, { Component } from 'react';
import $ from 'jquery';

const products = [

  {
    id: 1,
    name: 'Ipad',
    price: 200,
    descricao: 'Ipad 32GB PRATA'

  },

  {
  id: 2,
    name: 'Iphone',
    price: 480,
    descricao: 'Ipad 32GB DOURADO'
  },

  {
    id: 3,
    name: 'Mac',
    price: 1100,
    descricao: '4.0 Ubuntu'

  },

  {
  id: 4,
    name: 'Motorola G5',
    price: 780,
    descricao: '32GB PRETO'
  }

];
localStorage.setItem('products', JSON.stringify(products));



export class Formulario extends Component {


	enviaForm(evento) {
    evento.preventDefault();
    
  $.ajax({
      url:"https://api-frontendchallenge.buildstaging.com/",
      contentType:"application/json",
      dataType: "json",
      type:"post",
      data: JSON.stringify({}),
      success:function(resposta){
        console.log("Sucesso!");
      },
      error:function(resposta){
        console.log('Erro, tente novamente');
      }

    });
  }

	render() {
	    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center red bolder"><br/>Cadastro de Produtos - Mercado Hotmart</h2>
            <h4 className="text-center black bolder">O melhor mercadinho do mundo  :<span className="red">D</span>&nbsp; ! </h4>
            <div className="wrapper col-md-6 text-center">
              <form className="form-cadastro" onSubmit={this.enviaForm} method="post">       
                <input type="text" className="form-control loginform" name="name" placeholder="Nome do Produto" required="" autofocus="" />
                <input type="text" className="form-control loginform" name="descricao" placeholder="Descrição" required=""/>
                <input type="text" className="form-control loginform" name="Valor" placeholder="Valor" required=""/>    
                <button className="btn btn-lg btn-entrar btn-block" type="submit">Cadastrar</button>   
              </form>
            </div>
          </div>
        </div>
      </div>
	    	
	    );
	}

}

export class Lista extends Component {

  constructor (props) {
    super(props);

    this.state = {
      products: []
    };

  }

  onDelete() {
    const { onDelete, name } = this.props;
    this.props.onDelete(this.props.name)
  }

  componentWillMount() {
   this.getProducts();
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

   this.setState( { products});

  }



	render() {
	    return (
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center red bolder"><br/>Meus Produtos Hotmart</h2>
            <h4 className="text-center black bolder">O melhor mercadinho do mundo  :<span className="red">D</span>&nbsp; ! </h4>
            <div className="wrapper">
              <table className="table">
                <thead className="thead-inverse">
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>                 
                  

                   {
                      this.state.products.map(product => {
                        return (
                        <tr>
                          <th scope="row">{product.id}</th>
                          <td> {product.name} </td>
                          <td> {product.descricao} </td>
                          <td> {product.price} </td>
                           <td> <button>Deletar</button><button>Editar</button> </td>
                        </tr>

                        );
                      })
                    }
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        

        

	    );
	}
}


export class ListaGeral extends Component {

  constructor (props) {
    super(props);

    this.state = {
      products: []
    };

  }

  onDelete() {
    const { onDelete, name } = this.props;
    this.props.onDelete(this.props.name)
  }

  componentWillMount() {
   this.getProducts();
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

   this.setState( { products});

  }



  render() {
      return (
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center red bolder"><br/>Todos os Produtos Hotmart</h2>
            <h4 className="text-center black bolder">O melhor mercadinho do mundo  :<span className="red">D</span>&nbsp; ! </h4>
            <div className="wrapper">
              <table className="table">
                <thead className="thead-inverse">
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>                 
                  

                   {
                      this.state.products.map(product => {
                        return (
                        <tr>
                          <th scope="row">{product.id}</th>
                          <td> {product.name} </td>
                          <td> {product.descricao} </td>
                          <td> {product.price} </td>
                           <td> <button>Deletar</button><button>Editar</button> </td>
                        </tr>

                        );
                      })
                    }
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        

        

      );
  }
}
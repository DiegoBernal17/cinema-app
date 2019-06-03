import React, { Component } from "react";
import Error401 from "../../components/Error401";
import { connect } from "react-redux";
import Article from "../components/Article";

class Shop extends Component {
  state = {
    sections: [
      { name: "Palomitas", icon: "popcorns.png" },
      { name: "Bebidas", icon: "soda.png" },
      { name: "Nachos", icon: "nachos.png" },
      { name: "Hot dogs", icon: "hot-dog.png" },
      { name: "Postres", icon: "ice-cream.png" },
      { name: "Dulces", icon: "candy.png" }
    ],
    items: [],
    shoppingCart: [],
    viewShoppingCart: false
  };

  handleClick = i => {
    const items = [
      { name: "Palomitas grandes", icon: "popcorns.png" },
      { name: "Palomitas medianas", icon: "popcorns.png" }
    ];

    this.setState({ items });
  };

  resetItems = () => {
    this.setState({ items: [] });
  };

  addToShoppingCart = item => {
    this.state.shoppingCart.push(item);
  };

  viewShoppingCart = () => {
    this.setState({ viewShoppingCart: !this.state.viewShoppingCart });
  };

  render() {
    if (!this.props.user) {
      return <Error401 />;
    }

    if (this.state.viewShoppingCart) {
      return (
        <div className="container my-5">
          <h2 className="float-right">
            <div className="badge badge-dark" onClick={this.viewShoppingCart}>
              <i className="fas fa-chevron-left"> </i> REGRESAR
            </div>
          </h2>
          <h1>Tú carrito de compras</h1>
          <hr />
          <div className="row">
            {this.state.shoppingCart.map((item, i) => (
              <Article icon={item.icon} key={i}>
                {item.name}
              </Article>
            ))}
          </div>
          {this.state.shoppingCart.length > 0 && (
            <div className="btn btn-primary btn-lg float-right">
              {" "}
              <i className="fas fa-cash-register" /> Comprar
            </div>
          )}
        </div>
      );
    }

    if (this.state.items.length === 0) {
      return (
        <div className="container my-5">
          <div>
            <h1 className="float-right">
              <div
                className="badge badge-primary"
                onClick={this.viewShoppingCart}
              >
                <i className="fas fa-shopping-basket"> </i>{" "}
                {this.state.shoppingCart.length}
              </div>
            </h1>
            <h1>Dulcería</h1>
          </div>
          <hr />
          <div className="row">
            {this.state.sections.map((section, i) => (
              <Article
                icon={section.icon}
                onClick={() => this.handleClick(i)}
                key={i}
              >
                {section.name}
              </Article>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="container my-5">
        <div className="btn btn-dark" onClick={this.resetItems}>
          Regresar
        </div>
        <div className="row">
          {this.state.items.map((item, i) => (
            <Article
              icon={item.icon}
              key={i}
              onClick={() => {
                this.addToShoppingCart(item);
              }}
            >
              {item.name}
            </Article>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Shop);

"strict usage";

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//via class
class User {
  constructor() {
    this.firstname = "Birgit";
    this.lastname = "Sch";
  }

  greetingUser() {
    return "Hello " + this.firstname + " " + this.lastname;
  }
}

//choose AddElement1 and AddElement2 are the same
class AddElement1 extends React.Component {
  render() {
    return <div>add Element1 {this.props.name}</div>;
  }
}

//via JSON object definition
var product = {
  active: true,
  bezeichnung: "Fujitsu",
  price: 2200.99,
  stock: {
    place: "Innsbruck"
  },
  getData: function() {
    return this.bezeichnung + " " + this.price + " " + this.stock.place;
  }
};

function Header() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>This is my space for some React.js testing</h2>
    </div>
  );
}

function Greeting() {
  return (
    <ul>
      <li>{user.greetingUser() + " _ " + user.firstname}</li>
    </ul>
  );
}

function ProductData() {
  if (product.active) {
    return <div>{product.getData()}</div>;
  } else {
    return (
      <div>
        {product.active ? "Produkt vorhanden" : "kein Produkt vorhanden"}
      </div>
    );
  }
}

function AddElement2() {
  return (
    <div>
      <AddElement1 name="HP" />
      <AddElement1 name="Huawei" />
    </div>
  );
}
const user = new User();

const rootElement = document.getElementById("root");
const data = document.getElementById("data");
const productDetails = document.getElementById("productDetails");
const clock = document.getElementById("clock");
const addElement = document.getElementById("addElement");
const addElement2 = document.getElementById("addElement2");

ReactDOM.render(<Header />, rootElement);
ReactDOM.render(<Greeting />, data);
ReactDOM.render(<ProductData />, productDetails);

function tick() {
  const element = <div>{new Date().toLocaleTimeString()}</div>;
  ReactDOM.render(element, clock);
}
setInterval(tick, 1000);

//var addElementClass = <AddElement1 name='Lenovo' />
ReactDOM.render(<AddElement1 name="Lenovo" />, addElement);

ReactDOM.render(<AddElement2 />, addElement2);

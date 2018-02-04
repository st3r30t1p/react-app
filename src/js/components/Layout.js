import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import Title from "./Header/Title";
export default class Layout extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: props.data
    };
  }
  componentWillMount() {
    this.state.items.map(elem => {
      return elem.status = Math.random() >= 0.5;
    });
  }

  getAllItems() {
    console.log('getAll');
  }
  getOnlyCart() {
    console.log('getOnly');
  }

  render() {
    return (
    <div>
      <Header/>
      <Content dataItems={this.state.items}/>
      <Footer getAllItems={this.getAllItems.bind(this)} getOnlyCart={this.getOnlyCart.bind(this)} />
      </div>
      );
  }
}

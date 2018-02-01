import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import Title from "./Header/Title";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      arr: ['Milk 1l', 
      'Eggs Medium 12 pack', 
      'Fresh Basil', 
      'Wholegrain Bread 1 pkg', 
      'Ground Coffee 200g', 
      'Red Wine', 
      'Mozzarella Cheese 150g',
      'Orange Juice 1l',
      'Tomatoes']
    };
  }

  changeTitle(title) {
    this.setState({title});
  }
  addInArray(eventType) {
    if(eventType) {
        this.state.arr.push(this.state.title);
        this.setState({arr: this.state.arr});
        this.setState({title: ''});
    }
  }
  filterItem(key) {
    this.state.arr.splice(key, 1);
    this.setState({arr: this.state.arr});
  }
 
  render() {
    
    const text = this.state.arr.map((v, k)=>{return <div key={k}>{v}</div>})
    return (
      <div>
        <Header/>
        <Content
         changeTitle={this.changeTitle.bind(this)}
         addInArray={this.addInArray.bind(this)}
         title={this.state.title}
         item={text}
         filterItem={this.filterItem.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

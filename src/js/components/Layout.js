import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";


export default class Layout extends React.Component {
  constructor(props) {
    super();
    this.state = {
        data: [{id: 1, name: 'switch', items: [{id: 1, name: 'Milk 1l'}, 
      {id: 2, name: 'Eggs Medium 12 pack'}, 
      {id: 3, name: 'Fresh Basil'}, 
      {id: 4, name: 'Wholegrain Bread 1 pkg'}, 
      {id: 5, name: 'Ground Coffee 200g'}, 
      {id: 6, name: 'Red Wine'}, 
      {id: 7, name: 'Mozzarella Cheese 150g'},
      {id: 8, name: 'Orange Juice 1l'},
      {id: 9, name: 'Tomatoes'}]}],
      editTable: false,
      showAddForm: false,
      value: '',
      arrVal: [],
      id: 2
    }
  }
    //Edit table click
  editTableClick() {
    this.setState({editTable: true});
  }
  addNewItem() {
    this.setState({editTable: false});
    this.setState({showAddForm: true});
  }
  cancelClick() {
    this.setState({editTable: false});
    this.setState({showAddForm: false});
  }
  setValue(input) {
    this.setState({value: input.target.value})
  }

  addClickDone(e) {
    
    if(this.state.value){
       this.state.data.push({'id': this.state.id++, 'name': this.state.value, 'items': [this.state.value]});
       this.setState({ arrVal: this.state.arrVal });
       this.setState({value:''});

    }
    
  }
  render() {
    console.log(this.state.data);
    if(this.state.editTable) {
        return (
              <div>
                <Header editTable={this.state.editTable}
                 editTableClick={this.editTableClick.bind(this)}
                 addNewItem={this.addNewItem.bind(this)}
                 showAddForm={this.state.showAddForm}
                  />
                   
                <Footer/>
              </div>
        );
      }
      if(this.state.showAddForm) {
        return (
          <div>
            <Header showAddForm={this.state.showAddForm} cancelClick={this.cancelClick.bind(this)} addClickDone={this.addClickDone.bind(this)}/>
            <input type='text' value={this.state.value} onChange={(input) => this.setValue(input)}/>
          </div>
        );
      }
    return (
      <div>
        <Header editTableClick={this.editTableClick.bind(this)}/>
        <Content data={this.state.data} />
      </div>
    );
  }
}

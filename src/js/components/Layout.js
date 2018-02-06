import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';

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
      id: 2,
      char: 24
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
    this.setState({editTable: true});
    this.setState({showAddForm: false});
  }
  addItemDone() {
    this.setState({editTable: false});
  }
  setValue(input) {
    if(input.target.value.length <= 24) {
      var maxlength = input.target.value.substr(0, 24);
        this.setState({value: maxlength});
      if(input.target.value.length <= 24) {
          this.setState({char: input.target.value.length});
      }else if(input.target.value.length >= 0) {
          this.setState({char: input.target.value.length});
      }
    }
  }

  addClickDone(e) {
    
    if(this.state.value){
       this.state.data.push({'id': this.state.id++, 'name': this.state.value, 'items': [{name: this.state.value, status: Math.random() >= 0.5}]});
       this.setState({ arrVal: this.state.arrVal });
       this.setState({value:'', char: 24});

    }
    
  }
  deleteBlockItem(key){
        this.state.data.splice(key, 1);
        this.setState({data: this.state.data});
    }
 
  render() {
    const blockItem = this.state.data.map((val, key)=>{
      return <div key={key} className={css(styles.wrap_block)}>
             <button className={css(styles.delete)} onClick={this.deleteBlockItem.bind(this, key)}>-</button>
              <div className={css(styles.block_name)}>{val.name}</div>
             </div>
    });
    if(this.state.editTable) {
        return (
              <div>
                <Header editTable={this.state.editTable}
                 editTableClick={this.editTableClick.bind(this)}
                 addNewItem={this.addNewItem.bind(this)}
                 showAddForm={this.state.showAddForm}
                 addItemDone={this.addItemDone.bind(this)}
                  />
                   {blockItem}
                <Footer/>
              </div>
        );
      }
      if(this.state.showAddForm) {
        return (
          <div>
            <Header showAddForm={this.state.showAddForm} cancelClick={this.cancelClick.bind(this)} addClickDone={this.addClickDone.bind(this)}/>
            <div className={css(styles.input_block)}>
              <p className={css(styles.input_text)} >Add new list item</p>
              <input className={css(styles.input)} type='text' value={this.state.value} onChange={(input) => this.setValue(input)}/>
              <p className={css(styles.count_text)}>Characters left {this.state.char}</p>
            </div>
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

import React from "react";
import Footer from "./Footer";
import Swipe from 'react-swipe-component';
import Title from "./Header/Title";
export default class Content extends React.Component {
  constructor(props) {
    super();
    this.state = {
        checked: 0,
        countRight: false,
        countLeft: false,
        items: props.data,
        onlyCart: false
    }
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
  }
  componentWillMount() {
    this.addStatusForItems();
  }
  //swipe event
  _onSwipeLeftListener(e){
   const arr = this.state.items;
   for(var j=0; j<arr.length; j++) {
    for(var i=0; i<arr[j].items.length; i++) {
      if(e == arr[j].items[i].id) {
        if(arr[j].items[i].status !== true) {
          arr[j].items[i].status = !arr[j].items[i].status
          arr[j].items[i].right = true
          arr[j].items[i].left = false
        }
      }
    }
  }
  this.setState({swipedElem: e});
}
  _onSwipeRightListener(e){
    const arr = this.state.items;
    for(var j=0; j<arr.length; j++) {
      for(var i=0; i<arr[j].items.length; i++) {
        if(e == arr[j].items[i].id) {
          if(arr[j].items[i].status !== false) {
            arr[j].items[i].status = !arr[j].items[i].status
            arr[j].items[i].right = true
            arr[j].items[i].left = false
          }
        }
      }
    }
    this.setState({swipedElem: e});
  } 
  isActive(status){
      return status;
  }

  addStatusForItems() {
    this.state.items.map((elem, ind) => {
      elem.items.forEach((e, i)=>{
      return (e.status = Math.random() >= 0.5, e.left = false, e.right = false);
      });
    });
  }
//Button filter
  getAllItems() {
    this.setState({onlyCart: false});
  }
  getOnlyCart() {
    this.setState({onlyCart: true});
  }

  render() {
    const element = '';
    if(this.state.onlyCart !== false) {
      this.element = this.state.items.map((el) => {
        return el.items.filter((et, k) => {
          if(et.status === true) { 
             return et;
          }
        }).map((e, i)=> {
               return <Title 
                        key={i}
                        item={e.name}
                        isActive={ this.isActive(e.status) }
                        checked={this.state.checked}
                        onSwipeLeftListener={() => this._onSwipeLeftListener(e.id)}
                        onSwipeRightListener={()=> this._onSwipeRightListener(e.id)}
                  />
            });
      });
    }else{
          this.element = this.state.items.map((el, key) => {
            return el.items.map((e, i)=> {
               return <Title 
                        key={i}
                        item={e.name}
                        isActive={ this.isActive(e.status) }
                        checked={this.state.checked}
                        onSwipeLeftListener={() => this._onSwipeLeftListener(e.id)}
                        onSwipeRightListener={()=> this._onSwipeRightListener(e.id)}
                  />
            });
        });
      }
    return (
      <div>
          {this.element}
        <Footer getAllItems={this.getAllItems.bind(this)} getOnlyCart={this.getOnlyCart.bind(this)} />
      </div>
    );
  }
}
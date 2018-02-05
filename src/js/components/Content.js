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
        onlyCart: false,
        
    }
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
  }
  componentWillMount() {
    this.addStatusForItems();
  }
  //swipe event
  _onSwipeLeftListener(e){
    this.setState({checked: e});
  }
  _onSwipeRightListener(e){
    this.setState({checked: e});
  } 
  isActive(status){
      /*const selected = JSON.parse(JSON.stringify(this.state.items));
      selected[ind].status = !selected[ind].status;
      this.setState({selected});*/
      return status;
  
  }

  addStatusForItems() {
    this.state.items.map((elem, ind) => {
      elem.items.forEach((e, i)=>{
      return e.status = Math.random() >= 0.5;
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
      this.element = this.state.items.filter( (el) => {
        if(el.status === true) {
          return el;
        }
      }).map((el, key) => {
          return <Title 
                    key={key}
                    item={el.name}
                    isActive={ this.isActive(el.status) }
                    checked={this.state.checked}
                    onSwipeLeftListener={() => this._onSwipeLeftListener(key)}
                    onSwipeRightListener={()=> this._onSwipeRightListener(key)}
                  />
        });
    } else {
          this.element = this.state.items.map((el, key) => {
            el.items.forEach((e, i)=> {
            return e.status = Math.random() >= 0.5;
      });
          return <Title 
                    key={key}
                    item={el.name}
                    isActive={ this.isActive(el.status) }
                    checked={this.state.checked}
                    onSwipeLeftListener={() => this._onSwipeLeftListener(key)}
                    onSwipeRightListener={()=> this._onSwipeRightListener(key)}
                  />
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
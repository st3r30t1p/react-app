import React from "react";
import Swipe from 'react-swipe-component';
import Title from "./Header/Title";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';
export default class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: 0,
      countRight: false,
      countLeft: false,
      dataItems: props.dataItems
    }
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
  }

  _onSwipeLeftListener(e, s){
    this.setState({checked: e});
  }

  _onSwipeRightListener(e){
    this.setState({checked: e});
  } 
  isActive(key, status){
     const ind = this.state.checked;
     if(ind === key) {
      return !status;
      /* const selected = JSON.parse(JSON.stringify(this.state.dataItems));
      selected[ind].status = !selected[ind].status;
      this.setState({dataItems: selected}); */
    }  
  } 

  render() {
    console.log(this.state.checked);
    let element = this.state.dataItems.map((ind, key) => {
      return <Title key={key}
      item={ind.name}
      isActive={ this.isActive(key, ind.status) }
      checked={this.state.checked}
      onSwipeLeftListener={() => this._onSwipeLeftListener(key)}
      onSwipeRightListener={()=> this._onSwipeRightListener(key)}
      />
    }, this);
    return (
      <div>
        {element}
      </div>
    );
  }
}

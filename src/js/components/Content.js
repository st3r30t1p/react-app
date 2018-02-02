import React from "react";
import Swipe from 'react-swipe-component';
import Title from "./Header/Title";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';
export default class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: ''
    }
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    this.onSwipeListener = this._onSwipeListener.bind(this);
    this.actionSwipe = this.actionSwipe.bind(this);
  }
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  onClick () { 
    const eventType = event.type; // => "click"
    this.props.addInArray(eventType);
  }
  showButton(key) {
      this.props.filterItem(key);
  }

  _onSwipeLeftListener(e){
    if(this.state.checked == '' || this.state.checked == 'right')
     this.setState({ checked: 'left' })
    else
     return;
  }
  _onSwipeRightListener(e){
  if(this.state.checked == '' || this.state.checked == 'left')
     this.setState({ checked: 'right' })
    else
     return;
  }
 


  _onSwipeListener(e){
        /*if (e[0]>=0)
          this.setState({ checked: !this.state.checked })*/
      
  }
  actionSwipe(key, rendomSwipe) {
    console.log(key+' '+rendomSwipe);
  }

  render() {
    
      let items = this.props.item.map((ind, key) => {
        let rendomSwipe = Math.random() >= 0.5 ? 'left' : 'right';
        return <Swipe
                key={key}
                nodeName="div"
                className={css(styles.swipe)}
                mouseSwipe={false}
                onSwipedLeft={() => this.onSwipeLeftListener(key)} 
                onSwipingRight={() =>  this.onSwipeRightListener(key)} 
                onSwipe={this.onSwipeListener}
                >
                  <Title key={key}
                        item={ind} 
                        showButton={() => this.showButton(key)} 
                        rendomSwipe={rendomSwipe}
                        actionSwipe={this.actionSwipe}
                  />
              </Swipe>
      });
      console.log(items);
    return (
      <div>
        {items}
        {/*<input  onChange={this.handleChange.bind(this)} value={this.props.title} />
        <button onClick={this.onClick.bind(this)}>click</button>*/}
      </div>
    );
  }

}

import React from "react";
import Swipe from 'react-swipe-component';
import Title from "./Header/Title";

export default class Content extends React.Component {
  constructor(){
    super();
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    this.onSwipeListener = this._onSwipeListener.bind(this);
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

  render() {
      let items = this.props.item.map((ind, key) => {
        return <Title key={key} item={ind} showButton={() => this.showButton(key)}/>
      });
    return (
      <div>
      <Swipe 
        nodeName="div"
        className="test"
        mouseSwipe={false}
        onSwipedLeft={this.onSwipeLeftListener} 
        onSwipedRight={this.onSwipeRightListener} 
        onSwipe={this.onSwipeListener}>
        {items}
        </Swipe>
        {/*<input  onChange={this.handleChange.bind(this)} value={this.props.title} />
        <button onClick={this.onClick.bind(this)}>click</button>*/}
      </div>
    );
  }
    _onSwipeLeftListener(e){
      var random_boolean = Math.random() >= 0.5;
        console.log(random_boolean +" Swiped left " + e);
    }
    _onSwipeRightListener(e){
        console.log("Swiped right "+ e);
    }
    _onSwipeListener(e){
        //if (e[1]===0) console.log("Swipe x: "+e[0]);
      
    }
}

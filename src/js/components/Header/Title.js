import React from "react";
import { css } from 'aphrodite/no-important';
import styles from '../AppStyles';
export default class Title extends React.Component {


  render() {
  	
  	let {rendomSwipe, item} = this.props;
  	this.props.actionSwipe(rendomSwipe);
  	let	className = css(rendomSwipe == 'left' ?  [styles.rendom_left, styles.w_text_item] : [styles.rendom_right, styles.w_text_item])
    return (
    	<div className={css(styles.block_item)}>
    		<div className={css(styles.w_cart)}>Cart</div>
      	<div className={className}>{item}</div>
      	<div className={css(styles.w_home)}>Home</div>
      	{/*<button onClick={this.props.showButton}>X</button>*/}
      </div>
    );
  }
}

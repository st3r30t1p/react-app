import React from "react";
import { css } from 'aphrodite/no-important';
import styles from '../AppStyles';
export default class Title extends React.Component {
  render() {
    return (
    	<div className={css(styles.block_item)}>
    		<div className={css(styles.w_cart)}>Cart</div>
      	<div className={css(styles.w_text_item)}>{this.props.item}</div>
      	<div className={css(styles.w_home)}>Home</div>
      	{/*<button onClick={this.props.showButton}>X</button>*/}
      </div>
    );
  }
}

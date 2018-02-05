import React from "react";
import { css } from 'aphrodite/no-important';
import styles from '../AppStyles';
import Swipe from 'react-swipe-component';
export default class Title extends React.Component {

  render() {
  	const {item, checked} = this.props;
    return (
    	<Swipe
                nodeName="div"
                className={css(styles.block_item)}
                mouseSwipe={false}
                onSwipedLeft={this.props.onSwipeLeftListener} 
                onSwipedRight={this.props.onSwipeRightListener} 
                >
        <div className={css(styles.wrapper_block)}>
    		 <div className={css(styles.w_cart)}>Cart</div>
      	 <div className={css(this.props.isActive ? styles.w_text_item : styles.red )}>{item}</div>
      	 <div className={css(styles.w_home)}>Home</div>
        </div>
      </Swipe>
    );
  }
}

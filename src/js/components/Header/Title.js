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
    		 <div className={css(styles.w_cart)}><img src ="http://localhost:8080/js/img/home_icon.png" /></div>
      	 <div className={css(this.props.isActive ? styles.w_text_item : styles.red )}><span className={css(this.props.isActive ? styles.span_text_cart : styles.span_text_home)}>{item}</span></div>
      	 <div className={css(styles.w_home)}><img src ="http://localhost:8080/js/img/cart_icon.png" /></div>
        </div>
      </Swipe>
    );
  }
}

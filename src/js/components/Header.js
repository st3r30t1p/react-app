import React from "react";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';
export default class Header extends React.Component {
  render() {
    return(
      <div className={css(styles.container)}>
        <p className={css(styles.header_text)}>Groseries</p>
      </div>
    );
  }
}
import React from "react";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';
export default class Footer extends React.Component {

	render() {
		const { getAllItems, getOnlyCart } = this.props;
		return (
		<footer className={css(styles.footer)}>
			<button onClick={getAllItems} className={css(styles.allItems)}></button>
			<button onClick={getOnlyCart} className={css(styles.onlyCart)}></button>
		</footer>
		);
	}
}
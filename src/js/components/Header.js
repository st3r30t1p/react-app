import React from "react";
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';
export default class Header extends React.Component {
  render() {
    const {editTableClick, editTable, addNewItem, showAddForm, cancelClick, addClickDone, addItemDone} = this.props
    if(editTable) {
      return(
      <div className={css(styles.container)}>
        <button onClick={addNewItem} className={css(styles.add_item)}>+</button>
        <div className={css(styles.header_text)}>
          <span>Groseries</span>
        </div>
        <button onClick={addItemDone} className={css(styles.edit_table)}>Done</button>
      </div>
    );
    }
    if(showAddForm) {
      return(
      <div className={css(styles.container)}>
        <button onClick={cancelClick} className={css(styles.add_item)}>Cancel</button>
        <div className={css(styles.header_text)}>
          <span>Add new list item</span>
        </div>
        <button onClick={addClickDone} className={css(styles.edit_table)}>Done</button>
      </div>
    );
    }
    return(
      <div className={css(styles.container)}>
        <div className={css(styles.header_text)}>
          <span>Groseries</span>
        </div>
        <button onClick={editTableClick} className={css(styles.edit_table)}><img src ="http://localhost:8080/js/img/edit_icon_active.png" /></button>
      </div>
    );
  }
}
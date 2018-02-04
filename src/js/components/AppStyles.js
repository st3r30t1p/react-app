import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  container: {
    background: '#f8f8f8',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #cececd',
    alignItems: 'center'
  },

  header_text: {
  	fontSize: 20,
  	margin: 0,
  	fontWeight: 700,
  	color: '#373435'
  },
  /* swipe: {
  	':last-child': {
         borderBottom: 'none'
        },
  	borderBottom: '1px solid #e9eaea',
  }, */
  wrapper_block: {
    width:'100%',
    height: '100%'
  },
  block_item: {
    ':last-child': {
         borderBottom: 'none'
        },
  	height: 60,
  	fontSize: 20,
  	fontWeight: 700,
    borderBottom: '1px solid #e9eaea',
  	display: 'flex',
  	alignItems: 'center',
  	justifyContent: 'center',
  	position: 'relative',
  },
  w_text_item: {
  	height: '100%',
  	width: '88%',
  	display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    right: '12%',
    backgroundColor: '#fff'
  },
  w_cart: {
		width: '12%',
		position: 'absolute',
		height: '100%',
		backgroundColor: '#e6e7e8',
		left: 0,
		zIndex: 2,
    top: 0
  },
  w_home: {
		width: '12%',
		height: '100%',
		right: 0,
		position: 'absolute',
		backgroundColor: '#e6e7e8',
		zIndex: 2,
    top: 0
  },
  rendom_left: {
  	right: '-12%'
  },
  rendom_right: {
  	left: 60
  },
  red: {
    backgroundColor: 'red',
    height: '100%',
    width: '88%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    right: '0'
  },
  footer: {
    width: '100%',
    height: '60px',
    borderTop: '1px solid #cececd',
  },
  allItems: {
    width: '50%',
    height: '60px',
    backgroundColor: '#f8f8f8',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none'
  },
  onlyCart: {
    width: '50%',
    height: '60px',
    backgroundColor: '#f8f8f8',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none'
  }
})
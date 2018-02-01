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
  	width: '100%',
  	display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3
  },
  w_cart: {
		width: 60,
		position: 'absolute',
		height: '100%',
		backgroundColor: '#e6e7e8',
		left: 0,
		zIndex: 2
  },
  w_home: {
		width: 60,
		height: '100%',
		right: 0,
		position: 'absolute',
		backgroundColor: '#e6e7e8',
		Index: 2
  }
})
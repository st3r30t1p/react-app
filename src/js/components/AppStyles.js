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
  	
  },
  w_text_item: {
  	width: '100%',
  	textAlign: 'center'
  },
  w_cart: {
		width: 60,
		height: '100%',
		backgroundColor: '#e6e7e8'
  },
  w_home: {
		width: 60,
		height: '100%',
		backgroundColor: '#e6e7e8'
  }
})
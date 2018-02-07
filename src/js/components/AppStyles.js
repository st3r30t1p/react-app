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
    backgroundColor: '#fff',
    transition: '0.1s'
  },
  w_cart: {
		width: '12%',
		position: 'absolute',
		height: '100%',
		backgroundColor: '#e6e7e8',
		left: 0,
		zIndex: 2,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  span_text_cart: {
  	position: 'absolute',
  	left: '50%'
  },
  span_text_home: {
  	position: 'absolute',
  	right: '50%'
  },
  w_home: {
		width: '12%',
		height: '100%',
		right: 0,
		position: 'absolute',
		backgroundColor: '#e6e7e8',
		zIndex: 2,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rendom_left: {
  	right: '-12%',
  },
  red: {
    backgroundColor: 'white',
    height: '100%',
    width: '88%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    right: '0',
    transition: '0.1s'
  },
  footer: {
    width: '100%',
    height: '60px',
    borderTop: '1px solid #cececd',
    position: 'absolute',
    bottom: 0
  },
  allItems: {
  	':focus': {
  		fontWeight: 700,
  		fontSize: 16,
  		backgroundImage: 'url("/js/img/list_icon_active.png")',
  		backgroundRepeat: 'no-repeat',
  		backgroundPosition: '50% 50%'
  	},
    width: '50%',
    height: '60px',
    backgroundColor: '#f8f8f8',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    backgroundImage: 'url("/js/img/list_icon_inactive.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  },
  onlyCart: {
  	':focus': {
  		fontWeight: 700,
  		fontSize: 16,
  		backgroundImage: 'url("/js/img/cart_icon_active.png")',
  		backgroundRepeat: 'no-repeat',
  		backgroundPosition: '50% 50%'
  	},
    width: '50%',
    height: '60px',
    backgroundColor: '#f8f8f8',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    backgroundImage: 'url("/js/img/cart_icon_inactive.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  },
  edit_table: {
  	position: 'absolute',
  	right: '3%',
  	border: 'none',
  	fontSize: 20,
  	fontWeight: 700,
  	backgroundColor: 'inherit',
  	outline: 'none'
  },
  add_item: {
  	position: 'absolute',
  	left: '3%',
  	border: 'none',
  	fontSize: 20,
  	fontWeight: 700,
  	backgroundColor: 'inherit',
  	outline: 'none'
  },
  input_block: {
  	width: '100%',
  	textAlign: 'center',
  	marginTop: 50
  },
  input: {
  	border: 'none',
  	borderBottom: '1px solid #000',
  	outline: 'none'
  },
  input_text: {
    fontSize: 20,
  	fontWeight: 700,
  	color: '#373435'
  },
  delete: {
  	border: 'none',
  	borderRadius: '50%',
  	backgroundColor: 'red',
  	color: 'white',
  	width: 35,
  	height: 35,
  	outline: 'none'
  },
  wrap_block: {
  	paddingLeft: 20,
  	height: 60,
  	display: 'flex',
  	alignItems: 'center',
  	borderBottom: '1px solid #e9eaea'
  },
  block_name: {
  	fontSize: 25,
  	fontWeight: 700,
  	color: '#373435',
  	marginLeft: 20,
  	display: 'inline-block'
  },
  count_text: {
  	fontWeight: 700,
  	fontSize: 18,
  	marginTop: 5
  }
})
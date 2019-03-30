import styled from 'styled-components';

const Card = styled('article')({
	display: 'grid',
	gridGap: 12,
	alignItems: 'center',
	marginBottom: 16,
	position: 'relative',
	borderRadius: 4,
	padding: 12,
	background: '#fff',
	boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.2)',
	transition: '0.3s ease-in-out',
	overflow: 'hidden',
	'&:hover': {
		boxShadow: '2px 4px 10px 0px rgba(0, 0, 0, 0.2)',
	},
	'.star-wrapper': {
		position: 'absolute',
		top: 0,
		right: 0,
		borderTop: '42px solid rgb(210, 54, 105)',
		borderLeft: '42px solid transparent',
		transition: '0.3s ease-in-out',
		width: 0,
		img: {
			position: 'relative',
			top: -40,
			right: 17,
			width: 12,
			height: 12,
			transition: '0.3s ease-in-out',
		},
		'&:hover': {
			borderTopWidth: 48,
			borderLeftWidth: 48,
			img: {
				top: -42,
				right: 20,
				width: 15,
				height: 15,
			},
		},
	},
});

export default Card;

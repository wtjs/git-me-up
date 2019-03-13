import styled from 'styled-components';

const Button = styled('button')({
	padding: '0 16px',
	height: 36,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#fff',
	background: 'rgb(210, 54, 105)',
	border: 'none',
	borderRadius: 4,
	fontSize: 16,
	boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.1)',
	transition: '0.3s ease-in-out',
	'&:hover, &:focus': {
		boxShadow: '2px 4px 6px 0px rgba(0, 0, 0, 0.2)',
		cursor: 'pointer',
	},
});

export default Button;

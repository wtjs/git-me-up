import styled from 'styled-components';

const Avatar = styled('img')(({ height, width, src }) => ({
	borderRadius: '50%',
	width: width || 48,
	height: height || 48,
	backgroundColor: '#ccc',
	overflow: 'hidden',
	src,
}));

export default Avatar;

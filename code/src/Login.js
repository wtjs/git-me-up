import React, { useState } from 'react';

import 'styled-components/macro';

import Button from './Button';

const Login = () => {
	const [token, setToken] = useState('');
	return (
		<section
			css={{
				width: '100%',
				maxWidth: 420,
				margin: '0 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: 'calc(100vh - 4px)',
				fontFamily: 'monospace',
				padding: '0 16px',
			}}
		>
			<form
				css={{ width: '100%' }}
				onSubmit={e => {
					e.preventDefault();
					localStorage.setItem('token', token);
					window.location.reload();
				}}
			>
				<h1
					css={{
						color: 'rgb(210, 54, 105)',
						textAlign: 'center',
						fontSize: 48,
						marginTop: 12,
					}}
				>
					git-me-up
				</h1>
				<input
					type="password"
					name="token"
					value={token}
					onChange={e => {
						setToken(e.target.value);
					}}
					placeholder="Paste your GitHub token"
					css={{
						marginBottom: 16,
						borderRadius: 4,
						fontSize: 18,
						fontFamily: 'monospace',
						padding: '8px 16px',
						border: '1px solid #424242',
						boxShadow: 'none',
						width: '100%',
						'&:focus, &:hover': {
							borderColor: 'rgb(210, 54, 105)',
						},
					}}
				/>
				<Button css={{ width: '100%', fontFamily: 'monospace' }}>SUBMIT</Button>
			</form>
		</section>
	);
};

export default Login;

import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import 'styled-components/macro';

import Login from './Login';

const accessToken = localStorage.getItem('token');

fetch('https://api.github.com/graphql', {
	method: 'POST',
	headers: {
		Authorization: `bearer ${accessToken}`,
	},
	body: JSON.stringify({
		query: `
    {
      viewer {
        name
      }
    }
    `,
	}),
})
	.then(res => res.json())
	.then(json => console.log(json));

const Global = createGlobalStyle({
	body: {
		backgroundColor: '#fff',
		color: '#444',
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
		padding: 0,
		margin: 0,
		borderTop: '4px solid rgb(210, 54, 105)',
	},
	'*': {
		boxSizing: 'border-box',
	},
});

class App extends Component {
	render() {
		return (
			<>
				<Global />
				{accessToken ? (
					<button
						onClick={() => {
							localStorage.clear();
							window.location.reload();
						}}
					>
						Logout
					</button>
				) : (
					<Login />
				)}
			</>
		);
	}
}

export default App;

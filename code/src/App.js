import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'styled-components/macro';

import Login from './Login';
import Sidebar from './components/Sidebar';

// get the authentication token from local storage if it exists
const accessToken = localStorage.getItem('token');

const httpLink = new HttpLink({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: `Bearer ${accessToken}`,
	},
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

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
					<ApolloProvider client={client}>
						<Sidebar />
						<Sidebar />
						<Sidebar />
					</ApolloProvider>
				) : (
					<Login />
				)}
			</>
		);
	}
}

export default App;

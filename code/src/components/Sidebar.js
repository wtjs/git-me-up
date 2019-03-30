import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import 'styled-components/macro';

import Avatar from './Avatar';

const GET_VIEWER = gql`
	query {
		viewer {
			avatarUrl
			login
			id
		}
	}
`;

const Sidebar = () => (
	<aside
		css={{
			alignSelf: 'stretch',
			background: '#eaeaea',
			borderRight: '1px solid #e9e9e9',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: 16,
			justifyContent: 'space-between',
		}}
	>
		<div>
			<Query query={GET_VIEWER}>
				{({ loading, error, data }) => (
					<>
						{loading && <div>Loading...</div>}
						{error && <div>Error...</div>}
						{data && data.viewer && (
							<Avatar src={data.viewer.avatarUrl} alt={data.viewer.login} />
						)}
					</>
				)}
			</Query>

			<div
				css={{ color: 'rgb(210, 54, 105)', cursor: 'pointer' }}
				onClick={() => {
					localStorage.clear();
					window.location.reload();
				}}
			>
				Logout
			</div>
		</div>
	</aside>
);

export default Sidebar;

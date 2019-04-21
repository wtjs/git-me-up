import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import 'styled-components/macro';

import RepoCard from './RepoCard';
import Avatar from './Avatar';
import Button from './Button';

const GET_USER_ACTIVITY = gql`
	query($user: String!, $cursor: String) {
		user(login: $user) {
			id
			avatarUrl
			starredRepositories(last: 6, before: $cursor) {
				pageInfo {
					hasPreviousPage
					startCursor
				}
				edges {
					node {
						id
						createdAt
						viewerHasStarred
						nameWithOwner
						owner {
							avatarUrl
						}
						url
						repositoryTopics(first: 4) {
							edges {
								node {
									id
									topic {
										id
										name
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const ColumnWrapper = styled('section')({
	width: '100%',
	maxWidth: 300,
	backgroundColor: '#fafafa',
	borderRight: '2px solid #eee',
	padding: 15,
	height: 'calc(100vh - 4px)',
	overflowY: 'scroll',
});

const Column = ({ user }) => (
	<ColumnWrapper>
		<Query query={GET_USER_ACTIVITY} variables={{ user, cursor: null }}>
			{({ data, error, loading, fetchMore }) => (
				<>
					{loading && <div>loading...</div>}
					{error && <div>{JSON.stringify(error)}</div>}
					{data && data.user && (
						<>
							<div
								css={{
									alignItems: 'center',
									display: 'flex',
									padding: '0 0 16px',
								}}
							>
								<Avatar src={data.user.avatarUrl} width={25} height={25} />
								<div css={{ marginLeft: 12 }}>{user}</div>
							</div>
							{data.user.starredRepositories.edges.map(({ node }) => (
								<RepoCard data={node} key={node.id} />
							))}
							{data.user.starredRepositories.pageInfo.hasPreviousPage && (
								<Button
									onClick={() => {
										fetchMore({
											variables: {
												cursor:
													data.user.starredRepositories.pageInfo
														.startCursor,
											},
											updateQuery: (prev, { fetchMoreResult }) => {
												if (!fetchMoreResult) {
													return prev;
												}
												return {
													user: {
														...prev.user,
														starredRepositories: {
															...fetchMoreResult.user
																.starredRepositories,
															edges: [
																...prev.user.starredRepositories
																	.edges,
																...fetchMoreResult.user
																	.starredRepositories.edges,
															],
														},
													},
												};
											},
										});
									}}
									css={{ width: '100%' }}
								>
									Load More
								</Button>
							)}
						</>
					)}
				</>
			)}
		</Query>
	</ColumnWrapper>
);

export default Column;

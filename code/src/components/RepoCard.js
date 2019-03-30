import React from 'react';

import 'styled-components/macro';

import Avatar from './Avatar';
import Card from './Card';
import Tag from './Tag';

import starSvg from '../assets/star.svg';
import starSvgFilled from '../assets/star-filled.svg';

const RepoCard = ({ data }) => {
	const hasStarred = data.viewerHasStarred;

	return (
		<Card>
			<a className="star-wrapper">
				<img src={hasStarred ? starSvgFilled : starSvg} alt="star" />
			</a>
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: 'auto 1fr',
					gridGap: 10,
					alignItems: 'center',
					fontSize: 14,
				}}
			>
				<Avatar src={data.owner.avatarUrl} width={30} height={30} />
				<a
					css={{ color: '#555' }}
					href={data.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{data.nameWithOwner}
				</a>
			</div>
			{data.repositoryTopics.edges.length ? (
				<div>
					{data.repositoryTopics.edges.map(({ node }) => (
						<Tag key={node.topic.id}>{node.topic.name}</Tag>
					))}
				</div>
			) : null}
		</Card>
	);
};

export default RepoCard;

import React from 'react';
import { LoadingContainer, LoadingSpinner } from './styles';

export default function Loading() {
	return (
		<LoadingContainer>
			<LoadingSpinner>
				<div></div>
				<div></div>
			</LoadingSpinner>
		</LoadingContainer>
	);
}

import React from 'react';
import { Error, ErrorMessage } from './styles';

export default function Alert({ message }) {
	return (
		<Error>
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					color="#DC2626"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<ErrorMessage>{message}</ErrorMessage>
		</Error>
	);
}

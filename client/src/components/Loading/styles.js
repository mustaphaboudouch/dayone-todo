import styled from '@emotion/styled';

export const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoadingSpinner = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	div {
		position: absolute;
		border: 4px solid #000000;
		opacity: 1;
		border-radius: 50%;
		animation: spinner-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

		&:nth-child(2) {
			animation-delay: -0.5s;
		}
	}
`;

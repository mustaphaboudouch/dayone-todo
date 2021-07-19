import styled from '@emotion/styled';

// Layout

export const TodoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 15px;
	padding: 20px 10px 20px 25px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
`;

export const TodoBody = styled.div`
	flex: 1;
`;

// Elements

export const TodoCheckbox = styled.input`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1em;
	cursor: pointer;
	width: 1.8em;
	max-width: 100%;
	height: 1.8em;
	margin: 0;
	color: #1b1b1b;
	vertical-align: middle;
	appearance: none;
	border: 3px solid rgb(31, 41, 55);
	border-radius: 50%;
	&:checked {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#27ae60'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7' /%3E%3C/svg%3E");
		background-image: url("data:image/svg+xml,%3Csvg height='32' width='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m11.4 21.5-5.93-5.93-2.01 2.01 7.94 7.94 17.1-17.1-2.01-2.01z' fill='%2327ae60'/%3E%3C/svg%3E");
		background-size: 70% 70%;
		background-position: center;
		background-repeat: no-repeat;
		background-color: transparent;
		border-color: #27ae60;
	}
`;

export const TodoTitle = styled.label`
	display: block;
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 5px;
	color: rgb(31, 41, 55);
	cursor: pointer;
`;

export const TodoInfos = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	color: #000000;
	opacity: 0.5;
	span {
		display: block;
		margin: 0 8px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export const NextButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	width: 50px;
	height: 50px;
	border-radius: 8px;
	color: rgb(31, 41, 55);
	background-color: rgb(243, 244, 246);

	&:hover {
		background-color: rgb(229, 231, 235);
	}
`;

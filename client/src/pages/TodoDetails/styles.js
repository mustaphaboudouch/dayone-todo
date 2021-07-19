import styled from '@emotion/styled';

export const TodoHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const BackButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	width: 50px;
	height: 50px;
	color: #ffffff;
	border-radius: 8px;
`;

export const TodoTitle = styled.h1`
	display: block;
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 5px;
	color: #000000;
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

export const TodoDescription = styled.div`
	margin-top: 30px;
	line-height: 1.6;
	padding: 20px 25px;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
`;

import { gql } from '@apollo/client';

export const CHECK_TODO = gql`
	mutation updateTodoStatusById($id: ID!, $isDone: Boolean!) {
		updateTodoStatusById(id: $id, isDone: $isDone) {
			id
			title
			text
			isDone
			type
			createdAt
		}
	}
`;

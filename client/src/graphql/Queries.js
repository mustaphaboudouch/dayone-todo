import { gql } from '@apollo/client';

export const GET_TODOS = gql`
	query getTodoList($filters: TodoFiltersInput, $orderBy: Ordering) {
		getTodoList(filters: $filters, orderBy: $orderBy) {
			id
			title
			isDone
			type
			createdAt
		}
	}
`;

export const GET_TODO = gql`
	query getTodoById($id: ID!) {
		getTodoById(id: $id) {
			id
			title
			text
			isDone
			type
			createdAt
		}
	}
`;

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { GET_TODOS } from '../../graphql/Queries';
import { CHECK_TODO } from '../../graphql/Mutations';

import Alert from '../../components/Alert';
import Loading from '../../components/Loading';
import Filters from '../../components/Filters';
import Todo from '../../components/Todo';
import { TodosList } from './styles';

export default function TodoList() {
	const [todos, setTodos] = React.useState([]);
	const [filters, setFilters] = React.useState({
		types: ['RH', 'Tech', 'Marketing', 'Communication'],
		business: false,
		done: undefined,
		order: 'DATE_DESC',
	});

	const { error, loading, data } = useQuery(GET_TODOS, {
		variables: {
			filters: {
				types: filters.types,
				isDone: filters.done,
			},
			orderBy: filters.order,
		},
	});
	const [updateTodoStatusById] = useMutation(CHECK_TODO);

	React.useEffect(() => {
		if (data) {
			setTodos(data.getTodoList);
		}
	}, [data]);

	// Change todo status: Done, Todo
	const onCheckTodo = (e) => {
		updateTodoStatusById({
			variables: {
				id: e.target.id,
				isDone: e.target.checked,
			},
		});
	};

	// Filter by type : Marketing, Communication
	const getBusinessTodos = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			types: e.target.checked
				? ['Marketing', 'Communication']
				: ['RH', 'Tech', 'Marketing', 'Communication'],
			business: e.target.checked,
		}));
	};

	// Filter by type
	const onChangeType = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			types:
				e.target.value === 'Tous'
					? ['RH', 'Tech', 'Marketing', 'Communication']
					: [e.target.value],
			business: false,
		}));
	};

	// Filter by status
	const onChangeDone = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			done:
				e.target.value === 'Done'
					? true
					: e.target.value === 'Todo'
					? false
					: undefined,
		}));
	};

	// Sort by createdAt
	const onChangeOrder = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			order: e.target.value,
		}));
	};

	if (error) {
		return <Alert message={error.message} />;
	}

	return (
		<div className="container">
			<Filters
				filters={filters}
				getBusinessTodos={getBusinessTodos}
				onChangeDone={onChangeDone}
				onChangeType={onChangeType}
				onChangeOrder={onChangeOrder}
			/>
			{loading ? (
				<Loading />
			) : (
				<TodosList>
					{todos.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							onCheckTodo={onCheckTodo}
						/>
					))}
				</TodosList>
			)}
		</div>
	);
}

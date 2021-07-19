import React from 'react';
import { useQuery } from '@apollo/client';
import { format, parseISO } from 'date-fns';

import { GET_TODO } from '../../graphql/Queries';

import Alert from '../../components/Alert';
import Loading from '../../components/Loading';
import {
	BackButton,
	TodoDescription,
	TodoHeader,
	TodoInfos,
	TodoTitle,
} from './styles';

export default function TodoDetails({ match }) {
	const { error, loading, data } = useQuery(GET_TODO, {
		variables: { id: match.params.id },
	});
	const [todo, setTodo] = React.useState({});

	React.useEffect(() => {
		if (data) {
			setTodo(data.getTodoById);
			console.log(data.getTodoById);
		}
	}, [data]);

	if (error) {
		return <Alert message={error.message} />;
	}

	return (
		<div className="container">
			{loading ? (
				<Loading />
			) : (
				<>
					<TodoHeader>
						<BackButton
							href="/"
							style={{
								backgroundColor: todo.isDone
									? '#27ae60'
									: '#E74C3C',
							}}
						>
							<svg
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								></path>
							</svg>
						</BackButton>
						<div>
							<TodoTitle>{todo.title}</TodoTitle>
							<TodoInfos>
								<p>{todo.type}</p>
								<span />
								<p>
									{todo.createdAt &&
										format(
											parseISO(todo.createdAt),
											'PPpp'
										)}
								</p>
							</TodoInfos>
						</div>
					</TodoHeader>
					<TodoDescription>
						<p>{todo.text}</p>
					</TodoDescription>
				</>
			)}
		</div>
	);
}

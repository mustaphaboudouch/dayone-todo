import React from 'react';
import { format, parseISO } from 'date-fns';
import { TodoContainer, TodoCheckbox, TodoInfos, TodoTitle, NextButton, TodoBody } from './styles';

export default function Todo({ todo, onCheckTodo }) {
	return (
		<TodoContainer>
			<TodoCheckbox
				id={todo.id}
				type="checkbox"
				checked={todo.isDone}
				onChange={onCheckTodo}
			/>
			<TodoBody>
				<TodoTitle
					htmlFor={todo.id}
					style={{
						color: todo.isDone ? '#27ae60' : '#000000',
						textDecorationLine: todo.isDone
							? 'line-through'
							: 'none',
					}}
				>
					{todo.title}
				</TodoTitle>
				<TodoInfos>
					<p>{todo.type}</p>
					<span />
					<p>{format(parseISO(todo.createdAt), 'PPpp')}</p>
				</TodoInfos>
			</TodoBody>
			<NextButton href={`todo/${todo.id}`}>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</NextButton>
		</TodoContainer>
	);
}

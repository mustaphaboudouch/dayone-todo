import styled from '@emotion/styled';

// Layout

export const FiltersContainer = styled.div`
	margin-bottom: 30px;
`;

export const RowOne = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		gap: 15px;
	}
`;

export const RowTwo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;

	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 20px;
	}
`;

// Elements

export const FiltersLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	user-select: none;
`;

export const FiltersSelect = styled.select`
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
	appearance: none;
	color-adjust: exact;
	background-repeat: no-repeat;
	background-color: #fff;
	border: 1px solid #d1d5db;
	border-radius: 0.375rem;
	padding: 0.5rem 2.5rem 0.5rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5rem;
	background-position: right 0.5rem center;
	background-size: 1.5em 1.5em;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 0 #fff, 0 0 0 1px #2563eb, 0 0 #0000;
		border-color: #2563eb;
	}
`;

export const FiltersCheckbox = styled.input`
	appearance: none;
	color-adjust: exact;
	display: inline-block;
	vertical-align: middle;
	background-origin: border-box;
	user-select: none;
	flex-shrink: 0;
	height: 1rem;
	width: 1rem;
	color: #2563eb;
	background-color: #fff;
	border: 1px solid #d1d5db;
	border-radius: 0.25rem;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2563eb, 0 0 #0000;
	}

	&:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
		border-color: transparent;
		background-color: currentColor;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;

		&:hover,
		&:focus {
			border-color: transparent;
			background-color: currentColor;
		}
	}
`;

export const FiltersRadio = styled.input`
	appearance: none;
	color-adjust: exact;
	display: inline-block;
	vertical-align: middle;
	background-origin: border-box;
	user-select: none;
	flex-shrink: 0;
	border-radius: 100%;
	height: 1rem;
	width: 1rem;
	color: #2563eb;
	background-color: #fff;
	border: 1px solid #d1d5db;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2563eb, 0 0 #0000;
	}

	&:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
		border-color: transparent;
		background-color: currentColor;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;

		&:hover,
		&:focus {
			border-color: transparent;
			background-color: currentColor;
		}
	}
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const FiltersSorts = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 25px;

	@media (max-width: 600px) {
		margin-top: 15px;
	}
`;

export const SortIcon = styled.span`
	font-family: 'Roboto', sans-serif;
`;

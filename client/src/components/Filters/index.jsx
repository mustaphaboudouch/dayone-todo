import React from 'react';
import { FiltersContainer, RowOne, RowTwo, FiltersCheckbox, FiltersLabel, FiltersSelect, InputGroup,FiltersSorts, SortIcon, FiltersRadio } from './styles';

export default function Filters({
	filters,
	getBusinessTodos,
	onChangeDone,
	onChangeType,
	onChangeOrder,
}) {
	return (
		<FiltersContainer>
			<RowOne>
				<InputGroup>
					<label htmlFor="status">Status</label>
					<FiltersSelect
						id="status"
						value={
							filters.done === true
								? 'Done'
								: filters.done === false
								? 'Todo'
								: 'Tous'
						}
						onChange={onChangeDone}
					>
						<option value="Tous">Tous</option>
						<option value="Done">Fini</option>
						<option value="Todo">À faire</option>
					</FiltersSelect>
				</InputGroup>
				<InputGroup>
					<label htmlFor="type">Type</label>
					<FiltersSelect
						id="type"
						value={
							filters.types.length > 1 ? 'Tous' : filters.types[0]
						}
						onChange={onChangeType}
					>
						<option value="Tous">Tous</option>
						<option value="RH">RH</option>
						<option value="Tech">Tech</option>
						<option value="Marketing">Marketing</option>
						<option value="Communication">Communication</option>
					</FiltersSelect>
				</InputGroup>
			</RowOne>
			<RowTwo>
				<FiltersLabel>
					<FiltersCheckbox
						type="checkbox"
						checked={filters.business}
						onChange={getBusinessTodos}
					/>
					<span>Uniquement les todos business</span>
				</FiltersLabel>
				<FiltersSorts onChange={onChangeOrder}>
					<FiltersLabel>
						<FiltersRadio
							type="radio"
							checked={filters.order === 'DATE_DESC'}
							value="DATE_DESC"
							name="order"
						/>
						<span>
							Date <SortIcon>&#8650;</SortIcon>
						</span>
					</FiltersLabel>
					<FiltersLabel>
						<FiltersRadio
							type="radio"
							checked={filters.order === 'DATE_ASC'}
							value="DATE_ASC"
							name="order"
						/>
						<span>
							Date <SortIcon>&#8648;</SortIcon>
						</span>
					</FiltersLabel>
				</FiltersSorts>
			</RowTwo>
		</FiltersContainer>
	);
}

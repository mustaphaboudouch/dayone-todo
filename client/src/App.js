import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import TodoDetails from './pages/TodoDetails';
import TodoList from './pages/TodoList';

const errorLink = onError(({ graphqlErrors, networkError }) => {
	if (graphqlErrors) {
		// graphqlErrors.map(({ message, location, path }) => {
		// 	alert(`Graphql error ${message}`);
		// });
	}
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000' })]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path="/todo/:id" component={TodoDetails} />
					<Route exact path="/" component={TodoList} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

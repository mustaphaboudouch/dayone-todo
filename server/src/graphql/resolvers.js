const { combineResolvers } = require('graphql-resolvers');
const todoService = require('../services/todoService');

const Query = {
	getTodoList: (parent, { orderBy, filters }) =>
		todoService.findAll({
			orderBy,
			filters,
		}),
	getTodoById: (parent, { id }) => todoService.findById(id),
};

const Mutation = {
	updateTodoStatusById: (parent, { id, isDone }) =>
		todoService.updateStatusById({ id, isDone }),
};

module.exports = {
	Mutation,
	Query,
};

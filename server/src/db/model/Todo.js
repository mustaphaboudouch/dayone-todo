/* eslint-disable global-require */
const { Model } = require('objection');
const knex = require('../index.js');

Model.knex(knex);

class Todo extends Model {
	static get tableName() {
		return 'todo';
	}
}

module.exports = Todo;

const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge');

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, './**/resolvers.js'));

const typeDefs = mergeTypeDefs(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

module.exports = { typeDefs, resolvers };

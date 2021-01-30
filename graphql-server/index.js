const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch');
const { getPerson } = require('./controllers/personController');
const { getFacility } = require('./controllers/facilityController');
const { getExposure } = require('./controllers/exposureController');
const { multiply } = require('./util/calculator');

const typeDefs = gql`
  type Query {
    result(input: Int!): Int
  }
`;

const getBenefits = async (personId) => {
  const person = await getPerson(personId);
  const facility = await getFacility(person.val1);
  const exposure = await getExposure(person.val2);
  const val3 = parseInt(facility.val3, 10);
  const val5 = parseInt(exposure.val5, 10);
  if (isNaN(val3)) {
    throw 'Cant done the operation';
  }
  if (isNaN(val5)) {
    throw 'Cant done the operation';
  }

  return multiply(val3, val5);
};

const resolvers = {
  Query: {
    result: async (parent, args, context, info) => {
      try {
        return getBenefits(args.input);
      } catch (err) {
        throw err;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

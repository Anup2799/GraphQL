import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql
 
  type Employe {
    name: String
    company: String
  }

  type Query {
    employes: [Employe]
  }
`;

const employes = [
    {
      name: 'RAM',
      company: 'Apple',
    },
    {
      name: 'Sham',
      company: 'Zensar',
    },
  ];

  const resolvers = {
    Query: {
      employes: () => employes,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
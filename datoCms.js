// datoCms.js
import { GraphQLClient } from "graphql-request";

const API_TOKEN = "23d68bb0bba7a845ee6e58c35fd841"; // Sostituisci con il tuo token
const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default client;

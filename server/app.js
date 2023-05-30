const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(8000, () => {
  console.log("Server is Up and Running at Port 8000");
});

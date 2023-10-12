import { Sequelize } from "sequelize";

// Configure your database connection
const sequelize = new Sequelize({
  dialect: "postgres", // or any other supported database
  database: "postgres",
  username: "postgres",
  password: "12345",
  host: "localhost", // Replace with your database host
  port: 5432, // Replace with your database port
});

export { sequelize };

import "reflect-metadata";
import { DataSource } from "typeorm";
// export const DatabaseConfig = new DataSource({
//   type: "mysql",
//   database: "type_orm",
//   username: "root",
//   password: "",
//   host: "127.0.0.1", // Replace with your database host
//   entities: [__dirname + "/../entities/**/*.entity{.ts,.js}"],
//   synchronize: true,
//   logging: false,
//   dropSchema: false,
// });

export const DatabaseConfig = new DataSource({
  type: "postgres",
  database: "networkPeople",
  username: "postgres",
  password: "12345",
  host: "localhost", // Use IPv4 address
  entities: [__dirname + "/../entities/**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: false,
  dropSchema: false,
});

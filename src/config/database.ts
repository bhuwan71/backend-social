import "reflect-metadata";

import { DataSource } from 'typeorm';

// export const DatabaseConfig = new DataSource({
//   type: 'postgres', // Set the database type to PostgreSQL
//   url: 'postgres://uiaiobqy:X6lj2LXDJNme2hd373gh9DZviKFzf_0N@rosie.db.elephantsql.com/uiaiobqy', // PostgreSQL connection URL
//   entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   logging: false,
//   dropSchema: false,
// });

export const DatabaseConfig = new DataSource({
  type: "postgres",
  database: "network",
  username: "postgres",
  password: "12345",
  host: "localhost", // Use IPv4 address
  entities: [__dirname + "/../entities/**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: false,
  dropSchema: false,
});

require("dotenv").config();

export const config = {
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PASSWORD,
  server: process.env.REACT_APP_SERVER,
  database: process.env.REACT_APP_DATABASE,
  options: {
    encrypt: true,
  },
};

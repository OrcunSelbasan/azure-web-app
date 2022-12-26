import sql from "mssql";
import { config } from "./config";

export const request = new sql.Request();

export const dbSelectALL = () =>
  sql.connect(config).then(() => {
    request.query("SELECT * FROM your_table", (err, result) => {
      if (err) console.log(err);
      console.log(result);
    });
  });

export const dbRemoveSelected = (ids) =>
  sql.connect(config).then(() => {
    request.query(
      `DELETE FROM your_table WHERE id IN (${ids.join(",")})`,
      (err, result) => {
        if (err) console.log(err);
        console.log(result);
      }
    );
  });

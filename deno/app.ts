import { Drash } from "https://deno.land/x/drash@v1.0.0/mod.ts";
import getApi from "./api/api.js";
import Charts from "./get_charts.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [Charts],
});

getApi();

server.run({
  hostname: "localhost",
  port: 1447,
});

console.log("Server listening: http://localhost:1447");

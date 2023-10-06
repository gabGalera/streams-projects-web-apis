import { createServer } from "node:http";
import { setInterval } from "node:timers/promises";
import { randomUUID } from "node:crypto";
import { Readable } from "node:stream";

async function* readable() {
  let counter = 0;
  for await (const i of setInterval(40)) {
    const item = JSON.stringify({
      id: randomUUID(),
      name: `Gabriel-${Date.now()} `,
    }).concat("\n");
    console.count("items sent");
    yield item;
    if (++counter >= 600) break;
  }
}

createServer((request, response) => {
  Readable.from(readable()).pipe(response);
}).listen(3000, () => console.log("app running at 3000"));

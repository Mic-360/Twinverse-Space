// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/mission/index.tsx";
import * as $3 from "./routes/team/index.tsx";
import * as $4 from "./routes/waitlist/index.tsx";
import * as $$0 from "./islands/Footer.tsx";
import * as $$1 from "./islands/Video.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/index.tsx": $1,
    "./routes/mission/index.tsx": $2,
    "./routes/team/index.tsx": $3,
    "./routes/waitlist/index.tsx": $4,
  },
  islands: {
    "./islands/Footer.tsx": $$0,
    "./islands/Video.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;

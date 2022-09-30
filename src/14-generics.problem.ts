// CODE

import { it } from "vitest";
import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

const genericFetch = <ZSchema extends z.ZodSchema>(
  url: string,
  schema: ZSchema
): Promise<z.infer<ZSchema>> => {
  return fetch(url)
    .then((result) => result.json())
    .then((data) => schema.parse(data));
};

// TESTS

it("Should fetch from the Star Wars API", async () => {
  const result = await genericFetch(
    "https://swapi.dev/api/people/1",
    z.object({
      name: z.string(),
    })
  );

  type cases = [
    Expect<Equal<typeof result, { name: string }>>
  ];
});

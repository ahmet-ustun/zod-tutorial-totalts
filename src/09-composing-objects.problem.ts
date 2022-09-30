import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

const Entry = z.object({
  id: z.string().uuid(),
});

const User = Entry.extend({
  name: z.string(),
});

const Post = Entry.extend({
  title: z.string(),
  body: z.string(),
});

const Comment = Entry.extend({
  text: z.string(),
});

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<
    Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>
  >,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>
];

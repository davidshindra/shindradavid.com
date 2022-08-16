import type { RequestEvent } from "@sveltejs/kit";

import type {RequestHandler} from './$types'

/** @type {import('./$types').RequestHandler} */
export function GET() {
  const posts = [
    {title: 'hello world', id: 1},
    {title: 'hey there', id: 2}
  ]

  return new Response(JSON.stringify(posts))
}
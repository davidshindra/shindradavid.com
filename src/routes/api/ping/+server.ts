import type { RequestEvent } from "@sveltejs/kit";

import type {RequestHandler} from './$types'

/** @type {import('./$types').RequestHandler} */
export function GET() {
  return new Response('pong')
}
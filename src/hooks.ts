// types
import type { Handle, GetSession } from "@sveltejs/kit";

import { defaultTheme, themeCookieName, cookieMaxAge } from "$lib/config";

import * as cookie from 'cookie';

export let handle: Handle = async ({ event, resolve }) => {
  console.log(event.clientAddress)
  console.log(event.locals)
  const reqCookies: ExtendedCookies = cookie.parse(event.request.headers.get('Cookie') || '')

  if (reqCookies.theme) {
    event.locals.theme = reqCookies.theme;
  } else {
    event.locals.theme = defaultTheme;
  }

  const response = await resolve(event);

  if (!reqCookies.theme) {
    response.headers.set(
      'Set-Cookie',
      cookie.serialize(themeCookieName, defaultTheme, { maxAge: cookieMaxAge, path: '/' }),
    )
  }
  return response;
}

export let getSession: GetSession = async ({ locals }) => {
  return {
    theme: locals.theme
  }
}

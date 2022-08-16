// types
import type { Writable } from 'svelte/store';
// svelte
import { writable } from 'svelte/store';
import { browser } from '$app/env';
// 3rd party
import Cookies from 'universal-cookie';
// project
import { themeCookieName, cookieMaxAge, defaultTheme } from './config';

const cookies = new Cookies();

export const theme: Writable<Theme> = (function () {
	let theme: Theme;
	if (browser) {
		theme = cookies.get('theme');
	} else {
		theme = defaultTheme;
	}
	const { set: setStoreTo, ...store } = writable(theme);

	return {
		...store,
		set: (newTheme: Theme) => {
			cookies.set(themeCookieName, newTheme, {
				path: '/',
				maxAge: cookieMaxAge
			});
			setStoreTo(newTheme);
		}
	};
})();
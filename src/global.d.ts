type Theme = 'dark' | 'light' | 'system';

/**
 * @param fixedProps contains all extra types to be added to the default cookie type
 * @param dynamicProps the default cookie type
 * @returns
 */
 function CookieFactory(
	fixedProps: { theme?: Theme },
	dynamicProps: Record<string, string>
) {
	return Object.assign({}, dynamicProps, fixedProps);
}

type ExtendedCookies = ReturnType<typeof CookieFactory>;
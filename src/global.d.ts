type Theme = 'dark' | 'light' | 'system';

interface PostMetadata {
  title: string;
  createdOn: string;
  lastUpdatedOn: string;
  excerpt: string;
}

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
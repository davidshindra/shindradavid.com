import type { RequestHandler } from './$types';

import { compareDesc } from 'date-fns';

export const GET: RequestHandler = async () => {
  const allPostFiles = import.meta.glob('../../blog/**/*.md');
  const iterablePosts = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const {metadata}: any = await resolver();
      const postPath = path.slice(5, -9);
      return {
        meta: metadata,
        path: postPath
      }
    })
  )
  const sortedPosts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.meta.createdOn), new Date(b.meta.createdOn));
  })

  const responseOptions = {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return new Response(JSON.stringify(sortedPosts), responseOptions);
}
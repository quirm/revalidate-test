import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag') || 'times';

  revalidateTag(tag);

  return Response.json({ revalidated: tag, type: 'tag' });
}

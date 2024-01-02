import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  const path = slug ? `/${slug}` : '/[slug]';

  revalidatePath(path, 'page');

  return Response.json({ revalidated: path, type: 'path (well, next.js kind of tag)' });
}

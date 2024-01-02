import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  let path = slug ? `/${slug}` : '/[slug]';

  if (slug) {
    revalidatePath(path, 'page');
  }

  return Response.json({ revalidated: path });
}

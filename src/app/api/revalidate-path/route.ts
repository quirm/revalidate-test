import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const value = req.nextUrl.searchParams.get('path');
  const path = value ? `/${value}` : '/[slug]';

  revalidatePath(path, 'page');

  return Response.json({ revalidated: path, type: 'path' });
}

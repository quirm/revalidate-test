import { revalidateTag } from 'next/cache';

export async function GET() {
  // https://github.com/vercel/next.js/blob/76fa80000a04baaa251112ef394653190fff88a4/packages/next/src/server/lib/patch-fetch.ts
  // https://github.com/vercel/next.js/blob/76fa80000a04baaa251112ef394653190fff88a4/packages/next/src/client/components/static-generation-async-storage.external.ts
  const store = (fetch as any).__nextGetStaticStore();

  return Response.json({ store });
}

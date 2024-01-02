# Next.js revalidation test

Trying to make sense of `revalidatePath()` and `revalidateTag()` in the app router.

## What's wrong?

- `revalidatePath('/[slug]', 'page')` - works
- `revalidatePath('/some-name', 'page')` - does not work
- `revalidateTag('unique-tag')` - works
- `revalidateTag('shared-tag')` - works
- All pages are served on the second request after the revalidation

## Project routes

The project has the following URLs for testing:

### `/[slug]`

Page fetching time for a specified town.

### `/tagged/[slug]`

Page fetching time for a specified town with explicit `{ next: { tags: ['times', slug] }}`.

### `/api/revalidate-path?path=zurich`

Use `revalidatePath(path, 'page')` or `revalidatePath('/[slug]', 'page')` if query param is missing.

### `/api/revalidate-tag?tag=zurich`

Use `revalidateTag(path)` or `revalidateTag('times')` if query param is missing.

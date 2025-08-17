import { getPostsMeta } from '@/lib/posts';
import ListItem from './ListItem';

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">Ledsen, inga blogg tillgängliga.</p>
    );
  }

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

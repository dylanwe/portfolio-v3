import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section id='projects'>
      <h2 className="mb-8 text-3xl md:text-5xl tracking-tighter leading-tight text-neutral-800 dark:text-neutral-200">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-y-12 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            thumbnailImage={post.thumbnailImage}
            date={post.date}
            emoji={post.emoji}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories

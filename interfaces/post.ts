import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  thumbnailImage: string
  technologies: string[]
  author: Author
  excerpt: string
  emoji: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType

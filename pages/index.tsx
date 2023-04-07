import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Dylan Weijgertze</title>
        </Head>
        <div>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'emoji',
    'thumbnailImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

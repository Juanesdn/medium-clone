import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Post from '../components/Post'
import { sanityClient, urlFor } from '../sanity'
import { Post as PostType } from '../typings'

interface Props {
  posts: [PostType]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      {/* Posts */}
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  // Sanity query for getting all posts
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
      name,
      image
    },
    mainImage,
    description
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

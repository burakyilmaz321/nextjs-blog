import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getRandomPost } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsDataServer }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Server side rendering
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsDataServer.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {id}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Server side rendering
export async function getServerSideProps() {
  const randomPost = await getRandomPost()
  const allPostsDataServer = [randomPost]
  return {
    props: {
      allPostsDataServer
    }
  }
}
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getRandomPost } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsDataStatic }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Static rendering with data
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsDataStatic.map(({ id, title }) => (
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

// Static rendering with data
export async function getStaticProps() {
  const randomPost = await getRandomPost()
  const allPostsDataStatic = [randomPost]
  return {
    props: {
      allPostsDataStatic
    }
  }
}

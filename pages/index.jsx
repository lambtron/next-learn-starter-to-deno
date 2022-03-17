// import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout.jsx";
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
import Date from "../components/date.jsx";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <head>
        {/* TODO: figure out how to append to `head` */}
        <title>{siteTitle}</title>
        <link href="/styles/utils.module.css" rel="stylesheet" />
      </head>
      <section className="headingMd">
        <p>
          Hello, I'm{" "}
          <strong>Shu</strong>. I'm a software engineer and a translator
          (English/Japanese). You can contact me on{" "}
          <a href="https://twitter.com/chibicode">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this in
          {" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ data }) => (
            <li className="listItem">
              <a href={data.url}>
                {data.title}
              </a>
              <br />
              <small className="lightText">
                <Date dateString={data.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Don't need this. Adding logic to include allPostsData into the index post in _config.ts.

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

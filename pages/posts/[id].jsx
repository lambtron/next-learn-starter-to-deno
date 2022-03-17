import Layout from "../../components/layout.jsx";
// import { getAllPostIds, getPostData } from '../../lib/posts'
// import Head from 'next/head'
import Date from "../../components/date.jsx";
// import utilStyles from '../../styles/utils.module.css'

export default function Post(data) {
  return (
    <Layout props={data}>
      <head>
        {/* TODO: figure out how to append to `head` */}
        <title>
          {data.title}
        </title>
        <link href="/styles/utils.module.css" rel="stylesheet" />
      </head>
      <article>
        <h1 className="headingXl">{data.title}</h1>
        <div className="lightText">
          <Date dateString={data.date} />
        </div>
        <div>
          {data.children}
        </div>
      </article>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

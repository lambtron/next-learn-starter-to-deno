// import Head from 'next/head'
// import Image from 'next/image'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'

const name = "Shu Uesugi";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ props, children }) {
  return (
    <html>
      <head>
        <link href="/styles/global.css" rel="stylesheet" />
        <link href="/styles/layout.module.css" rel="stylesheet" />
        <link href="/styles/utils.module.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content=""
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div className="container">
          <header className="header">
            {!props
              ? (
                <>
                  <img
                    src="/images/profile.jpg"
                    className="borderCircle"
                    height={144}
                    width={144}
                    alt={name}
                  />
                  <h1 className="heading2Xl">{name}</h1>
                </>
              )
              : (
                <>
                  <a href="/">
                    <img
                      src="/images/profile.jpg"
                      className="borderCircle"
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </a>
                  <h2 className="headingLg">
                    <a href="/" className="colorInherit">
                      {name}
                    </a>
                  </h2>
                </>
              )}
          </header>
          <main>{children}</main>
          {props && (
            <div className="backToHome">
              <a href="/">← Back to home</a>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}

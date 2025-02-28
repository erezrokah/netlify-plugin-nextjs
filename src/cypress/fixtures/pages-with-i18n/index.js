import Link from 'next/link'

const Index = ({ shows }) => (
  <div>
    <img src="/next-on-netlify.png" alt="NextJS on Netlify Banner" style={{ maxWidth: '100%' }} />

    <h1>NextJS on Netlify</h1>
    <p>
      This is a demo of a NextJS application with Server-Side Rendering (SSR).
      <br />
      It is hosted on Netlify.
      <br />
      Server-side rendering is handled by Netlify Functions.
      <br />
      Minimal configuration is required.
      <br />
      Everything is handled by the <a href="https://www.npmjs.com/package/next-on-netlify">next-on-netlify</a> npm
      package.
    </p>

    <h1>1. Server-Side Rendering Made Easy</h1>
    <p>
      This page is server-side rendered.
      <br />
      It fetches a random list of five TV shows from the TVmaze REST API.
      <br />
      Refresh this page to see it change.
    </p>

    <ul>
      {shows.map(({ id, name }) => (
        <li key={id}>
          <Link href="/shows/[id]" as={`/shows/${id}`}>
            <a>
              #{id}: {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <h1>2. Full Support for Dynamic Pages</h1>
    <p>
      Dynamic pages, introduced in NextJS 9.2, are fully supported.
      <br />
      Click on a show to check out a server-side rendered page with dynamic routing (/shows/:id).
    </p>

    <ul>
      {shows.slice(0, 3).map(({ id, name }) => (
        <li key={id}>
          <Link href="/shows/[id]" as={`/shows/${id}`}>
            <a>
              #{id}: {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <h1>3. Catch-All Routes? Included ✔</h1>
    <p>
      You can even take advantage of{' '}
      <a href="https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes">NextJS catch-all routes feature</a>
      .
      <br />
      Here are three examples:
    </p>
    <ul>
      <li>
        <Link href="/shows/[...params]" as={`/shows/73/whatever/path/you/want`}>
          <a>/shows/73/whatever/path/you/want</a>
        </Link>
      </li>
      <li>
        <Link href="/shows/[...params]" as={`/shows/94/whatever/path/you`}>
          <a>/shows/94/whatever/path/you</a>
        </Link>
      </li>
      <li>
        <Link href="/shows/[...params]" as={`/shows/106/whatever/path`}>
          <a>/shows/106/whatever/path</a>
        </Link>
      </li>
    </ul>

    <h1>4. getStaticProps? Yes!</h1>
    <p>next-on-netlify supports getStaticProps.</p>

    <ul>
      <li>
        <Link href="/getStaticProps/static">
          <a>getStaticProps/static</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/[id]" as="/getStaticProps/1">
          <a>getStaticProps/1 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/[id]" as="/getStaticProps/2">
          <a>getStaticProps/2 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[id]" as="/getStaticProps/withFallback/3">
          <a>getStaticProps/withFallback/3 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[id]" as="/getStaticProps/withFallback/4">
          <a>getStaticProps/withFallback/4 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[id]" as="/getStaticProps/withFallback/75">
          <a>getStaticProps/withFallback/75 (dynamic route, not pre-rendered)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withRevalidate/[id]" as="/getStaticProps/withRevalidate/3">
          <a>getStaticProps/withRevalidate/3 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withRevalidate/[id]" as="/getStaticProps/withRevalidate/4">
          <a>getStaticProps/withRevalidate/4 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[...slug]" as="/getStaticProps/withFallback/my/path/1">
          <a>getStaticProps/withFallback/my/path/1 (catch-all route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[...slug]" as="/getStaticProps/withFallback/my/path/2">
          <a>getStaticProps/withFallback/my/path/2 (catch-all route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/withFallback/[...slug]" as="/getStaticProps/withFallback/my/undefined/path/75">
          <a>getStaticProps/withFallback/my/undefined/path/75 (catch-all route, not pre-rendered)</a>
        </Link>
      </li>
    </ul>

    <h1>5. getServerSideProps? Yes!</h1>
    <p>next-on-netlify supports getServerSideProps.</p>

    <ul>
      <li>
        <Link href="/getServerSideProps/static">
          <a>getServerSideProps/static</a>
        </Link>
      </li>
      <li>
        <Link href="/getServerSideProps/[id]" as="/getServerSideProps/1337">
          <a>getServerSideProps/1337 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getServerSideProps/[id]" as="/getServerSideProps/1338">
          <a>getServerSideProps/1338 (dynamic route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getServerSideProps/catch/all/[...slug]" as="/getServerSideProps/catch/all/1337">
          <a>getServerSideProps/catch/all/1337 (catch-all route)</a>
        </Link>
      </li>
      <li>
        <Link href="/getServerSideProps/catch/all/[...slug]" as="/getServerSideProps/catch/all/1338">
          <a>getServerSideProps/catch/all/1338 (catch-all route)</a>
        </Link>
      </li>
    </ul>

    <h1>6. Preview mode? Yes!</h1>
    <p>next-on-netlify supports preview mode.</p>

    <ul>
      <li>
        <Link href="/previewTest/222">
          <a>previewTest/222</a>
        </Link>
      </li>
      <li>
        <Link href="/previewTest/static">
          <a>previewTest/static</a>
        </Link>
      </li>
    </ul>

    <h1>6. Static Pages Stay Static</h1>
    <p>
      next-on-netlify automatically determines which pages are dynamic and which ones are static.
      <br />
      Only dynamic pages are server-side rendered.
      <br />
      Static pages are pre-rendered and served directly by Netlify&apos;s CDN.
    </p>

    <ul>
      <li>
        <Link href="/static">
          <a>Static NextJS page: /static</a>
        </Link>
      </li>
      <li>
        <Link href="/static/[id]" as="/static/123456789">
          <a>Static NextJS page with dynamic routing: /static/:id</a>
        </Link>
      </li>
    </ul>

    <h1>Want to Learn More?</h1>
    <p>
      Check out the <a href="https://github.com/FinnWoelm/next-on-netlify-demo">source code on GitHub</a>.
    </p>
  </div>
)

Index.getInitialProps = async function () {
  // Set a random page between 1 and 100
  const randomPage = Math.floor(Math.random() * 100) + 1

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows?page=${randomPage}`)
  const data = await res.json()

  return { shows: data.slice(0, 5) }
}

export default Index

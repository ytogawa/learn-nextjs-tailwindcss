import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="m-0 leading-normal text-7xl text-center">
        Welcome to{' '}
        <a
          className="text-blue-600 no-underline focus:underline hover:underline active:underline"
          href="https://nextjs.org"
        >
          Next.js!
        </a>
      </h1>

      <p className="text-center">
        Get started by editing{' '}
        <code className="bg-gray-50 rounded p-3 text-lg font-sans">
          pages/index.tsx
        </code>
      </p>

      <div className="grid grid-cols-2 flex-wrap max-w-screen-md">
        <a
          href="https://nextjs.org/docs"
          className="m-4 p-6 text-left no-underline border rounded-lg border-gray-200 transition-colors hover:border-blue-600  hover:text-blue-600 max-w-xs"
        >
          <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
          <p className="m-0 text-xl">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="m-4 p-6 text-left no-underline border rounded-lg border-gray-200 transition-colors hover:border-blue-600  hover:text-blue-600 max-w-xs"
        >
          <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
          <p className="m-0 text-xl">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="m-4 p-6 text-left no-underline border rounded-lg border-gray-200 transition-colors hover:border-blue-600  hover:text-blue-600 max-w-xs"
        >
          <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
          <p className="m-0 text-xl">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="m-4 p-6 text-left no-underline border rounded-lg border-gray-200 transition-colors hover:border-blue-600  hover:text-blue-600 max-w-xs"
        >
          <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
          <p className="m-0 text-xl">
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </div>
  )
}

export default Home

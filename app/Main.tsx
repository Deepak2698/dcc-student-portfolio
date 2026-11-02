import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <section className="pt-10 pb-12 md:pt-16">
        <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase">
          {siteMetadata.role}
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          Hi, I&apos;m {siteMetadata.author}.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {siteMetadata.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="bg-primary-500 hover:bg-primary-400 rounded-lg px-5 py-2.5 font-semibold text-gray-950 transition-colors"
          >
            See my projects
          </Link>
          <Link
            href="/about"
            className="hover:border-primary-500 rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-900 transition-colors dark:border-gray-700 dark:text-gray-100"
          >
            About me
          </Link>
          {siteMetadata.resumeUrl && (
            <Link
              href={siteMetadata.resumeUrl}
              className="hover:border-primary-500 rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-900 transition-colors dark:border-gray-700 dark:text-gray-100"
            >
              Résumé
            </Link>
          )}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills">
          {siteMetadata.skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-gray-200 py-10 dark:border-gray-700">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Featured projects
            </h2>
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-400 text-sm font-semibold"
            >
              All projects &rarr;
            </Link>
          </div>
          <div className="-m-4 flex flex-wrap">
            {featured.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tech={d.tech}
              />
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-gray-200 pt-10 dark:border-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Latest writing
        </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <h3 className="text-xl leading-8 font-bold tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{summary}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-400"
              aria-label="All posts"
            >
              All posts &rarr;
            </Link>
          </div>
        )}
      </section>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

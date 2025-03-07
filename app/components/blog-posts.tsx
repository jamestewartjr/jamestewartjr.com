import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

interface BlogPostsProps {
  showSummaries?: boolean
  limit?: number
}

function truncateSummary(text?: string, maxLength: number = 180) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export default function BlogPosts({ showSummaries = false, limit }: BlogPostsProps) {
  let allBlogs = getBlogPosts()

  const sortedPosts = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  const displayPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts

  return (
    <div className="flex flex-col gap-6">
      {displayPosts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <div className="flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              {showSummaries && post.metadata.summary && (
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  {truncateSummary(post.metadata.summary)}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

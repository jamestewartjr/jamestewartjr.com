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
    <div className="w-full space-y-8 mb-8">
      {displayPosts.map((post) => (
        <Link 
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block text-left hover:opacity-80 transition-opacity"
        >
          <p className="text-xl text-gray-400 mb-2">{formatDate(post.metadata.publishedAt, false)}</p>
          <h2 className="text-2xl text-white font-normal leading-tight">
            {post.metadata.title}
          </h2>
          {showSummaries && post.metadata.summary && (
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
              {truncateSummary(post.metadata.summary)}
            </p>
          )}
        </Link>
      ))}
    </div>
  )
}

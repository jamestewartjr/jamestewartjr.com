import BlogPosts from 'app/components/blog-posts'
import EmailForm from "app/components/email-form"

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts showSummaries={true} />
      <EmailForm title={'Get new posts in your email'} page="blog"/>
    </section>
  )
}

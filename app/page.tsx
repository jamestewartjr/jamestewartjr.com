import BlogPosts from 'app/components/blog-posts'
import EmailForm from 'app/components/email-form'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome!
      </h1>
      <p className="mb-4">
        {`	I'm a software engineer, dad, and business owner. This is my part of the web.
          Currently, I spend most of time with my family and my business.`}
      </p>
      <div className="my-8">
        <BlogPosts limit={5} />
      </div>
      <EmailForm page="home"/>

    </section>
  )
}

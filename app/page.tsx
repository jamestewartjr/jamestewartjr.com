import BlogPosts from 'app/components/blog-posts'
import EmailForm from 'app/components/email-form'
import { SocialLinks } from './components/social-links'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome!
      </h1>
      <h3><i>Frontend engineer building modular, user-first AI tools.</i></h3>
      <br/>
      <p className="mb-4">
      I’m a frontend engineer transitioning into AI-focused UI development. 
      I enjoy building clean, reusable components and creating interfaces that make working with AI more practical and approachable. 
      Lately, I’ve been focused on prompt engineering and designing tools that help make complex workflows easier to manage.
      </p>
      <SocialLinks />
      <div className="my-8">
        <BlogPosts limit={5} />
      </div>
      <EmailForm page="home"/>

    </section>
  )
}

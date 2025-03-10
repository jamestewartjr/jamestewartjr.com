import Image from 'next/image'
import BlogPosts from 'app/components/blog-posts'
import EmailForm from 'app/components/email-form'

export const metadata = {
	title: 'Not Found',
	description: 'Where are you going? Unknown page on James Stewart Jr site',
	openGraph: {
		title: 'Not Found',
		description: 'Where are you going? Unknown page on James Stewart Jr site',
		images: [
			{
				url: '/images/404astronaut.png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Not Found',
		description: 'Where are you going? Unknown page on James Stewart Jr site',
		images: ['/images/404astronaut.png'],
	},
}

const NotFound = () => {
  return (
    <section>
        <h1>404</h1>
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
            I don't know where you are going!
        </h2>
        <h3>
            Not sure what you're looking for, but it's not here. Maybe do something else...
        </h3>
        <Image src="/images/404astronaut.png" alt="404 Astronaut floating in space" width={100} height={100} />
        <h4>
            Maybe read one of these recent articles I wrote?
        </h4>
        <div className="my-8">
          <BlogPosts limit={3} />
        </div>
        <EmailForm title="Or join my email newsletter" page="404"/>
      </section>
  )
}
export default NotFound;

import EmailForm from "app/components/email-form"

export const metadata = {
	title: 'About',
	description: 'About James Stewart Jr',
	image: '/images/jamestewartjr.jpg',
}

export default function About() {
  return (
    <section>
    	<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Current Projects</h1>
    	<p>
			Currently, I'm not looking for new software opportunities. 
		</p>
		<br />
		<p>
			I'm a Charlotte native and web developer currently working at Lowe's Inc. In my free time, 
			I spend my time being a dad and experimenting with AI and entrepreneurship.
		</p>	
		<EmailForm page="about"/>
    </section>
  )
}

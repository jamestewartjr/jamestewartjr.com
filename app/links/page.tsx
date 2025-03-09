import { type Metadata } from 'next'
import { type FC } from 'react'
import ProfileImage from '../components/profile/profile-image'
import AuthorBio from '../components/profile/author-bio'
import { SocialLinks } from '../components/social-links'
import BlogPosts from '../components/blog-posts'

export const metadata: Metadata = {
  title: 'James Stewart | Links',
  description: 'Connect with James Stewart on social media and other platforms',
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center">
          <ProfileImage />
          <AuthorBio />
          <h3 className="text-lg font-semibold text-white mb-4">Recent Articles</h3>
          <BlogPosts limit={3} />
          <SocialLinks size="large" />
        </div>
      </div>
    </main>
  )
} 
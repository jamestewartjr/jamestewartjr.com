import { type FC } from 'react'
import ProfileImage from './profile/profile-image'
import AuthorBio from './profile/author-bio'
import { SocialLinks } from './social-links'

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className = '' }) => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center">
          <ProfileImage />
          <AuthorBio />
          <SocialLinks />
        </div>
      </div>
    </main>
  )
}

export default ProfilePage 
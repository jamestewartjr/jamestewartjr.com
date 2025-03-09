import { type Metadata } from 'next'
import ProfilePage from '../components/profile/profile-page'

export const metadata: Metadata = {
  title: 'James Stewart | Links',
  description: 'Connect with James Stewart on social media and other platforms',
}

export default function LinksPage() {
  return <ProfilePage />
} 
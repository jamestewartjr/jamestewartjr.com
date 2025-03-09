import { socialLinks } from '../config/social-links';
import Link from "next/link"

interface SocialLinksProps {
    className?: string;
    size?: 'small' | 'large';
}

export function SocialLinks({ className = '', size = 'small' }: SocialLinksProps) {
    if (size === 'large') {
        return (
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg px-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.friendlyName}
                        href={social.link}
                        className="flex flex-col items-center w-full bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
                        rel={`noreferrer ${social.isWebmention ? "me authn" : ""}`}
                        target="_blank"
                        aria-label={social.friendlyName}
                    >
                        <div className="mb-2">
                            <social.Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium text-gray-200">{social.friendlyName}</span>
                    </a>
                ))}
            </div>
        )
    }

    return (
        <div className={`flex flex-wrap items-end gap-x-2 ${className}`}>
            <p>Find me on</p>
            <ul className="flex flex-1 items-center gap-x-2 sm:flex-initial">
                {socialLinks.map((social) => (
                    <li key={social.friendlyName} className="flex">
                        <a
                            className="inline-block"
                            href={social.link}
                            rel={`noreferrer ${social.isWebmention ? "me authn" : ""}`}
                            target="_blank"
                            aria-label={social.friendlyName}
                        >
                            <social.Icon className="h-8 w-8" aria-hidden="true" />
                            <span className="sr-only">{social.friendlyName}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
} 
import { socialLinks } from '../config/social-links';

interface SocialLinksProps {
    className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
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
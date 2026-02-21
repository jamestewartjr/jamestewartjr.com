import { render, screen } from '@testing-library/react';
import { SocialLinks } from '../social-links';
import { socialLinks } from '../../config/social-links';

describe('SocialLinks', () => {
    it('renders all social links', () => {
        render(<SocialLinks />);
        
        // Check if "Find me on" text is present
        expect(screen.getByText('Find me on')).toBeInTheDocument();
        
        // Check if all social links are rendered
        socialLinks.forEach((social) => {
            const link = screen.getByLabelText(social.friendlyName);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', social.link);
            expect(link).toHaveAttribute('target', '_blank');
        });
    });

    it('applies custom className', () => {
        const customClass = 'custom-class';
        render(<SocialLinks className={customClass} />);
        
        const container = screen.getByText('Find me on').parentElement;
        expect(container).toHaveClass(customClass);
    });

    it('renders large variant with icon tiles and webmention rel attributes', () => {
        render(<SocialLinks size="large" />);

        expect(screen.queryByText('Find me on')).not.toBeInTheDocument();

        socialLinks.forEach((social) => {
            const link = screen.getByLabelText(social.friendlyName);
            expect(link).toHaveAttribute('href', social.link);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
            expect(link).toHaveAttribute('rel', expect.stringContaining('me authn'));
            expect(screen.getByText(social.friendlyName)).toBeInTheDocument();
        });
    });
});

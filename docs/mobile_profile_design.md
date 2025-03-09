# Profile Page Design

## Overview
A mobile-first profile page that combines profile image, author biography, and social links into a clean, responsive layout.

## Requirements
- Mobile-first responsive design
- Semantic HTML structure
- Accessible to screen readers
- Smooth layout transitions between mobile and desktop views
- Integration of existing components:
  - ProfileImage
  - AuthorBio
  - SocialLinks

## Technical Design


### Layout Strategy
- Mobile (< 640px):
  - Single column layout
  - Image at top
  - Bio below image
  - Social links at bottom
  
- Tablet/Desktop (≥ 640px):
  - Two-column layout
  - Image left, bio right
  - Social links below bio

### Implementation Details
1. Create new component at `app/components/profile-page.tsx`
2. Use CSS Grid/Flexbox for responsive layout
3. Implement proper spacing and margins for readability
4. Ensure smooth transitions between breakpoints

### Styling
- Use Tailwind CSS for consistent styling
- Implement proper spacing and padding
- Ensure text remains readable at all viewport sizes

### Testing
- Component renders correctly
- Responsive layout works as expected
- All child components are properly integrated
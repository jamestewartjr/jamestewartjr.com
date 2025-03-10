# Blog Post Templates

This directory contains templates for creating new blog posts. These templates are not rendered in the public site.

## Usage

1. Copy the appropriate template from this directory
2. Create a new `.mdx` file in `app/blog/posts/` with the format: `YYYY-MM-DD_Your-Title-Here.mdx`
3. Update all frontmatter fields
4. Replace template content with your post content

## Available Templates

- `blog-post-template.mdx`: Standard blog post template with all required fields

## Required Fields

- `title`: Post title
- `summary`: Brief description for previews
- `pubDate`: Full publication datetime
- `categories`: Array of category tags
- `keywords`: Array of relevant keywords
- `slug`: URL-friendly version of title
- `publishedAt`: Publication date (YYYY-MM-DD)
- `image`: Path to the Open Graph image for social media previews

## Code Blocks Example

To add a code block in your MDX:

Basic code block:
```md
```js
function example() {
  console.log('Hello, World!');
}
```
```

With filename:
```md
```js:filename.js
your code here
```
```

The key differences to note:
- Use triple backticks with language identifier: ```js
- Can add filename with colon: ```js:filename.js
- Can add title/description in a comment
- The code block itself is nested within the MDX file's triple backticks
 
```js
  function example() {
    console.log('Hello, World!');
  }
  ```


  Or with a filename:


  ```js:example.js
  function example() {
    console.log('Hello, World!');
  }
  ```
  


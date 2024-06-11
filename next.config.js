const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
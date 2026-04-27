// next.config.mjs
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Keep options minimal — plugins often break Turbopack
  options: {
    remarkPlugins: [],   // Add 'remark-gfm' later if needed
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default nextConfig
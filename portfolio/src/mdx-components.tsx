// app/mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default Markdown elements here
    h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
    // Add more custom components as needed
    ...components,
  }
}
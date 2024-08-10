import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Programming Techie',
    default:
      'Sai Upadhyayula - Software Engineer, Author and Educator',
  },
  description:
    'I’m Sai, a software engineer based in Rotterdam, Netherlands. I created this website to document my learnings and share my knowledge with the world. I believe in continuous learning and I truly believe that teaching is the best form of learning. I try to share my knowledge through Youtube Videos, courses, blog posts and books.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

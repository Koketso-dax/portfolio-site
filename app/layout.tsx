import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./components/theme-provider"
import Header from './components/header'
import { Metadata } from 'next'
import GoogleAnalytics from './components/google-analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' })

export const metadata: Metadata = {
  title: 'Koketso Diale',
  applicationName: 'Koketso Diale',
  description: 'Portfolio website of Koketso Diale, a specialist in Backend Development, DevOps, and Data Science from Pretoria, South Africa.',
  keywords: ['Koketso Diale', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Pretoria', 'South Africa'],
  authors: [{ name: 'Koketso Diale'}],
  creator: 'Koketso Diale',
  openGraph: {
    siteName: 'Koketso Diale',
    title: 'Koketso Diale',
    description: 'Explore the portfolio of Koketso Diale, a Backend Developer, DevOps Engineer, and Data Scientist from Pretoria, South Africa.',
    images: [
      {
        url: 'https://github.com/Koketso-dax/portfolio-site/blob/2f4db035cb3d603d02e76f5fb1c4ebd5bf043c3e/public/profile.jpg',
        width: 164,
        height: 164,
        alt: 'Koketso Diale Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /** 
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Koketso Diale",
    "jobTitle": "Backend Developer, DevOps Engineer, Data Scientist",
    "description": "Specialist in Backend Development, DevOps, and Data Science from Pretoria, South Africa",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "South Africa"
    },
    "url": "https://koketso.is-a.dev",
    "sameAs": [
      "https://www.linkedin.com/in/koketso-diale",
      "https://github.com/Koketso-dax",
      "https://x.com/frostxbyte47"
    ]
  };
  */
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${inter.variable} ${merriweather.variable} font-serif`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>

    </html>
  )
}

import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./components/theme-provider"
import Header from './components/header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' })

export const metadata: Metadata = {
  title: 'Koketso Diale | Backend Developer, DevOps Engineer, Data Scientist',
  description: 'Portfolio of Koketso Diale, a specialist in Backend Development, DevOps, and Data Science from Pretoria, South Africa.',
  keywords: ['Koketso Diale', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Pretoria', 'South Africa'],
  authors: [{ name: 'Koketso Diale' }],
  creator: 'Koketso Diale',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://portfolio.koketsodiale.tech',
    siteName: 'Koketso Diale Portfolio',
    title: 'Koketso Diale | Backend, DevOps, Data Science Specialist',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Koketso Diale | Backend, DevOps, Data Science Specialist',
    description: 'Explore the portfolio of Koketso Diale, a Backend Developer, DevOps Engineer, and Data Scientist from Pretoria, South Africa.',
    images: ['https://www.koketso-diale.com/twitter-image.jpg'],
    creator: '@frostbyte47',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-serif`}>
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

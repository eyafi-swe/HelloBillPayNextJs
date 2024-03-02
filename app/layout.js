import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import GlobalReduxProvider from './GlobalRedux/provider'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VivaBillPay',
  description: 'Vivabillpay is a bill payment service for the modern age.',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
          <GlobalReduxProvider>
            <Header />
            <main className='mt-24 md:mt-28'>
              {children}
            </main>
            <Footer />
            <Toaster />
          </GlobalReduxProvider>
        </AuthProvider>
      </body>

    </html>
  )
}

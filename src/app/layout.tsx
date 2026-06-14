'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="Real estate, Property sale, Property buy" />
        <meta name="description" content="UA Properties is a beautiful website designed for Real Estate Agency." />
        <meta property="og:site_name" content="UA Properties" />
        <meta property="og:url" content="https://creativegigstf.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UA Properties - Real Estate React Next js" />
        <meta name='og:image' content='images/assets/ogg.png' />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#070707" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#070707" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#070707" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}

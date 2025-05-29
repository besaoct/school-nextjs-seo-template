import type React from "react"
import type { Metadata } from "next"
import {  Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BASE_URL, SEO } from "@/seo/constants"

const font = Poppins({
  subsets: ["latin"],
  weight: "400"
})

//* Default SEO metadata. This will be used unless individual pages specify their own metadata. Bujso suhel bhai 😉
export const metadata: Metadata = SEO.metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <link rel="canonical" href={BASE_URL} />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/hero.png" type="image/x-icon" /> 
         {/* change the above icon image according to your need */}
      </head>

      <body className={`${font.className}`} cz-shortcut-listen="true">
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

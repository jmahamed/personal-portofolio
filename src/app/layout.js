import './globals.css'


export const metadata = {
  title: 'Personal Portofolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

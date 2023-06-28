import '../styles/globals.css'

export const metadata = {
  title: 'PLog',
  description: 'developed by Poma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

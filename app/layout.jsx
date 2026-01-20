import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'TOS Network Documentation',
  description: 'OpenSystem Network - The Open Economic Operating System. BlockDAG with Privacy, Scalability, and Smart Contracts',
  keywords: ['TOS', 'blockchain', 'privacy', 'smart contracts', 'documentation', 'A2A'],
  author: 'TOS Network Team'
}

const navbar = (
  <Navbar
    projectLink="https://github.com/tos-network"
    logo={<div className="nx-flex nx-items-center">
        <span style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #00d4ff, #00b8d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginRight: '0.5rem'
        }}>
          TOS
        </span>
        <span style={{
          fontSize: '1rem',
          color: '#666',
          fontWeight: 'normal'
        }}>
          Network
        </span>
    </div>}
  />
)

const footer = <Footer>
    {new Date().getFullYear()} © <a href="https://tos.network" target="_blank">TOS Network</a> | OpenSystem Network
</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 195, saturation: 100 }}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00d4ff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="TOS Network Documentation - OpenSystem Network: The Indestructible Topology with Privacy and Smart Contracts" />
        <meta property="og:title" content="TOS Network Documentation" />
        <meta property="og:description" content="BlockDAG with Privacy, Scalability, and Smart Contracts" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tos-network/docs/blob/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
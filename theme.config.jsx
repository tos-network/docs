import { useRouter } from 'next/router'

const config = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
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
    </div>
  ),
  project: {
    link: 'https://github.com/tos-network/docs'
  },
  docsRepositoryBase: 'https://github.com/tos-network/docs/blob/master',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © <a href="https://tos.network" target="_blank">TOS Network</a> | Trustless Open System
      </span>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="TOS Network Documentation" />
      <meta property="og:description" content="World's first BlockDAG with Privacy, Scalability, AI-Mining, and Smart Contracts" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – TOS Network'
      }
    }
  }
}

export default config
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Este es mi home"
      className={utilStyles.headingMd}
      home
    >
      <section>
        <p>Mi introduction</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

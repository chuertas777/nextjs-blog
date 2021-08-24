import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Layout({ children, title, description, home }) {

    const name = "Maxmedia";

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="Mi sitio web" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/img/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/img/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
                <nav>
                    <Link href="/">
                        <a>Inicio | </a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog | </a>
                    </Link>
                    <Link href="/blog/">
                        <a>Post | </a>
                    </Link>
                    <Link href="/contact">
                        <a>Contacto | </a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

Layout.defaultProps = {
    title: "Mi sitio Web con Next",
    description: "Aprendiendo NextJS"
}

import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header/Header'

const Home: FC = () => {
  const year = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <Image src={Logo} alt="Leboncoin's logo" width={400} height={125} />
      </main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  )
}

export default Home

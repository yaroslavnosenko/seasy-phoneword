import type { NextPage } from 'next'
import Head from 'next/head'
import { Keyboard } from '../components'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seasy Phoneword</title>
        <meta name="description" content="Phoneword assigment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Keyboard onKeyAdd={() => {}} onKeyRemove={() => {}} />
      </main>
    </div>
  )
}

export default Home

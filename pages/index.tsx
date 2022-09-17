import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Input, Keyboard } from '../components'
import styles from '../styles/Home.module.scss'
import { Key } from '../types'

const Home: NextPage = () => {
  const [input, setInput] = useState<string>('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Seasy Phoneword</title>
        <meta name="description" content="Phoneword assigment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Input value={input} />
        <Keyboard
          onKeyAdd={(key: Key) => setInput(input + key.id)}
          onClear={() => setInput('')}
        />
      </main>
    </div>
  )
}

export default Home

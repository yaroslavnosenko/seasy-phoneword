import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Input, Keyboard, Phonewords } from '../components'
import { usePhonewords } from '../hooks'
import { Key } from '../types'

const Home: NextPage = () => {
  const [input, setInput] = useState<string>('')
  const { data, loading, error } = usePhonewords(input)
  return (
    <div className="container">
      <Head>
        <title>Seasy Phoneword</title>
        <meta name="description" content="Phoneword assigment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Phonewords phonewords={data} loading={loading} error={error} />
      <Input value={input} />
      <Keyboard
        onKeyAdd={(key: Key) => setInput(input + key.id)}
        onClear={() => setInput('')}
      />
    </div>
  )
}

export default Home

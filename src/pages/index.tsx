import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { TextHeader } from '../components/TextHeader'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <TextHeader />
    </>
  )
}

export default Home

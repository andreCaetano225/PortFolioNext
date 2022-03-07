import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/TextHeader';
import { useHomeHooks } from '../hooks/home.hooks';

const Home: NextPage = () => {
  const { ButtonThemeBlack, ButtonThemeWhite, buttonTheme } = useHomeHooks()
  return (
    <>
      <Header buttonThemeBlack={ButtonThemeBlack} buttonThemeWhite={ButtonThemeWhite} buttonThemes={buttonTheme} />
      <HomePage buttonThemes={buttonTheme} />
    </>
  )
}

export default Home

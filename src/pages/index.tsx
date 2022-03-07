import type { NextPage } from 'next';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/TextHeader';
import { useHomeHooks } from '../hooks/home.hooks';

const Home: NextPage = () => {
  const { ButtonThemeBlack, ButtonThemeWhite, buttonTheme, buttonThemeTest, } = useHomeHooks()
  return (
    <>
      <Header buttonThemeBlack={ButtonThemeBlack} buttonThemeWhite={ButtonThemeWhite} buttonThemes={buttonTheme} />

      <HomePage colortheme={buttonThemeTest} />
    </>
  )
}

export default Home

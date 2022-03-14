import type { NextPage } from 'next';
import { Habilidade } from '../components/Habilidades';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/TextHeader';
import { useHomeHooks } from '../hooks/home.hooks';

const Home: NextPage = () => {
  const { ButtonThemeBlack, ButtonThemeWhite, buttonTheme, buttonThemeTest, habilidadePage, homePage, OnclickHabilidade, OnclickHomePage } = useHomeHooks()
  return (
    <>
      <Header
        buttonThemeBlack={ButtonThemeBlack}
        buttonThemeWhite={ButtonThemeWhite}
        buttonThemes={buttonTheme}
        onClickHabilidade={OnclickHabilidade}
        onClickHomePage={OnclickHomePage}
      />
      <div>

        {homePage ? (
          <>
            <HomePage colortheme={buttonTheme} />
          </>
        ) : (
          <>
            <Habilidade colortheme={buttonTheme} />
          </>
        )}
      </div>
    </>
  )
}

export default Home

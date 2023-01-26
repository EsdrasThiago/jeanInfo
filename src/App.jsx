import { useEffect } from 'react'
import { useState } from 'react'
// import jeanApi from './middlewares/genshinApi';
import apiCharacter from './assets/jeanObject';
import './App.css'

function App() {

  const [character, setCharacter] = useState({});
  const [infoArray, setInfoArray] = useState([]);
  const [titleArray, setTitleArray] = useState([]);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      // const apiCharacter = await jeanApi();
      const { constellations, outfits, passiveTalents, skillTalents } = apiCharacter;
      setInfoArray([constellations, outfits, passiveTalents, skillTalents]);
      setCharacter(apiCharacter);
    }
    const titles = ['Constelações', 'Roupas', 'Talentos passivos', 'Talentos ativos']
    setTitleArray(titles);
    callApi();
  }, [])

  const nextButton = () => {
    if (arrayPosition < infoArray.length - 1) return setArrayPosition(arrayPosition + 1);
    setArrayPosition(0);
  }

  return (
    <div className="principal">
      <div className={visible ? "character--geral" : "character--invisible"}>
        <main className="character--principal">
          <h1>{character.name}</h1>
          <h2>{character.affiliation}</h2>
          <h2>{character.constellation}</h2>
          <button type='button' onClick={nextButton} className="next--button">Proximo</button>
        </main>
        <aside className="character--infos">
          <h1>{titleArray[arrayPosition]}:</h1>
          {infoArray[arrayPosition]?.map((e) => (
            <div key={e.name}>
              <h1>{e.name}</h1>
              <p className="infos--description">{e.description}</p>
              {e.price && <h3>Preço: {e.price} Genesis Crystals</h3>}
              {e.image && <img src={e.image} className="character--image" draggable="false" />}
            </div>
          ))}
        </aside>
      </div>
      <button type='button' className='remove--button' onClick={() => setVisible(!visible)}>Ver wallpaper</button>
    </div>
  )
}

export default App

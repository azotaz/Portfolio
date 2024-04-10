import './app.scss';
import {Routes, Route} from "react-router-dom"
import { StyleSheetManager } from 'styled-components';

import Acceuil from "./Composants/Accueil/Page Principal"
import Navigation from './Composants/Navigation/Navigation'

function App() {
  return (
    <StyleSheetManager>
    <div className="App">
      <header className="App-header">
      <Navigation/>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Acceuil />}/>
        </Routes>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
    </StyleSheetManager>
  );
}

export default App;

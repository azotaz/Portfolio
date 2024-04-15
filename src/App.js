import './app.scss';
import {Routes, Route, useLocation} from "react-router-dom"
import { StyleSheetManager } from 'styled-components';

import Acceuil from "./Composants/Accueil/Page Principal"
import Projet from "./Composants/Projet/Projet"
import Navigation from './Composants/Navigation/Navigation'
import Footer from './Composants/footer/footer'


function App() {
  const location = useLocation();
  const isProjetRoute = location.pathname.startsWith('/Portfolio');
  return (
    <StyleSheetManager>
    <div className="App">
    {!isProjetRoute && (
    <header className="App-header">
      <Navigation/>
      </header>
      )}
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Acceuil />}/>
          <Route path="/Portfolio/:id" element={<Projet />}/>
        </Routes>
      </main>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
    </StyleSheetManager>
  );
}

export default App;

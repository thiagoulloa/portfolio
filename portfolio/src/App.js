// Importando as bibliotecas necessárias
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Importando os componentes de páginas
import Projetos from "./components/projetos";
import Formacoes from "./components/formacoes";
import Experiencia from "./components/experiencia";
import Habilidades from "./components/habilidades";
import Contato from "./components/contato";
import Header from "./components/header";
import Home from "./components/home";

// Componente principal
function App() {
  return (
    <Router>
      <html>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
        {/* Incluindo o Header em todas as páginas */}
        <Header />

        {/* Configurando as rotas para os diferentes componentes de páginas */}
        <Routes>
          <Route path="/projetos" component={Projetos} />
          <Route path="/formacoes" component={Formacoes} />
          <Route path="/experiencia" component={Experiencia} />
          <Route path="/habilidades" component={Habilidades} />
          <Route path="/contato" component={Contato} />
          <Route path="/" component={Home} />
        </Routes>
      </html>
    </Router>
  );
}

export default App;

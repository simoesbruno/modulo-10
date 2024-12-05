import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import React from 'react';
import Login from "./pages/Login/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;

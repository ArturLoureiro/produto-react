import { HashRouter, Routes, Route } from "react-router-dom";
import TelaProduto from "./TelaProduto";
import TelaProdutoEditar from "./TelaProdutoEditar";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TelaProduto />} />

        <Route path="/detalhes/:id" element={<TelaProdutoEditar />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
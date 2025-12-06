import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaProduto from "./TelaProduto";
import TelaProdutoEditar from "./TelaProdutoEditar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaProduto />} />

        <Route path="/detalhes/:id" element={<TelaProdutoEditar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
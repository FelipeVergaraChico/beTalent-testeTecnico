import { useState } from "react";
import Table from "./Components/Table/Table";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <header>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Logo" />
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <h1>Funcionários</h1>
      <Table search={searchTerm} />
    </div>
  );
};

export default App;

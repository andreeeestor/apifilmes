import { useState, useEffect } from "react";
import FilmesCard from "../../components/CardFilmes";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (input === "") return;

    navigate(`/detalhes/${input}`)
  };

  useEffect(() => {
    fetch("/filmes.json")
      .then((res) => res.json())
      .then((data) => setFilmes(data));
  }, []);
  const filmesFiltrados = filmes.filter(
    (filme) => !anoSelecionado || filme.ano === anoSelecionado
  );
  return (
    <>
      <ul className="listaAnos">
        <li>
          <button onClick={() => setAnoSelecionado(2019)}>2019</button>
        </li>
        <li>
          <button onClick={() => setAnoSelecionado(2020)}>2020</button>
        </li>
        <li>
          <button onClick={() => setAnoSelecionado(2021)}>2021</button>
        </li>
        <li>
          <button onClick={() => setAnoSelecionado(2022)}>2022</button>
        </li>
        <li>
          <button onClick={() => setAnoSelecionado(2023)}>2023</button>
        </li>
        <li>
          <button onClick={() => setAnoSelecionado(null)}>Todos</button>
        </li>
      </ul>
      <form onSubmit={submit}>
        <input type="text" placeholder="Buscar" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <hr />
      <div className="filmesCard">
        {filmesFiltrados.map((filme) => (
          // <FilmesCard key={filme.id} nome={filme.nome} capa={filme.capa} genero={filme.genero} descricao={filme.descricao} ano={filme.ano} verMais={() => setVerMais(true)} />
          <FilmesCard
            key={filme.id}
            id={filme.id}
            nome={filme.nome}
            capa={filme.capa}
            genero={filme.genero}
            descricao={filme.descricao}
            ano={filme.ano}
            verMais={`/detalhes/${filme.id}`}
          />
        ))}
      </div>
    </>
  );
}

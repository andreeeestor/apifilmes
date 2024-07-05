import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Detalhes() {
  const { filmeId } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`/filmes.json`)
      .then((res) => res.json())
      .then((data) => {
        const filmeEncontrado = data.find((f) => f.id === parseInt(filmeId));
        if (filmeEncontrado) {
          setFilme(filmeEncontrado);
        } else {
          navigate("/");
        }
      })
      .catch((erro) => {
        console.log(erro);
        navigate("/");
      });
  }, [filmeId, navigate]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{filme.nome}</h1>
      <img src={filme.capa} alt={filme.nome} />
      <p>{filme.genero}</p>
      <p>{filme.descricao}</p>
      <p>{filme.ano}</p>
      <Link to={"/"}>Voltar</Link>
    </div>
  );
}

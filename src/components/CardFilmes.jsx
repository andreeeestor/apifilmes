import { Link, useNavigate } from "react-router-dom";

export default function FilmesCard({id, nome, capa, genero, descricao, ano, verMais, filme}) {
    
    const navigate = useNavigate()

    const VerMaisLink = () => {
        navigate(`/detalhes/${id}`)
    }
    
    return(
        <div>
            <img src={capa} alt={nome} width={200} />
            <h1>{nome}</h1>
            <h6>{ano}</h6>
            <button onClick={VerMaisLink}>Ver Mais</button>
            {/* <Link to={verMais}>Ver Mais</Link> */}
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
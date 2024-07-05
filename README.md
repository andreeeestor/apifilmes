Melhor passo a passo do brasil(não ta tudo explicado):

INÍCIO:
1) Apague tudo e limpe o que não for usar
2) Comece estilizando tirando o padding e margin no * e coloque a medida no body(width:100%, max-width:1440px, margin: 0 auto)
3) se quiser também já deixa o button com o cursor: pointer e o links com text-decoration: none

ENTÃO NESSA APLICAÇÃO TEREMOS 3 PÁGINAS: HOME, DETALHES E NOT FOUND

4) npm i react-router-dom
5) Crie a pasta 'pages' com as 3 pastas com nome de cada página com o index.jsx
6) Crie o routes.jsx e dentro dela:
-------
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detalhes from "./pages/details";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes" element={<Detalhes />} />
            </Routes>
        </Router>
    );
}
-------

FUNCIONALIDADE DO FORMULÁRIO:
1) Criar o useState 'input' e colocar o value do input de busca e o onChange
2) Faça o evento da função submit para navegar para a página de detalhes com o 'useNavigate'
3) Fazer uma pequena validação do campo se estiver nulo
4) Agora implemente o input dentro da função de navigate

PÁGINA DETALHES DE FILMES:
1) Agora no arquivo jsx de detalhes comece importando o 'useParams' e 'useNavigate' do react-router-dom 
2) Faça o useEffect mas com a dependência do 'useParams'
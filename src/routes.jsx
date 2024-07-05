import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import NotFound from "./pages/404"
import Detalhes from "./pages/detalhes"

export default function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />                
                <Route path="/detalhes/:filmeId" element={<Detalhes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
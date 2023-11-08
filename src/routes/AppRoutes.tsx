import {Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage"
import Administracion from "../pages/Administracion.tsx";
import Componentes from "../pages/Componentes.tsx";
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
        </Routes>
    )
}
export default AppRoutes
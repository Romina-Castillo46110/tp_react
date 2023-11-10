import Header from "./components/Header/Header.tsx";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Container} from "react-bootstrap";
import {Suspense} from "react";
import Loader from "./components/Loader/Loader.tsx";
import Administracion from "./pages/Administracion.tsx";

function App() {

  return (
    <>
        <Router>
            <Header/>
                <Container style ={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
                    <Suspense fallback={<Loader/>}>
                        <AppRoutes/>
                        <Administracion/>
                    </Suspense>
                </Container>
            <Footer/>
        </Router>
    </>
  )
}

export default App

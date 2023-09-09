import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "./pages/Home.tsx";
import {BRANDS} from "./pages/BRANDS.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";


const App = function (){
    return  (
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/brands" element={<BRANDS/>}/>
                </Routes>
            </Container>
        </ShoppingCartProvider>

    )
}

export default App


//TODO: correct router with right versioning
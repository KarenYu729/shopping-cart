import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import NavBarComponent from "./components/NavBar.component";
import {ShopContextProvider} from "./context/ShopContext";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <ShopContextProvider>
                    <NavBarComponent/>
                    <Container className={"mb-4"}>
                        <Routes>
                            <Route path={"/shopping-cart/"} element={<Home/>}></Route>
                            <Route path={"/shopping-cart/store"} element={<Store/>}></Route>
                            <Route path={"/shopping-cart/cart"} element={<Cart/>}></Route>
                        </Routes>
                    </Container>
                </ShopContextProvider>


            </div>
        );
    }


}


export default App;

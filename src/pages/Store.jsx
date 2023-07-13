import {Component} from "react";
import storeItems from "../data/items.json"
import {Row} from "react-bootstrap";
import 'animate.css';

import StoreItemsComponent from "../components/StoreItems.component";
import "./StoreStyle.css"
import {ShopContextProvider} from "../context/ShopContext";

// import MyComponent from "../components/StoreItems.component";

class Store extends Component {

    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    {storeItems.length}*/}
                {/*</div>*/}
                <div className={"StoreTitle"}>
                    <h1 className={"animate__animated animate__tada"}>Welcome to Jiahui's Store</h1>
                    <div>
                        <h5 className={"animate__animated animate__fadeInDown"}>But you cannot buy anything here
                            (●´∀｀●)</h5>
                    </div>
                </div>
                <div className={"products"}>
                    {/*<ShopContextProvider>*/}


                        {/*<ContextProvider>*/}
                        {/*    <MyComponent /> /!* This component uses the Context states *!/*/}
                        {/*</ContextProvider>*/}
                        {
                            storeItems.map(Item => {
                                return (
                                    <StoreItemsComponent Item={Item}/>
                                )
                            })
                        }
                    {/*</ShopContextProvider>*/}
                </div>
            </div>
        );
    }
}

export default Store;
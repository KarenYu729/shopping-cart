import React, {useContext} from "react";
import './StoreItems.styles.css'
import ShopContext from "../context/ShopContext";
import storeItems from "../data/items.json"

// import {Button, Card} from "react-bootstrap";
// import { formatCurrency } from "../utilities/formatCurrency"


// class StoreItemsComponent extends Component {
//     render() {
//         const {name, id, price, imgUrl} = this.props.Item;
//         return (
//             <Container style={{marginTop: "5em"}}>
//                 <div className={'card-container'} key={id}>
//                     <img alt={`book ${name}`} src={imgUrl}/>
//                     <h5>{name}</h5>
//                     <h6>{`\$ ${price}`}</h6>
//
//                 </div>
//             </Container>
//         )
//     }
// }


const StoreItemsComponent = (props) => {

    const {name, id, price, imgUrl} = props.Item;
    //
    // var k = storeItems[1]['id'];
    // var data = storeItems[1]['price'];
    // let itemInfo = storeItems.find((product) => product.id === Number('10'));
    // // //do something with k or data...
    // //
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    // console.log(addToCart);
    return (
        // <div>{cartItems}</div>
        <div className={"product"} key={id}>

            <img src={imgUrl}/>
            <div className={"description"}>
                <p>{name}</p>
                <p>${price}</p>
                <div>
                    {/*<button className="addToCartBttn">Add To Cart*/}
                    <button className="addToCartBttn" onClick={() => addToCart(id)}>
                        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button>
                </div>
            </div>

        </div>


        // <div key={id}>
        //     {name}
        //     {/*<Card key={id}>{name}</Card>*/}
        // </div>
        // //className={"h-100"} key={id}>
        // <Card key={id}>
        //     <Card.Img variant={"top"} src={imgUrl} height={"210px"}
        //               style={{objectFit: "cover"}}>
        //
        //     </Card.Img>
        //     <Card.Body className={"d-flex flex-column"}>
        //         <Card.Title className={"d-flex justify-content-between " +
        //             "align-items-baseline mb-4"}>
        //             <span className={"fs-7"}>{name}</span>
        //
        //             <span className={"ms-3 text-muted"}>{`\$${price}`}</span>
        //         </Card.Title>
        //         <div className={"mt-auto"}>
        //             {quantity === 0 ? (
        //                     <Button className={"w-100"}>
        //                         + Add To Cart
        //                     </Button>
        //                 ) :
        //                 (
        //                     <div
        //                         className="d-flex align-items-center flex-column"
        //                         style={{gap: ".5rem"}}
        //                     >
        //                         <div
        //                             className="d-flex align-items-center justify-content-center"
        //                             style={{gap: ".5rem"}}
        //                         >
        //                             {/*<Button onClick={() => decreaseCartQuantity(id)}>-</Button>*/}
        //                             <Button>-</Button>
        //                             <div>
        //                                 <span className="fs-3">{quantity}</span> in cart
        //                             </div>
        //                             <Button>+</Button>
        //                             {/*<Button onClick={() => increaseCartQuantity(id)}>+</Button>*/}
        //                         </div>
        //                         {/*<Button*/}
        //                         {/*    onClick={() => removeFromCart(id)}*/}
        //                         {/*    variant="danger"*/}
        //                         {/*    size="sm"*/}
        //                         {/*>*/}
        //                         {/*    Remove*/}
        //                         {/*</Button>*/}
        //                     </div>)}
        //         </div>
        //     </Card.Body>
        // </Card>
    )

}

export default StoreItemsComponent;
// import Context from "../context/ShopContext";
// import { useContext } from 'react';
//
// function MyComponent() {
//   const { firstName, lastName } = useContext(Context);
//   return (
//     <div>
//       <h1>{firstName} {lastName}</h1>
//     </div>
//   );
// }
// export default MyComponent;
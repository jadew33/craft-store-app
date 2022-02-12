import { useDispatch } from "react-redux";

function CartListing({ craft, cartQuantity }) {
    const { name, id, price, imageUrl } = craft;
    const dispatch = useDispatch();
    const handleClick = () => {
        cartQuantity != 0 &&
        dispatch({ type: "REMOVE_FROM_CART", payload: id })

    }
    return (<div className="cart-listing">
        <img src={imageUrl} alt={name} />
        <div className="text">
            <h1>{name}</h1>
            <p>Quantity: {cartQuantity}</p>
            <p>${price*cartQuantity} (${price} each)</p>
            <button onClick={handleClick}>Remove One</button>
        </div>
    </div>);
}

export default CartListing;
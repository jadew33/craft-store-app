import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDisplayName, toTitleCase } from "../helpers/helpers"
import Navbar from "./Navbar";
import { addToCart } from '../redux/Shopping/shopping-actions';


function CraftListing({ craft, addToCart }) {
    const { name, id, category, price, imageUrl, quantity } = craft;
    const dispatch = useDispatch();

    const handleClick = () => {
        quantity != 0 &&
            dispatch({ type: "ADD_TO_CART", payload: id })
    }

    return (<>
        <Navbar />
        <div className="craft-listing">
            <div className="frame">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="craft-listing__text">
                <h1>{name}</h1>
                <p className="category">{toTitleCase(category)}</p>
                <p>${price}</p>
                <p className={`${quantity === 0 && 'none-left'}`}>Quantity Left: {quantity}</p>
                {/* <button onClick={() => addToCart(id)}>Add to cart</button> */}
                <button onClick={handleClick} className={`${quantity === 0 && 'shake'}`}>Add to cart</button>
            </div>

        </div>
        <Link to={`/${category}`} className="craft-listing__link link hover-underline-animation">Back to {getDisplayName(category)}</Link>
    </>);
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id))
//     }
// }
// export default connect(null, mapDispatchToProps)(CraftListing);
export default CraftListing;
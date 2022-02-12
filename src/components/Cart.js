import { useSelector } from "react-redux";
import NavBar from "./Navbar";
import CartListing from "./CartListing";

function Cart() {
    const cart = useSelector(state => state.shop.cart);

    const getTotal = () => {
        let total = 0
        if (!cart) return 0;
        cart.map(item => total += (item.price * item.cartQuantity))
        return total;
    }

    return (<>
        <NavBar />
        <div className="cart">
            {getTotal() !== 0
                ? <div>{cart.map(item => item.cartQuantity > 0 && <CartListing craft={item} cartQuantity={item.cartQuantity} />)}</div>
                : <h2>You have yet to add anything to your cart :)</h2>
            }
        </div>
        <h2>Total: ${getTotal()}</h2>
    </>);
}

export default Cart;
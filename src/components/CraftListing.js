import { Link } from "react-router-dom";
import { getDisplayName, toTitleCase } from "../helpers/helpers"
import Navbar from "./Navbar";

function CraftListing({ craft }) {
    const { name, id, category, price, imageUrl, quantity } = craft;
    return (<><Navbar />
        <div>
            <img src={imageUrl} alt={name} />
            <h1>{name}</h1>
            <h2>{toTitleCase(category)}</h2>
            <h2>{price}</h2>
            <h2>In Stock: {quantity}</h2>
            <Link to={`/${category}`}>Back to {getDisplayName(category)}</Link>
        </div> </>);
}

export default CraftListing;
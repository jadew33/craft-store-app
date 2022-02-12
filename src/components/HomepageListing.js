import { Link } from "react-router-dom";
import { getDisplayName } from "../helpers/helpers";

function HomepageListing({ craft }) {
    const { name, id, category, price, imageUrl } = craft;
    return (
    <Link to={category} className="link">
        <div className="homepage-listing zoom" >
            <img src={craft.imageUrl} />
            <p>{getDisplayName(category)}</p>
        </div>
    </Link>);
}

export default HomepageListing;
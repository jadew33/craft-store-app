import { Link } from "react-router-dom"

function CategoryListing({ craft }) {
    const { name, id, category, price, imageUrl } = craft;
    return (
        <Link to={`/listing/${id}`}>
            <div className="category-listing zoom">
                <img src={imageUrl} alt="Sorry, Cloudinary seems to be down :(" className="category-listing__image"></img>
                <div className="category-listing__text">
                    <p className="name">{name}</p>
                    <p className="price">${price}</p>
                </div>
            </div>
        </Link>
    );
}

export default CategoryListing;
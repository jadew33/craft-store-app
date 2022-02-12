import CategoryListing from './CategoryListing';
import { getDisplayName } from "../helpers/helpers"
import Navbar from "./Navbar";
import {connect, useSelector} from 'react-redux';

function CategoryHome({ category }) {
    const crafts = useSelector((state) => state.shop.products);
    return (<>        <Navbar />
        <div className='category-home'>
            <h1>{getDisplayName(category)}</h1>
            <div className='grid-container'>
                {crafts.map(craft => craft.category === category && <CategoryListing craft={craft} key={craft.id} />)}
            </div>
        </div></>
    );
}

// now have access in props
// const mapStateToProps = state => {
//     return {
//         crafts: state.shop.products,
//     }
// }

export default CategoryHome;
// export default connect(mapStateToProps)(CategoryHome);
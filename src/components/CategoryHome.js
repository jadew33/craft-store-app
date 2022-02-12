import CategoryListing from './CategoryListing';
import { CraftContext } from '../hooks/CraftContext';
import { useContext } from 'react';
import { getDisplayName } from "../helpers/helpers"
import Navbar from "./Navbar";

function CategoryHome({ category }) {
    const [crafts, setCrafts] = useContext(CraftContext);
    return (<>        <Navbar />
        <div className='category-home'>
            <h1>{getDisplayName(category)}</h1>
            <div className='grid-container'>
                {crafts.map(craft => craft.category === category && <CategoryListing craft={craft} />)}
            </div>
        </div></>
    );
}

export default CategoryHome;
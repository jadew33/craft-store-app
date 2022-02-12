import React, { useContext } from 'react';
import { CraftContext } from "../hooks/CraftContext"
import HomepageListing from './HomepageListing';

function Homepage() {
    const [crafts, setCrafts] = useContext(CraftContext)
    return (
        <div className="homepage">
            <h1>Shop Carefully Handcrafted:</h1>
            <div className="grid-container">
                {crafts.map(craft => craft.display && <HomepageListing craft={craft} key={craft.id} />)}
            </div>
        </div>
    );
}

export default Homepage;
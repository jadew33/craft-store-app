import React from 'react';
import HomepageListing from './HomepageListing';
import { useSelector } from 'react-redux';

function Homepage() {
    const crafts = useSelector((state) => state.shop.products)
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
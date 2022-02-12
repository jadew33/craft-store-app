import React, {useContext} from 'react';
import {CraftContext} from "../hooks/CraftContext"

function HomepageList() {
    const [crafts, setCrafts] = useContext(CraftContext)
    return ( <div>Homepageee {console.log(crafts)}</div> );
}

export default HomepageList;
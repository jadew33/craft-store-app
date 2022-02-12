import React, { useState } from 'react';
import crafts from "../assets/crafts.json"

const CraftContext = React.createContext([{}, ()=>{}]);

const CraftProvider = (props) => {
    const [state, setState] = useState(crafts);
    return (
        <CraftContext.Provider value={[state,setState]}>
            {props.children}
        </CraftContext.Provider>
    )
}

export {CraftContext, CraftProvider}
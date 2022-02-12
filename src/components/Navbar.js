import React from 'react';
import {Link} from "react-router-dom"

function NavBar() {
    return (<div>
        <Link to="/">Home</Link>
        <Link to="/cross-stitch">Cross Stitch</Link>
        <Link to="/crochet">Crochet</Link>
        <Link to="/keychain">Keychain</Link>
    </div>  );
}

export default NavBar;
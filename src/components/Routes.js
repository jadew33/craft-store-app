import React from 'react';
import CrochetHome from "./CrochetHome";
import CrossStitchHome from "./CrossStitchHome";
import KeychainHome from "./KeychainHome";
import HomepageList from "./HomepageList";
import {
  Routes,
  Route
} from "react-router-dom";
function CraftStoreRouting() {
    return (       <Routes>
        <Route path="/" element={<HomepageList />} />
        <Route path="cross-stitch" element={<CrossStitchHome />} />
        <Route path="crochet" element={<CrochetHome />} />
        <Route path="keychain" element={<KeychainHome />} />
      </Routes> );
}

export default CraftStoreRouting;
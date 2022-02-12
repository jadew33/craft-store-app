import Homepage from "./Homepage";
import CategoryHome from "./CategoryHome";
import CraftListing from "./CraftListing";
import { CraftContext } from '../hooks/CraftContext';
import { useContext } from 'react';
import { Routes, Route, useParams, Navigate } from "react-router-dom";

function CraftStoreRouting() {
    return (<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listing/:id" element={<GetCurrentCraft />} />
        <Route path="/cross-stitch" element={<CategoryHome category="cross-stitch" />} />
        <Route path="/crochet" element={<CategoryHome category="crochet" />} />
        <Route path="/keychain" element={<CategoryHome category="keychain" />} />
        <Route
            path="*"
            element={<Navigate to="/" />}
        />
    </Routes>);
}

function GetCurrentCraft() {
    const [crafts] = useContext(CraftContext);
    let { id } = useParams();
    return <CraftListing craft={crafts.find(craft => craft.id === parseInt(id))} />
}

export default CraftStoreRouting;

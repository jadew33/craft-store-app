import Homepage from "./Homepage";
import CategoryHome from "./CategoryHome";
import CraftListing from "./CraftListing";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Routes, Route, useParams, Navigate } from "react-router-dom";

function CraftStoreRouting() {
    return (<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listing/:id" element={<GetCurrentCraft />} />
        <Route path="/cross-stitch" element={<CategoryHome category="cross-stitch" />} />
        <Route path="/crochet" element={<CategoryHome category="crochet" />} />
        <Route path="/keychain" element={<CategoryHome category="keychain" />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route
            path="*"
            element={<Navigate to="/" />}
        />
    </Routes>);
}

function GetCurrentCraft() {
    const crafts = useSelector((state) => state.shop.products);
    let { id } = useParams();
    return <CraftListing craft={crafts.find(craft => craft.id === parseInt(id))} />
}

export default CraftStoreRouting;

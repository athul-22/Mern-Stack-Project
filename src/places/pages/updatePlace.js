import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const updatePlace = () => {
   const placeId = useParams().placeId;
    return <h1>update place</h1>
}

export default updatePlace;
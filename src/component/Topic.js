import {useParams} from "react-router-dom";
import React from "react";

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topic
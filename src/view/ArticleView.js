import {useParams} from "react-router-dom";
import React from "react";

function ArticleView() {
    let {articleId} = useParams();
    return (
        <h3>Requested article ID: {articleId}</h3>
    )
}

export default ArticleView
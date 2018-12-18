import React, { Fragment } from "react";
import "./NotFound.css"

const NotFound = () => {
    return (
        <Fragment>
            <h1 className="nf-icon"><i className="material-icons" style={{ "fontSize": "100px" }}>sentiment_very_dissatisfied</i></h1>

            <p className="nf-p">We couldn't find any people matching your search.</p>

        </Fragment>
    )
}

export { NotFound }
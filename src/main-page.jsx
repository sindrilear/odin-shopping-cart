import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function MainPage() {

    return (
        <>
        <div>
            <div className="mainpagewrapper">
                <h1>Welcome to Electronix</h1>
                <h3>We only sell the highest quality HDDs, SDDs and monitors!</h3>
                <li className="entershoplink"><Link to="/shop">Enter Shop</Link></li>
            </div>
        </div>
        </>
    )
}

export { MainPage }
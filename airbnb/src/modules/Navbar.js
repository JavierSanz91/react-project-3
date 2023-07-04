import React from "react"
import airbnb from "../images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={airbnb} />
        </nav>
    )
}
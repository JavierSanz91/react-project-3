import React from "react"
import people from "../images/people.png"

export default function Hero() {
    return (
        <div>
            <div>
                <img className="people" src={people} />
            </div>
            <div>
                <h1 className="title">Online experiences</h1>
                <p className="subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}
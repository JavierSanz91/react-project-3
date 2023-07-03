import React from "react"
import ReactDOM from "react-dom"
import styles from "./styles.css"
import airbnb from "./images/airbnb.png"
import people from "./images/people.png"
import swimmer from "./images/swimmer.png"
import star from "./images/star.png"

function Navbar() {
    return (
        <nav>
            <img className="logo" src={airbnb} />
        </nav>
    )
}

function Main() {
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

function Card() {
    return (
        <div>
            <div className="card-photo-status">
                <img className="card-photo" src={swimmer} />
                <p className="card-status">SOLD OUT</p>
            </div>
            <div className="reviews-block">
                <img className="star-icon" src={star} />
                <p className="card-score">5.0</p>
                <p className="card-reviews" >(6) ·</p>
                <p className="card-location">USA</p>
            </div>
            <div>
                <p className="card-name">Life lessons with Katie Zaferes</p>
            </div>
            <div>
                <p className="card-price"><span className="card-price-bold">From $136 </span>/ person</p>
            </div>
        </div>
  )
}

function Page() {
    return (
        <div>
            <Navbar />
            <Main />
            <Card />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
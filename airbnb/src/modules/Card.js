import React from "react"
import swimmer from "../images/swimmer.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div>
            <div className="card-photo-status">
                <img className="card-photo" src={swimmer} alt="swimmer" />
                <p className="card-status">SOLD OUT</p>
            </div>
            <div className="reviews-block">
                <img className="star-icon" src={star} alt="star" />
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

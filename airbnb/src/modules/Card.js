import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-photo-status">
                <img className="card-photo" src={props.image} alt="swimmer" />
                {props.openSpot === 0 && <p className="card-status">{props.status}</p>}
            </div>
            <div className="reviews-block">
                <img className="star-icon" src={star} alt="star" />
                <p className="card-score">{props.score}</p>
                <p className="card-reviews" >{props.reviews}</p>
                <p className="card-location">{props.location}</p>
            </div>
            <div>
                <p className="card-name">{props.name}</p>
            </div>
            <div>
                <p className="card-price"><span className="card-price-bold">{props.price} </span>/ person</p>
            </div>
        </div>
    )
}

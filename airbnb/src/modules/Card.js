import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-photo-status">
                <img className="card-photo" src={props.experience.image} alt="swimmer" />
                {props.experience.openSpot === 0 && <p className="card-status">{props.experience.status}</p>}
            </div>
            <div className="reviews-block">
                <img className="star-icon" src={star} alt="star" />
                <p className="card-score">{props.experience.score}</p>
                <p className="card-reviews" >{props.experience.reviews}</p>
                <p className="card-location">{props.experience.location}</p>
            </div>
            <div>
                <p className="card-name">{props.experience.name}</p>
            </div>
            <div>
                <p className="card-price"><span className="card-price-bold">{props.experience.price} </span>/ person</p>
            </div>
        </div>
    )
}

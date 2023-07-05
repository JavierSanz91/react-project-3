import React from "react"
import Navbar from "./modules/Navbar"
import Hero from "./modules/Hero"
import Card from "./modules/Card"

import experiencesData from "./experiencesData"

export default function App() {
    
    const experiencesElements = experiencesData.map(experience => {
        return  <Card
            key={experience.id}
            image= {experience.image}
            status= {experience.status}
            score= {experience.score}
            reviews= {experience.reviews}
            location=  {experience.location}
            name=  {experience.name}
            price=  {experience.price}
            openSpot= {experience.openSpot}   // Add this line
        />
    })
    

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-container">
                {experiencesElements}
            </div>
        </div>
    )
}
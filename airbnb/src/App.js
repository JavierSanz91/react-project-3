import React from "react"
import Navbar from "./modules/Navbar"
import Hero from "./modules/Hero"
import Card from "./modules/Card"

import experiencesData from "./experiencesData"

export default function App() {
    
    const experiencesElements = experiencesData.map(experience => {
        return  <Card
            key={experience.id}
            experience={experience}
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
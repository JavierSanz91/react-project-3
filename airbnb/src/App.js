import React from "react"
import Navbar from "./modules/Navbar"
import Hero from "./modules/Hero"
import Card from "./modules/Card"
import swimmer from "./images/swimmer.png"
import wedding from "./images/wedding.png"
import bike from "./images/bike.png"


export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                src= {swimmer}
                status="SOLD OUT"
                score="5.0"
                reviews="(6) · "
                location="USA"
                name="Life lessons with Katie Zaferes"
                price="From $136 "
            />
            <Card 
                src= {wedding}
                status="ONLINE"
                score="5.0"
                reviews="(30) · "
                location="USA"
                name="Learn wedding photography"
                price="From $125 "
            />
            <Card 
                src= {bike}
                status="ONLINE"
                score="4.8"
                reviews="(2) · "
                location="USA"
                name="Group Mountain Biking"
                price="From $50 "            
            />
        </div>
    )
}
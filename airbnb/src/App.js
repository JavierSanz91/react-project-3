import React from "react"
import Navbar from "./modules/Navbar"
import Hero from "./modules/Hero"
import Card from "./modules/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
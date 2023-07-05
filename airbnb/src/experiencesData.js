import swimmer from "./images/swimmer.png"
import wedding from "./images/wedding.png"
import bike from "./images/bike.png"

export default [
    {
        id: 1,
        image: swimmer,
        status: "SOLD OUT",
        score: "5.0",
        reviews: "(6) · ",
        location: "USA",
        name: "Life lessons with Katie Zaferes",
        price: "From $136 ",
        openSpot: 0
    },
    {
        id: 2,
        image: wedding,
        status: "ONLINE",
        score: "5.0",
        reviews: "(30) · ",
        location: "USA",
        name: "Learn wedding photography",
        price: "From $125 ",
        openSpot: 5
    },
    {
        id: 3,
        image: bike,
        status: "ONLINE",
        score: ".8",
        reviews: "(2) · ",
        location: "USA",
        name: "Group Mountain Biking",
        price: "From $50 ",
        openSpot: 0
    }
]

import React from "react"
import { MoviesCard, MoviesDetails } from "../components"
import { gorilla } from "../assets"
function MoviesDescription() {
    return (
        <>
            <div className="">

                <MoviesDetails image={gorilla} />

            </div>
        </>
    )
}


export default MoviesDescription;
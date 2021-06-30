import React from "react";
import { useHistory } from "react-router-dom";
import { Badge } from "..";
import { Card, ImageWrapper } from "./styles"

function MoviesCard({ image, movie_date, movie_title }) {
    
    const history = useHistory()

    const redirect = () => {
        history.push('/movies/1')
    }

    return (

        <div className="p-4 cursor-pointer" onClick={() => redirect()}>

            <Card className="pb-4 sm:pb-0">

                <div className="p-3.5 card__img relative">
                    <img src={image} alt="" className="w-full" />
                    <div className="absolute text-white -bottom-2 right-4">
                        <Badge percentage="" />
                    </div>
                </div>

                <div className="px-3.5 pt-6">
                    <h3 className="movie_card_title text-white">{movie_title}</h3>
                    <h4 className="movie_card_date">{movie_date}</h4>
                </div>

            </Card>

        </div>
    )

}


export default MoviesCard;
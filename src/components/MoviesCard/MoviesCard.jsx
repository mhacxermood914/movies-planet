import React from "react";
import { Badge } from "..";
import { Card , ImageWrapper } from "./styles"

function MoviesCard({image,movie_date,movie_title}) {

    return (

        <div className="p-4">

            <Card>

                <div className="p-3.5 card__img relative">
                    <img src={image} alt="" className="w-full" />
                    <div className="absolute text-white -bottom-2 right-4">
                        <Badge  percentage=""  />
                    </div>
                </div>

                <div className="px-3.5">
                    <h3 className="movie_card_title text-white">{movie_title}</h3>
                    <h4 className="movie_card_date">{movie_date}</h4>
                </div>

            </Card>

        </div>
    )

}


export default MoviesCard;
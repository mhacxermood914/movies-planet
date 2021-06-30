import React from "react"
import { MoviesCard } from "./../components"
import { Button } from "../components/Buttons/Button"
import { gorilla, justice_league, img_1, img_2, img_3, img_4, img_5,img_6 } from "./../assets"

function Home(){
    return (
        <>
            <div className="md:p-12 py-24">

                <div className="p-4 md:mt-12">
                    <h2 className='text-white text-2xl'>Popular Movies</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-4">

                    <MoviesCard image={gorilla} movie_date={`Mar 24, 2021`} movie_title={`Godzilla vs. Kong`} />
                    <MoviesCard image={justice_league} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_1} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_2} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_3} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_4} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_5} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />
                    <MoviesCard image={img_6} movie_date={`Mar 18, 2021`} movie_title={`Zack Snyder's Justice League`} />

                </div>

                <div className="flex justify-center mt-8">
                    <Button className="text-white" width="250px" height="50px" border>Load more</Button>
                </div>

            </div>
        </>
    )
}


export default Home;
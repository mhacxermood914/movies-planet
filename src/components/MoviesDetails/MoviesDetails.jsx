import React , { useRef} from "react"
import PropTypes from 'prop-types';
import { settings , next } from "../../helpers/slide.config";
import Slider from "react-slick";
import { Badge } from "..";
import { FullDesc } from "./styles"
import { 
    bg_img , 
    author_1 , 
    author_2 , 
    author_3 , 
    author_4 , 
    author_5 ,
    go_right,
    heart,
    star,
    bookmark
} from "./../../assets"




function MoviesDetails({image}) {

    const slickRef = useRef()

    return (
        <>
            <div className="flex flex-col">

                <FullDesc className="full_description pb-24 md:py-16 lg:p-24" height={'34rem'} background={bg_img}>

                    <div className="flex flex-col sm:flex-row md:p-8 lg:p-0">

                        <div className="movie_img_wrapper md:p-0 pt-28 px-16  lg:mt-8 md:w-full  lg:w-1/2 2xl:w-1/4">

                            <img src={image} alt="" className="h-full w-full object-fit" />

                        </div>

                        <div className="description_content mx-8 md:ml-12">

                            <div></div>

                            <div className="mt-12 md:mt-0">

                                <h1 className="movie_title text-white">Godzilla vs. Kong <span>(2021)</span> </h1>

                                <ul className="flex">

                                    <li> Mar 24, 2021 (US) </li>

                                    <li>Action, Science Fiction</li>

                                    <li>1h 53m</li>

                                </ul>

                                <div className="">

                                    <div className="flex items-center justify-between w-5/6 md:w-3/5 lg:w-1/3 2xl:w-1/4  mt-8">

                                        <div className="flex">

                                            <Badge width="60px" height="60px" percentage />

                                            <div className="text-sm sm:w-12 text-white p-2">
                                                User
                                                Score
                                            </div>

                                        </div>

                                        <div className="sm:ml-4 flex justify-between">

                                            <Badge width="40px" height="40px" className="ml-12 relative" >

                                                <img src={heart} alt="" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />

                                            </Badge>

                                        </div>

                                        <div className="mx-2 sm:mx-auto">

                                            <Badge width="40px" height="40px" className="ml-12 relative" >

                                                <img src={bookmark} alt="" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />

                                            </Badge>

                                        </div>

                                        <div>

                                            <Badge width="40px" height="40px" className="ml-12 relative" >

                                                <img src={star} alt="" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />

                                            </Badge>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="overview mt-12">

                                <h1 className="text-white mb-2">Overview</h1>

                                <p className="mb-4 text-white text-md font-normal">
                                
                                    In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on 
                                    a collision course that will see the two most powerful forces of nature on the planet collide in a 
                                    spectacular battle for the ages.

                                </p>

                            </div>

                            <div className="participants_names_and_roles grid grid-rows-2 gap-y-12 gap-x-8 md:gap-y-0 grid-cols-2 md:grid-cols-3 md:grid-rows-none mt-8">
                                <div>

                                    <h1 className="author_name text-white text-sm sm:text-xl md:text-base font-semibold">Adam Wingard</h1>

                                    <h2 className="author_role text-md">Director</h2>

                                </div>

                                <div>

                                    <h1 className="author_name text-white text-sm sm:text-xl md:text-base font-semibold ">Eric Pearson</h1>

                                    <h2 className="author_role text-md">Screenplay</h2>

                                </div>

                                <div>

                                    <h1 className="author_name text-white text-sm sm:text-xl md:text-base font-semibold">Max Borenstein</h1>

                                    <h2 className="author_role text-md">Screenplay</h2>

                                </div>

                                <div className="md:mt-3">

                                    <h1 className="author_name text-white text-sm sm:text-xl md:text-base font-semibold">Terry Rossio</h1>

                                    <h2 className="author_role text-md">Story</h2>

                                </div>

                                <div className="md:mt-3">

                                    <h1 className="author_name text-white text-sm sm:text-xl md:text-base font-semibold">Zach Shields</h1>

                                    <h2 className="author_role text-md">Story</h2>

                                </div>

                            </div>
                        </div>

                    </div>
                </FullDesc>

                <div className="top_billed_cast relative  pt-14 md:px-8 lg:px-24">

                    <h1 className="text-white font-normal text-2xl ml-6 sm:ml-auto ">Top Billed Cast</h1>

                    <div className="">
                        <Slider {...settings} className="my-16 relative mx-4 md:mx-auto" ref={slickRef}>
                            <div>
                                <div>
                                    <img src={author_3} alt="" />
                                    <h1 className="author_real_name mt-2 font-semibold text-white text-md">Alexander Skarsgård</h1>
                                    <h2 className="author_name">Dr. Nathan Lind</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_2} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_1} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_4} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_5} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_1} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_3} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={author_2} alt="" />
                                    <h1 className="author_real_name mt-2 text-white font-semibold ">Millie Bobby Brown</h1>
                                    <h2 className="author_name">Madison Russell</h2>
                                </div>
                            </div>
                        </Slider>
                            
                    </div>
                    <button onClick={()=>next(slickRef.current)}  className="absolute top-1/2 right-0 transform   2xl:-translate-x-40 ">
                        <img src={go_right} alt="" />
                    </button>
                </div>

            </div>
        </>
    )

}
export default MoviesDetails
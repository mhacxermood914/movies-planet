import React, { useState } from "react";
import { logo ,search_icon } from "../../assets";
import { Button } from "../../components/Buttons/Button";
import styled from "styled-components";
import { Link } from "react-router-dom"


const Nav = styled.nav`
    background-color:#1C1C24;
`

function Navbar() {

    const [open,setOpen]=useState(false)


    return (

        <>

            <Nav className="fixed right-0 left-0 z-10 navbar">
                <div className="md:px-12 mx-auto px-2 ">

                    <div className="relative flex items-center justify-between h-16">

                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


                            <div onClick={()=>setOpen(prev=>!prev)} className={`tham ${open?'tham-active':''} tham-e-squeeze tham-w-6`}>

                                <div className="tham-box text-white">

                                    <div className="tham-inner" />

                                </div>

                            </div>

                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                            <div className="flex-1 flex sm:flex-none items-center">

                                <Link className="flex-1" to="/">
                                
                                    <img src={logo} alt="" className="w-12 m-auto sm:w-auto" srcset="" />

                                </Link>


                            </div>

                            <div className="hidden flex-1 sm:block sm:ml-6">

                                <div className="flex space-x-4 links">


                                    <a href="#" className="text-white px-3 py-2 text-xl rounded-md text-sm font-normak" aria-current="page">Movies</a>

                                    <a href="#" className="hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">TV Shows</a>

                                    <a href="#" className=" hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">People</a>

                                    <a href="#" className=" hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">More</a>
                                    
                                </div>
                            </div>

                            <Button className="transform lg:translate-y-2 sm:hidden lg:-translate-x-4"><img src={search_icon} alt="" /></Button>

                            
                        </div>

                        <div className="hidden sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className="ml-3 relative">

                                <div className="flex space-x-4 lg:block">

                                    <Button className="transform lg:translate-y-2 lg:-translate-x-4"><img src={search_icon} alt="" /></Button>
                                   
                                    <Button className="text-white"  width="97px" height="40px" border>Join</Button>

                                    <Button width="97px" height="40px" className="text-white" background>Login</Button>

                                </div>

                            </div>
                            

                        </div>

                    </div>

                </div>

                <div className="relative">
                    <div className={`sm:hidden menu-content ${open?'visible':'hidden'}  right-0 left-0`} id="mobile-menu">

                            <div className="relative z-10">
                                <ul>
                                    <li><Link to="/" className="text-white">Movies</Link></li>
                                    <li><a href="" className="text-white">TV Shows</a></li>
                                    <li><a href="" className="text-white">People</a></li>
                                    <li><a href="" className="text-white">More</a></li>
                                </ul>
                            </div>

                    </div>
                </div>


            </Nav>

        </>
    )

}


export default Navbar;
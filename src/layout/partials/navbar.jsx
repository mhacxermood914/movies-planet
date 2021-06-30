import React, { useState } from "react";
import { logo } from "../../assets";
import { Button } from "../../components/Buttons/Button";
import styled from "styled-components";


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

                            <div className="flex-shrink-0 flex items-center">

                                <img src={logo} alt="" srcset="" />

                            </div>

                            <div className="hidden sm:block sm:ml-6">

                                <div className="flex space-x-4 links">


                                    <a href="#" className="text-white px-3 py-2 text-xl rounded-md text-sm font-normak" aria-current="page">Movies</a>

                                    <a href="#" className="hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">TV Shows</a>

                                    <a href="#" className=" hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">People</a>

                                    <a href="#" className=" hover:text-white text-xl px-3 py-2 rounded-md text-sm font-normal">More</a>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className="ml-3 relative">

                                <div className="flex space-x-4 lg:block">

                                   
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
                                    <li></li>
                                </ul>
                            </div>

                    </div>
                </div>


            </Nav>

        </>
    )

}


export default Navbar;
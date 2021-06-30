import React, { useState } from "react";
import { logo } from "../../assets";
import styled from "styled-components";


const Foot = styled.footer`
    background-color:#1C1C24;
    padding: 12px;
    color: #5F5F6F;
`

function Footer() {


    return (

        <>

            <Foot>
                <div className="text-center">
                    <p>© 2021 - All Rights Reserved</p>
                </div>
            </Foot>

        </>
    )

}


export default Footer;
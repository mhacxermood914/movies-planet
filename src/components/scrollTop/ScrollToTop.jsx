import React from "react"
import {go_top} from "./../../assets"
function ScrollTop(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <>
            <div className="fixed right-0 bottom-4">
                <button onClick={() => scrollToTop()} className=""><img src={go_top} /></button>
            </div>
        </>
    )
}

export default ScrollTop;
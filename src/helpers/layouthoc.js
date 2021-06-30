import React from "react"
import { go_top } from "../assets";
import { Navbar, Footer } from "../layout"
import { ScrollToTop } from "../components";


export const LayoutHOC = (OriginalComponent) => (
    <>
        <Navbar />
        <OriginalComponent />
        <ScrollToTop />
        <Footer />
    </>
)

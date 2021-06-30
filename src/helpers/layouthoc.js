import React from "react"
import { Navbar ,  Footer } from "../layout"
export const LayoutHOC = (OriginalComponent) => (
    <>
        <Navbar />
        <OriginalComponent />
        <Footer />
    </>
)

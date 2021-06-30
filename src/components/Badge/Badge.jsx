import React, { Children } from "react"
import { Progress ,BadgeSupport } from "./styles"
function Badge ({width,height,percentage,children}){

    return (
        <>
            <BadgeSupport width={width} height={height} className="relative">

                {!width || percentage ? <div className="progress_wrapper">
                    <Progress width={width} height={height} viewBox="0 0 80 80">
                        <circle r="38" cx="40" cy="40" className="track" ></circle>
                        <circle r="30" cx="40" cy="40" className="progress" ></circle>
                    </Progress>
                    <span className="absolute text-white text-xs top-1/2 transform left-1/2 -translate-y-1/2 -translate-x-1/2">80%</span>
                </div>: children }

               
            </BadgeSupport>
        </>
    )

}

export default Badge;